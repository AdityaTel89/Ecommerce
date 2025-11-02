import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';
import { Order } from '../orders/entities/order.entity';

@Injectable()
export class EmailService {
  private transporter: nodemailer.Transporter;

  constructor(private configService: ConfigService) {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: this.configService.get('EMAIL_USER'),
        pass: this.configService.get('EMAIL_PASSWORD'),
      },
    });
  }

  async sendOtpEmail(email: string, otp: string): Promise<void> {
    const htmlContent = this.getOtpEmailTemplate(otp);

    await this.transporter.sendMail({
      from: this.configService.get('EMAIL_FROM'),
      to: email,
      subject: 'Your OTP for Email Verification',
      html: htmlContent,
    });
  }

  async sendOrderConfirmation(email: string, order: Order): Promise<void> {
    const htmlContent = this.getOrderConfirmationTemplate(order);

    await this.transporter.sendMail({
      from: this.configService.get('EMAIL_FROM'),
      to: email,
      subject: `Order Confirmation - Order #${order.id}`,
      html: htmlContent,
    });
  }

  private getOtpEmailTemplate(otp: string): string {
    return `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #4CAF50; color: white; padding: 20px; text-align: center; }
            .content { padding: 20px; background-color: #f9f9f9; }
            .otp-box { background-color: #fff; padding: 20px; text-align: center; margin: 20px 0; border: 2px solid #4CAF50; }
            .otp { font-size: 32px; font-weight: bold; color: #4CAF50; letter-spacing: 5px; }
            .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Email Verification</h1>
            </div>
            <div class="content">
              <p>Hello,</p>
              <p>Thank you for registering. Please use the OTP below to verify your email:</p>
              <div class="otp-box">
                <div class="otp">${otp}</div>
              </div>
              <p>This OTP is valid for 5 minutes.</p>
              <p>If you didn't request this, please ignore this email.</p>
            </div>
            <div class="footer">
              <p>&copy; 2025 Ecommerce. All rights reserved.</p>
            </div>
          </div>
        </body>
      </html>
    `;
  }

  private getOrderConfirmationTemplate(order: Order): string {
    const itemsHtml = order.items
      .map(
        (item) => `
      <tr>
        <td>${item.product.name}</td>
        <td>${item.quantity}</td>
        <td>₹${item.price}</td>
        <td>₹${Number(item.price) * item.quantity}</td>
      </tr>
    `,
      )
      .join('');

    return `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #2196F3; color: white; padding: 20px; text-align: center; }
            .content { padding: 20px; background-color: #f9f9f9; }
            table { width: 100%; border-collapse: collapse; margin: 20px 0; }
            th, td { padding: 10px; text-align: left; border-bottom: 1px solid #ddd; }
            th { background-color: #2196F3; color: white; }
            .total { font-size: 18px; font-weight: bold; margin: 20px 0; }
            .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Order Confirmation</h1>
            </div>
            <div class="content">
              <p>Hello,</p>
              <p>Thank you for your order! Here are your order details:</p>
              <p><strong>Order ID:</strong> ${order.id}</p>
              <table>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  ${itemsHtml}
                </tbody>
              </table>
              <div class="total">
                Total Amount: ₹${order.totalAmount}
              </div>
              <p><strong>Shipping Address:</strong><br>
              ${order.shippingAddress}<br>
              ${order.shippingCity}, ${order.shippingZipCode}</p>
              <p>We will notify you once your order is shipped.</p>
            </div>
            <div class="footer">
              <p>&copy; 2025 Ecommerce. All rights reserved.</p>
            </div>
          </div>
        </body>
      </html>
    `;
  }
}
