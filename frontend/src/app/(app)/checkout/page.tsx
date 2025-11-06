// src/app/checkout/page.tsx
'use client'

import { useState } from 'react'
import { CheckoutBreadcrumb } from '@/components/checkout/CheckoutBreadcrumb'
import { OrderSummary } from '@/components/checkout/OrderSummary'
import { CustomerForm } from '@/components/checkout/CustomerForm'

export default function CheckoutPage() {
  const handleFormSubmit = (data: any) => {
    console.log('Form submitted:', data)
  }

  return (
    <>
      <CheckoutBreadcrumb currentPage="Checkout" />
      <main className="bg-white w-full">
        <div className="w-full px-6 sm:px-8 md:px-12 lg:px-20 xl:px-32 py-10 sm:py-12 lg:py-16">
          {/* Main Grid - Left Summary, Right Forms */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* LEFT SIDE - Order Summary (1 Column) */}
            <div className="lg:col-span-1 order-2 lg:order-1">
              <OrderSummary />
            </div>

            {/* RIGHT SIDE - Customer & Billing Forms (3 Columns) */}
            <div className="lg:col-span-3 order-1 lg:order-2">
              <CustomerForm onSubmit={handleFormSubmit} />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
