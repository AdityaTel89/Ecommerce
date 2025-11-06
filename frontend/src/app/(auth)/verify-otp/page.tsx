'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'

export default function VerifyOTPPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const email = searchParams.get('email') || ''

  const [otp, setOtp] = useState(['', '', '', '', '', ''])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [timeLeft, setTimeLeft] = useState(300) // 5 minutes
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  // Timer countdown
  useEffect(() => {
    if (timeLeft <= 0) return

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [timeLeft])

  const handleOTPChange = (index: number, value: string) => {
    if (value.length > 1) return

    const newOtp = [...otp]
    newOtp[index] = value

    setOtp(newOtp)

    // Auto focus to next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleBackspace = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handleVerifyOTP = async (e: React.FormEvent) => {
    e.preventDefault()
    const otpCode = otp.join('')

    if (otpCode.length !== 6) {
      setError('Please enter all 6 digits')
      return
    }

    setError('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/auth/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp: otpCode }),
      })

      if (!response.ok) {
        throw new Error('Invalid OTP. Please try again.')
      }

      setSuccess(true)
      // Redirect to dashboard
      setTimeout(() => {
        router.push('/app')
      }, 1500)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to verify OTP')
    } finally {
      setIsLoading(false)
    }
  }

  const handleResendOTP = async () => {
    try {
      const response = await fetch('/api/auth/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setOtp(['', '', '', '', '', ''])
        setTimeLeft(300)
        setError('')
        inputRefs.current[0]?.focus()
      }
    } catch (err) {
      setError('Failed to resend OTP')
    }
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        {/* Logo Section */}
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Image
              src="/assets/logos/foodzy-logo.png"
              alt="Foodzy"
              width={48}
              height={48}
              className="object-contain"
            />
            <h1 className="font-poppins font-bold text-3xl text-[#253D4E]">Foodzy</h1>
          </div>
          <p className="font-poppins text-sm text-gray-600">
            Verify Your Email
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          {/* Header */}
          <div className="mb-8">
            <h2 className="font-quicksand font-bold text-2xl text-[#253D4E] mb-2">
              Enter OTP
            </h2>
            <p className="font-poppins text-sm text-gray-600">
              We've sent a 6-digit code to <br />
              <span className="font-semibold text-[#253D4E]">{email}</span>
            </p>
          </div>

          {/* Success Message */}
          {success && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="font-poppins font-semibold text-sm text-green-800">
                  Email verified!
                </p>
                <p className="font-poppins text-xs text-green-700">
                  Redirecting...
                </p>
              </div>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
              <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="font-poppins font-semibold text-sm text-red-800">
                  Error
                </p>
                <p className="font-poppins text-xs text-red-700">
                  {error}
                </p>
              </div>
            </div>
          )}

          {/* OTP Form */}
          <form onSubmit={handleVerifyOTP} className="space-y-6">
            {/* OTP Input Boxes */}
            <div>
              <label className="block font-poppins text-sm font-medium text-gray-700 mb-4">
                Enter 6-digit code
              </label>
              <div className="flex gap-2 justify-center mb-4">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={(ref) => {
                      inputRefs.current[index] = ref
                    }}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOTPChange(index, e.target.value)}
                    onKeyDown={(e) => handleBackspace(index, e)}
                    disabled={isLoading}
                    className="w-12 h-12 text-center border-2 border-gray-300 rounded-lg font-quicksand font-bold text-lg focus:border-primary focus:outline-none transition-colors disabled:bg-gray-50 disabled:cursor-not-allowed"
                  />
                ))}
              </div>
            </div>

            {/* Timer */}
            <div className="flex items-center justify-center gap-2">
              <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00-.293.707l-1.414 1.414a1 1 0 101.414 1.414l2-2A1 1 0 0011 9.414V6z" clipRule="evenodd" />
              </svg>
              <span className={`font-poppins text-sm font-medium ${
                timeLeft < 60 ? 'text-red-600' : 'text-gray-600'
              }`}>
                {formatTime(timeLeft)}
              </span>
            </div>

            {/* Verify Button */}
            <button
              type="submit"
              disabled={isLoading || success}
              className="w-full bg-accent hover:bg-red-600 disabled:bg-gray-400 text-white font-quicksand font-bold py-3 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Verifying...</span>
                </>
              ) : success ? (
                <>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Verified</span>
                </>
              ) : (
                <span>Verify OTP</span>
              )}
            </button>
          </form>

          {/* Resend OTP */}
          <div className="mt-6 p-4 bg-gray-50 rounded-lg text-center">
            <p className="font-poppins text-sm text-gray-600">
              Didn't receive the code?{' '}
              <button
                type="button"
                onClick={handleResendOTP}
                disabled={timeLeft > 0}
                className="text-accent font-semibold hover:text-red-600 disabled:text-gray-400 disabled:cursor-not-allowed transition-colors"
              >
                Resend OTP
              </button>
            </p>
          </div>

          {/* Back to Login */}
          <p className="text-center mt-6 font-poppins text-sm text-gray-600">
            <Link
              href="/login"
              className="text-primary hover:underline flex items-center justify-center gap-1"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
