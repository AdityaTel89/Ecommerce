// src/components/product/PopularProducts.tsx
'use client'

import React, { useState } from 'react'
import Image from 'next/image'

interface Product {
  id: number
  image: string
  category: string
  title: string
  rating: number
  originalPrice: number
  salePrice: number
}

interface PopularProductsProps {
  products?: Product[]
}

const DEFAULT_PRODUCTS: Product[] = [
  {
    id: 1,
    image: '/Assets/images/product1.jpg',
    category: 'Snacks',
    title: 'Best snakes with hazel nut mix pack 200gm',
    rating: 5,
    originalPrice: 123.25,
    salePrice: 120.25,
  },
  {
    id: 2,
    image: '/Assets/images/product2.jpg',
    category: 'Snacks',
    title: 'Sweet snakes crunchy nut mix 250gm pack',
    rating: 4,
    originalPrice: 110.0,
    salePrice: 100.0,
  },
  {
    id: 3,
    image: '/Assets/images/product3.jpg',
    category: 'Snacks',
    title: 'Best snakes with hazel nut mix pack 200gm',
    rating: 5,
    originalPrice: 123.25,
    salePrice: 120.25,
  },
  {
    id: 4,
    image: '/Assets/images/product4.jpg',
    category: 'Snacks',
    title: 'Sweet snakes crunchy nut mix 250gm pack',
    rating: 4,
    originalPrice: 110.0,
    salePrice: 100.0,
  },
]

const renderStars = (count: number) => {
  return Array.from({ length: 5 }).map((_, i) => (
    <div
      key={i}
      className={`w-2.5 h-2.5 ${i < count ? 'bg-[#F5885F]' : 'bg-gray-300'}`}
    />
  ))
}

export const PopularProducts: React.FC<PopularProductsProps> = ({
  products = DEFAULT_PRODUCTS,
}) => {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section className="w-full bg-white py-16 px-6 sm:px-8 md:px-12 lg:px-20 xl:px-32">
      {/* Header Section */}
      <div className="text-center mb-12 space-y-3">
        <h2 className="font-manrope font-bold text-3xl md:text-4xl text-[#2B2B2D] tracking-[0.48px]">
          Popular Products
        </h2>
        <p className="font-poppins font-normal text-sm md:text-base text-[#7A7A7A] tracking-[0.48px] max-w-2xl mx-auto leading-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et viverra maecenas accumsan lacus vel facilisis.
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white border border-[#E9E9E9] rounded-md overflow-hidden hover:shadow-lg transition-shadow"
            onMouseEnter={() => setHoveredId(product.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* Product Image Section */}
            <div className="relative bg-[#F7F7F8] h-72 overflow-hidden">
              <Image
                src={product.image}
                alt={product.title}
                width={280}
                height={280}
                className="w-full h-full object-cover"
              />

              {/* Add to Cart Button - Appears on Hover */}
              {hoveredId === product.id && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-4">
                  <button className="w-9 h-9 bg-[#F7F7F8] border border-[#E9E9E9] rounded-full flex items-center justify-center hover:bg-[#64B496] hover:border-[#64B496] transition-all">
                    <svg
                      className="w-5 h-5 text-[#64B496] group-hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10.5 1.5H9.5V0h1v1.5zm0 17H9.5v1.5h1V18.5zm8-8.5v1H17v-1h1.5zM2 10h1.5v-1H2v1zm14.5-5L18 3.5l-1.06-1.06-3.54 3.54 1.06 1.06zm-9 9l3.54 3.54 1.06-1.06-3.54-3.54-1.06 1.06zM18 14.46l1.06 1.06L16.5 18l-1.06-1.06L18 14.46zM4 4l1.06 1.06L1.5 8.6 0.44 7.54 4 4z" />
                    </svg>
                  </button>
                </div>
              )}
            </div>

            {/* Product Details Section */}
            <div className="p-3 space-y-3">
              {/* Category */}
              <div className="text-center">
                <span className="font-['Segoe UI'] font-normal text-xs text-[#777777] tracking-[0.48px]">
                  {product.category}
                </span>
              </div>

              {/* Rating */}
              <div className="flex justify-center gap-1">
                {renderStars(product.rating)}
              </div>

              {/* Product Title */}
              <h3 className="font-poppins font-medium text-sm text-[#2B2B2D] text-center line-clamp-2 leading-6 tracking-[0.48px]">
                {product.title}
              </h3>

              {/* Prices */}
              <div className="flex items-center justify-center gap-2">
                <span className="font-poppins font-bold text-base text-[#F53E32] tracking-[0.48px]">
                  ${product.salePrice.toFixed(2)}
                </span>
                <span className="font-poppins font-normal text-xs text-[#7A7A7A] tracking-[0.48px] line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
