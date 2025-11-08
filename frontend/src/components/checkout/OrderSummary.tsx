// src/components/checkout/OrderSummary.tsx
'use client'

import React, { useState } from 'react'
import Image from 'next/image'

interface CartItem {
  id: number
  image: string
  title: string
  rating: number
  price: number
  originalPrice: number
}

interface OrderSummaryProps {
  items?: CartItem[]
  subtotal?: number
  deliveryCharge?: number
}

const DEFAULT_ITEMS: CartItem[] = [
  {
    id: 1,
    image: '/assets/images/product10.jpg',
    title: 'Dates Value Pack Pouch',
    rating: 5,
    price: 120.25,
    originalPrice: 123.25,
  },
  {
    id: 2,
    image: '/assets/images/product12.jpg',
    title: 'Smoked Honey Spiced Nuts',
    rating: 5,
    price: 120.25,
    originalPrice: 123.25,
  },
]

const renderStars = (count: number) => {
  return Array.from({ length: 5 }).map((_, i) => (
    <svg
      key={i}
      className={`w-2.5 h-2.5 ${i < count ? 'fill-[#F4A263]' : 'fill-gray-300'}`}
      viewBox="0 0 20 20"
    >
      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
    </svg>
  ))
}

export const OrderSummary: React.FC<OrderSummaryProps> = ({
  items = DEFAULT_ITEMS,
  subtotal = 80.0,
  deliveryCharge = 80.0,
}) => {
  const [deliveryMethod, setDeliveryMethod] = useState('free')
  const [paymentMethod, setPaymentMethod] = useState('cod')
  const total = subtotal + deliveryCharge

  return (
    <div className="space-y-4">
      {/* Summary Card */}
      <div className="bg-white border border-[#E9E9E9] rounded-md p-4">
        <h3 className="font-['Segoe UI'] font-semibold text-base text-black mb-4">
          Summary
        </h3>

        <div className="space-y-2 mb-3">
          <div className="flex justify-between items-center">
            <span className="font-['Segoe UI'] font-normal text-xs text-[#7A7A7A]">
              Sub-Total
            </span>
            <span className="font-['Segoe UI'] font-normal text-xs text-black tracking-[0.48px]">
              ${subtotal.toFixed(2)}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="font-['Segoe UI'] font-normal text-xs text-[#7A7A7A]">
              Delivery Charges
            </span>
            <span className="font-['Segoe UI'] font-normal text-xs text-black tracking-[0.48px]">
              ${deliveryCharge.toFixed(2)}
            </span>
          </div>
        </div>

        <div className="pt-3 border-t border-[#E9E9E9] flex justify-between items-center">
          <span className="font-manrope font-semibold text-sm text-[#2B2B2D]">
            Total Amount
          </span>
          <span className="font-manrope font-semibold text-sm text-black tracking-[0.48px]">
            ${total.toFixed(2)}
          </span>
        </div>

        {/* Cart Items */}
        <div className="mt-4 pt-4 border-t border-[#E9E9E9] space-y-3">
          {items.map((item) => (
            <div key={item.id} className="flex gap-2">
              <div className="w-16 h-16 flex-shrink-0 bg-[#F7F7F8] rounded border border-[#E9E9E9]">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover rounded"
                />
              </div>

              <div className="flex-1 min-w-0">
                <h5 className="font-['Segoe UI'] font-normal text-xs text-black tracking-[0.48px] line-clamp-2 mb-1">
                  {item.title}
                </h5>

                <div className="flex gap-0.5 mb-1">{renderStars(item.rating)}</div>

                <div className="flex items-center gap-1">
                  <span className="font-poppins font-bold text-sm text-[#64B496] tracking-[0.48px]">
                    ${item.price.toFixed(2)}
                  </span>
                  <span className="font-poppins font-normal text-xs text-[#7A7A7A] tracking-[0.48px] line-through">
                    ${item.originalPrice.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Delivery Method Card */}
      <div className="bg-white border border-[#E9E9E9] rounded-md p-4">
        <h3 className="font-['Segoe UI'] font-semibold text-base text-black mb-2">
          Delivery Method
        </h3>
        <p className="font-['Segoe UI'] font-normal text-xs text-[#7A7A7A] leading-5 mb-3">
          Please select the preferred shipping method to use on this order.
        </p>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <input
              type="radio"
              name="delivery"
              value="free"
              checked={deliveryMethod === 'free'}
              onChange={(e) => setDeliveryMethod(e.target.value)}
              className="w-4 h-4 cursor-pointer accent-[#F53E32]"
            />
            <label className="text-xs font-['Segoe UI'] font-normal text-[#2B2B2D] cursor-pointer flex-1">
              Free Shipping
            </label>
            <span className="text-xs font-['Segoe UI'] font-normal text-[#7A7A7A]">
              Rate - $0.00
            </span>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="radio"
              name="delivery"
              value="flat"
              checked={deliveryMethod === 'flat'}
              onChange={(e) => setDeliveryMethod(e.target.value)}
              className="w-4 h-4 cursor-pointer accent-[#F53E32]"
            />
            <label className="text-xs font-['Segoe UI'] font-normal text-[#2B2B2D] cursor-pointer flex-1">
              Flat Rate
            </label>
            <span className="text-xs font-['Segoe UI'] font-normal text-[#7A7A7A]">
              Rate - $5.00
            </span>
          </div>
        </div>
      </div>

      {/* Payment Method Card */}
      <div className="bg-white border border-[#E9E9E9] rounded-md p-4">
        <h3 className="font-['Segoe UI'] font-semibold text-base text-black mb-2">
          Payment Method
        </h3>
        <p className="font-['Segoe UI'] font-light text-xs text-[#7A7A7A] leading-5 mb-3">
          Please select the preferred payment method to use on this order.
        </p>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <input
              type="radio"
              name="payment"
              value="cod"
              checked={paymentMethod === 'cod'}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="w-4 h-4 cursor-pointer accent-[#F53E32]"
            />
            <span className="text-xs font-['Segoe UI'] font-normal text-[#7A7A7A]">
              Cash On Delivery
            </span>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="radio"
              name="payment"
              value="upi"
              checked={paymentMethod === 'upi'}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="w-4 h-4 cursor-pointer accent-[#F53E32]"
            />
            <span className="text-xs font-['Segoe UI'] font-normal text-[#7A7A7A]">
              UPI
            </span>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="radio"
              name="payment"
              value="bank"
              checked={paymentMethod === 'bank'}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="w-4 h-4 cursor-pointer accent-[#F53E32]"
            />
            <span className="text-xs font-['Segoe UI'] font-normal text-[#7A7A7A]">
              Bank Transfer
            </span>
          </div>
        </div>
      </div>

      {/* Payment Icons Card */}
      <div className="bg-white border border-[#E9E9E9] rounded-md p-4">
        <h3 className="font-['Segoe UI'] font-semibold text-base text-black mb-3">
          Payment Method
        </h3>
        <div className="">
          <Image
            src="/assets/images/Payment.png"
            alt="Visa"
            width={280}
            height={25}
            className="h-6 w-auto"
          />
          
        </div>
      </div>
    </div>
  )
}
