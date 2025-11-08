'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/app/context/AuthContext'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'

export default function SignupPage() {
  const router = useRouter()
  const { isAuthenticated, isLoading } = useAuth()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  })
  const [isLoadingForm, setIsLoadingForm] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      router.push('/')
    }
  }, [isAuthenticated, isLoading, router])

  const validateForm = (): boolean => {
    const errors: Record<string, string> = {}
    if (!formData.firstName.trim()) errors.firstName = 'First name is required'
    if (!formData.lastName.trim()) errors.lastName = 'Last name is required'
    if (!formData.email.trim()) {
      errors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email'
    }
    setFieldErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
    if (fieldErrors[name]) {
      setFieldErrors(prev => ({
        ...prev,
        [name]: '',
      }))
    }
  }

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault() 
    if (!validateForm()) return
    setError('')
    setIsLoadingForm(true)

    try {
      const response = await fetch(`${API_BASE_URL}/auth/signup-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Failed to create account')
      }

      setSuccess(true)
      // Redirect with email and the OTP so the verify page can autofill
      setTimeout(() => {
        router.push(`/verify-otp?email=${encodeURIComponent(formData.email)}&otp=${data.otp}`)
      }, 1000)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create account. Please try again.')
    } finally {
      setIsLoadingForm(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
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
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="mb-8">
            <h2 className="font-quicksand font-bold text-2xl text-[#253D4E] mb-2">
              Create Account
            </h2>
            <p className="font-poppins text-sm text-gray-600">
              Join us and start shopping delicious food
            </p>
          </div>
          {success && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="font-poppins font-semibold text-sm text-green-800">
                  Account created successfully!
                </p>
                <p className="font-poppins text-xs text-green-700">
                  Redirecting to verify email...
                </p>
              </div>
            </div>
          )}
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
          <form onSubmit={handleSignup} className="space-y-5">
            <div>
              <label className="block font-poppins text-sm font-medium text-gray-700 mb-2">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="Enter your first name"
                disabled={isLoadingForm}
                className={`w-full px-4 py-3 border rounded-lg font-poppins text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all disabled:bg-gray-50 disabled:cursor-not-allowed ${fieldErrors.firstName ? 'border-red-500' : 'border-gray-300'}`}
              />
              {fieldErrors.firstName && (
                <p className="font-poppins text-xs text-red-500 mt-1.5">{fieldErrors.firstName}</p>
              )}
            </div>
            <div>
              <label className="block font-poppins text-sm font-medium text-gray-700 mb-2">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Enter your last name"
                disabled={isLoadingForm}
                className={`w-full px-4 py-3 border rounded-lg font-poppins text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all disabled:bg-gray-50 disabled:cursor-not-allowed ${fieldErrors.lastName ? 'border-red-500' : 'border-gray-300'}`}
              />
              {fieldErrors.lastName && (
                <p className="font-poppins text-xs text-red-500 mt-1.5">{fieldErrors.lastName}</p>
              )}
            </div>
            <div>
              <label className="block font-poppins text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                disabled={isLoadingForm}
                className={`w-full px-4 py-3 border rounded-lg font-poppins text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all disabled:bg-gray-50 disabled:cursor-not-allowed ${fieldErrors.email ? 'border-red-500' : 'border-gray-300'}`}
              />
              {fieldErrors.email && (
                <p className="font-poppins text-xs text-red-500 mt-1.5">{fieldErrors.email}</p>
              )}
            </div>
            <button
              type="submit"
              disabled={isLoadingForm || success}
              className="w-full bg-accent hover:bg-red-600 disabled:bg-gray-400 text-white font-quicksand font-bold py-3 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 mt-6"
            >
              {isLoadingForm ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Creating Account...</span>
                </>
              ) : success ? (
                <>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Account Created</span>
                </>
              ) : (
                <span>Create Account</span>
              )}
            </button>
          </form>
          <p className="text-center mt-8 font-poppins text-sm text-gray-600">
            Already have an account?{' '}
            <Link
              href="/login"
              className="text-accent font-semibold hover:text-red-600 transition-colors"
            >
              Sign in
            </Link>
          </p>
        </div>
        <p className="text-center mt-6 font-poppins text-xs text-gray-500">
          By signing up, you agree to our{' '}
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
