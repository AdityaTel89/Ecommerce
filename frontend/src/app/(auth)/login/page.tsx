'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleSendOTP = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/auth/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      if (!response.ok) {
        throw new Error('Failed to send OTP')
      }

      setSuccess(true)
      setTimeout(() => {
        router.push(`/verify-otp?email=${encodeURIComponent(email)}`)
      }, 1500)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send OTP. Please try again.')
    } finally {
      setIsLoading(false)
    }
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
            A Treasure of Tastes
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          {/* Header */}
          <div className="mb-8">
            <h2 className="font-quicksand font-bold text-2xl text-[#253D4E] mb-2">
              Welcome Back
            </h2>
            <p className="font-poppins text-sm text-gray-600">
              Sign in with your email to continue shopping
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
                  OTP sent successfully!
                </p>
                <p className="font-poppins text-xs text-green-700">
                  Redirecting to verification...
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

          {/* Login Form */}
          <form onSubmit={handleSendOTP} className="space-y-6">
            {/* Email Input */}
            <div>
              <label className="block font-poppins text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                disabled={isLoading}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg font-poppins text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all disabled:bg-gray-50 disabled:cursor-not-allowed"
              />
              <p className="font-poppins text-xs text-gray-500 mt-1.5">
                We'll send an OTP to this email
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading || success || !email}
              className="w-full bg-accent hover:bg-red-600 disabled:bg-gray-400 text-white font-quicksand font-bold py-3 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Sending OTP...</span>
                </>
              ) : success ? (
                <>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>OTP Sent</span>
                </>
              ) : (
                <span>Send OTP</span>
              )}
            </button>
          </form>

          {/* Signup Link */}
          <p className="text-center mt-8 font-poppins text-sm text-gray-600">
            Don't have an account?{' '}
            <Link
              href="/signup"
              className="text-accent font-semibold hover:text-red-600 transition-colors"
            >
              Create one
            </Link>
          </p>
        </div>

        {/* Footer Note */}
        <p className="text-center mt-6 font-poppins text-xs text-gray-500">
          By signing in, you agree to our{' '}
          <Link href="#" className="text-primary hover:underline">
            Terms of Service
          </Link>
          {' & '}
          <Link href="#" className="text-primary hover:underline">
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  )
}
