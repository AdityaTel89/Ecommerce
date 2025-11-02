import { Injectable, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { EmailService } from '../email/email.service';
import { LoginDto, VerifyOtpDto } from './dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private emailService: EmailService,
  ) {}

  async register(email: string, password: string) {
    const existingUser = await this.usersService.findByEmail(email);
    if (existingUser) {
      throw new BadRequestException('Email already registered');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const otp = this.generateOtp();
    const otpExpiry = new Date(Date.now() + 5 * 60 * 1000); // 5 minutes

    const user = await this.usersService.create({
      email,
      password: hashedPassword,
      otp,
      otpExpiry,
      isEmailVerified: false,
    });

    // Send OTP via email
    await this.emailService.sendOtpEmail(email, otp);

    return {
      message: 'User registered successfully. OTP sent to email.',
      email: user.email,
    };
  }

  async login(loginDto: LoginDto) {
    const user = await this.usersService.findByEmail(loginDto.email);
    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const passwordMatch = await bcrypt.compare(loginDto.password, user.password);
    if (!passwordMatch) {
      throw new UnauthorizedException('Invalid email or password');
    }

    if (!user.isEmailVerified) {
      if (!loginDto.otp) {
        throw new BadRequestException('Email not verified. Please provide OTP.');
      }

      const isOtpValid = await this.verifyOtp(user.email, loginDto.otp);
      if (!isOtpValid) {
        throw new BadRequestException('Invalid or expired OTP');
      }

      user.isEmailVerified = true;
      await this.usersService.update(user.id, { isEmailVerified: true });
    }

    const token = this.jwtService.sign({
      sub: user.id,
      email: user.email,
    });

    return {
      message: 'Login successful',
      token,
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
      },
    };
  }

  async verifyOtp(email: string, otp: string): Promise<boolean> {
    const user = await this.usersService.findByEmail(email);
    if (!user) {
      throw new BadRequestException('User not found');
    }

    if (!user.otp || user.otp !== otp) {
      return false;
    }

    if (user.otpExpiry < new Date()) {
      return false;
    }

    return true;
  }

  async resendOtp(email: string) {
    const user = await this.usersService.findByEmail(email);
    if (!user) {
      throw new BadRequestException('User not found');
    }

    const otp = this.generateOtp();
    const otpExpiry = new Date(Date.now() + 5 * 60 * 1000);

    await this.usersService.update(user.id, { otp, otpExpiry });
    await this.emailService.sendOtpEmail(email, otp);

    return {
      message: 'OTP sent successfully',
      email,
    };
  }

  private generateOtp(): string {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }
}
