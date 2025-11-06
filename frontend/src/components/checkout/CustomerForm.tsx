// src/components/checkout/CustomerForm.tsx
'use client'

import React, { useState } from 'react'

interface CustomerFormProps {
  onSubmit?: (data: any) => void
}

export const CustomerForm: React.FC<CustomerFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    email: '',
    otp: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    postCode: '',
    country: '',
    regionState: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit?.(formData)
  }

  return (
    <div className="space-y-6">
      {/* Customer Section */}
      <div className="bg-white border border-[#E9E9E9] rounded-md p-6">
        <h3 className="font-['Montserrat'] font-semibold text-lg text-[#2B2B2D] mb-2">
          Customer
        </h3>

        <p className="font-['Segoe UI'] font-normal text-sm text-[#2B2B2D] mb-6">
          Checkout Options
        </p>

        <div className="space-y-5">
          <div>
            <h4 className="font-['Montserrat'] font-semibold text-lg text-[#2B2B2D] mb-4">
              Returning Customer
            </h4>

            <div className="mb-4">
              <label className="font-['Segoe UI'] font-normal text-sm text-[#2B2B2D] block mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full h-12 px-4 border border-[#E9E9E9] rounded-md font-['Segoe UI'] text-sm text-[#757575] placeholder-[#757575] focus:outline-none focus:border-[#F53E32] focus:ring-1 focus:ring-[#F53E32]"
              />
            </div>

            <div className="mb-6">
              <label className="font-['Segoe UI'] font-normal text-sm text-[#2B2B2D] block mb-2">
                OTP
              </label>
              <input
                type="text"
                placeholder="Enter your OTP"
                value={formData.otp}
                onChange={(e) => setFormData({ ...formData, otp: e.target.value })}
                className="w-full h-12 px-4 border border-[#E9E9E9] rounded-md font-['Segoe UI'] text-sm text-[#757575] placeholder-[#757575] focus:outline-none focus:border-[#F53E32] focus:ring-1 focus:ring-[#F53E32]"
              />
            </div>

            <div className="flex justify-center">
              <button
                type="button"
                className="px-8 h-10 bg-[#F53E32] rounded-md font-manrope font-medium text-sm text-white uppercase hover:bg-[#E63224] transition"
              >
                Verify
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Billing Details Section */}
      <div className="bg-white border border-[#E9E9E9] rounded-md p-6">
        <h3 className="font-['Montserrat'] font-semibold text-lg text-[#2B2B2D] mb-2">
          Billing Details
        </h3>

        <p className="font-['Segoe UI'] font-normal text-sm text-[#2B2B2D] mb-6">
          Checkout Options
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* First Name & Last Name */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="font-['Segoe UI'] font-normal text-sm text-[#2B2B2D] block mb-2">
                First Name*
              </label>
              <input
                type="text"
                placeholder="Enter your first name"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                className="w-full h-12 px-4 border border-[#E9E9E9] rounded-md font-['Segoe UI'] text-sm text-[#757575] placeholder-[#757575] focus:outline-none focus:border-[#F53E32] focus:ring-1 focus:ring-[#F53E32]"
                required
              />
            </div>

            <div>
              <label className="font-['Segoe UI'] font-normal text-sm text-[#2B2B2D] block mb-2">
                Last Name*
              </label>
              <input
                type="text"
                placeholder="Enter your last name"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                className="w-full h-12 px-4 border border-[#E9E9E9] rounded-md font-['Segoe UI'] text-sm text-[#757575] placeholder-[#757575] focus:outline-none focus:border-[#F53E32] focus:ring-1 focus:ring-[#F53E32]"
                required
              />
            </div>
          </div>

          {/* Address */}
          <div>
            <label className="font-['Segoe UI'] font-normal text-sm text-[#2B2B2D] block mb-2">
              Address
            </label>
            <input
              type="text"
              placeholder="Address Line 1"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              className="w-full h-12 px-4 border border-[#E9E9E9] rounded-md font-['Segoe UI'] text-sm text-[#757575] placeholder-[#757575] focus:outline-none focus:border-[#F53E32] focus:ring-1 focus:ring-[#F53E32]"
            />
          </div>

          {/* City & Post Code */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="font-['Segoe UI'] font-normal text-sm text-[#2B2B2D] block mb-2">
                City *
              </label>
              <select
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                className="w-full h-12 px-4 border border-[#E9E9E9] rounded-md font-['Segoe UI'] text-sm text-[#7A7A7A] focus:outline-none focus:border-[#F53E32] focus:ring-1 focus:ring-[#F53E32] appearance-none bg-white cursor-pointer"
              >
                <option value="">City</option>
                <option value="new-york">New York</option>
                <option value="los-angeles">Los Angeles</option>
                <option value="chicago">Chicago</option>
              </select>
            </div>

            <div>
              <label className="font-['Segoe UI'] font-normal text-sm text-[#2B2B2D] block mb-2">
                Post Code
              </label>
              <input
                type="text"
                placeholder="Post Code"
                value={formData.postCode}
                onChange={(e) => setFormData({ ...formData, postCode: e.target.value })}
                className="w-full h-12 px-4 border border-[#E9E9E9] rounded-md font-['Segoe UI'] text-sm text-[#757575] placeholder-[#757575] focus:outline-none focus:border-[#F53E32] focus:ring-1 focus:ring-[#F53E32]"
              />
            </div>
          </div>

          {/* Country & Region State */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="font-['Segoe UI'] font-normal text-sm text-[#2B2B2D] block mb-2">
                Country *
              </label>
              <select
                value={formData.country}
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                className="w-full h-12 px-4 border border-[#E9E9E9] rounded-md font-['Segoe UI'] text-sm text-[#7A7A7A] focus:outline-none focus:border-[#F53E32] focus:ring-1 focus:ring-[#F53E32] appearance-none bg-white cursor-pointer"
              >
                <option value="">Country</option>
                <option value="usa">United States</option>
                <option value="uk">United Kingdom</option>
                <option value="india">India</option>
              </select>
            </div>

            <div>
              <label className="font-['Segoe UI'] font-normal text-sm text-[#2B2B2D] block mb-2">
                Region State
              </label>
              <select
                value={formData.regionState}
                onChange={(e) => setFormData({ ...formData, regionState: e.target.value })}
                className="w-full h-12 px-4 border border-[#E9E9E9] rounded-md font-['Segoe UI'] text-sm text-[#7A7A7A] focus:outline-none focus:border-[#F53E32] focus:ring-1 focus:ring-[#F53E32] appearance-none bg-white cursor-pointer"
              >
                <option value="">Region/State</option>
                <option value="california">California</option>
                <option value="texas">Texas</option>
                <option value="florida">Florida</option>
              </select>
            </div>
          </div>

          {/* Place Order Button */}
          <div className="flex justify-self-end pt-2">
            <button
              type="submit"
              onClick={handleSubmit}
              className="px-6 h-10 bg-[#F53E32] rounded-md font-manrope font-normal text-sm text-white uppercase hover:bg-[#E63224] transition"
            >
              Place Order
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
