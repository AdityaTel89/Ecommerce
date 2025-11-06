// src/components/product/ProductDetails.tsx
'use client'

import React, { useState } from 'react'
import Image from 'next/image'

interface ProductDetailsProps {
  productImage: string
  productTitle: string
  productDescription: string
  rating: number
  reviewCount: number
  brand: string
  flavour: string
  dietType: string
  weight: string
  speciality: string
  info: string
  items: number
  originalPrice: number
  salePrice: number
  sizes: string[]
}

export const ProductDetails: React.FC<ProductDetailsProps> = ({
  productImage,
  productTitle,
  productDescription,
  rating,
  reviewCount,
  brand,
  flavour,
  dietType,
  weight,
  speciality,
  info,
  items,
  originalPrice,
  salePrice,
  sizes,
}) => {
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState(sizes[0])
  const [activeTab, setActiveTab] = useState('description')

  const handleAddToCart = () => {
    console.log(`Added ${quantity} items of size ${selectedSize} to cart`)
  }

  const renderStars = (count: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <div
        key={i}
        className={`w-3 h-3 ${i < count ? 'bg-[#F5885F]' : 'bg-gray-300'}`}
      />
    ))
  }

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Main Product Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Image Section */}
        <div className="flex items-center justify-center bg-[#F7F7F8] border border-[#E9E9E9] rounded-md p-4 h-80">
          <Image
            src={productImage}
            alt={productTitle}
            width={300}
            height={300}
            className="object-contain w-full h-full"
          />
        </div>

        {/* Details Section */}
        <div className="flex flex-col space-y-4">
          {/* Title */}
          <h2 className="font-['Segoe UI'] font-normal text-lg text-[#2B2B2D] tracking-[0.48px] leading-tight">
            {productTitle}
          </h2>

          {/* Description */}
          <p className="font-poppins font-normal text-xs text-[#7A7A7A] tracking-[0.48px] leading-5">
            {productDescription}
          </p>

          {/* Rating Section */}
          <div className="flex items-center gap-2">
            <div className="flex gap-1">{renderStars(rating)}</div>
            <span className="font-poppins font-normal text-xs text-[#7A7A7A] tracking-[0.48px]">
              ({reviewCount} Review)
            </span>
          </div>

          {/* Product Info Grid */}
          <div className="grid grid-cols-2 gap-2 py-3 border-y border-[#E9E9E9]">
            {[
              { label: 'Brand', value: brand },
              { label: 'Flavour', value: flavour },
              { label: 'Diet Type', value: dietType },
              { label: 'Weight', value: weight },
              { label: 'Speciality', value: speciality },
              { label: 'Info', value: info },
            ].map((item, idx) => (
              <div key={idx} className="flex justify-between text-xs">
                <span className="font-['Segoe UI'] font-semibold text-[#2B2B2D]">
                  {item.label}:
                </span>
                <span className="font-['Segoe UI'] font-normal text-[#777777]">
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          {/* Price Section */}
          <div className="flex items-center gap-2">
            <span className="font-poppins font-semibold text-lg text-[#F53E32] tracking-[0.48px]">
              ${salePrice.toFixed(2)}
            </span>
            <span className="font-poppins font-normal text-xs text-[#7A7A7A] tracking-[0.48px] line-through">
              ${originalPrice.toFixed(2)}
            </span>
          </div>

          {/* Size Selection */}
          <div className="space-y-2">
            <h5 className="font-poppins font-medium text-xs text-[#2B2B2D] tracking-[0.48px]">
              Size/Weight:
            </h5>
            <div className="flex gap-2 flex-wrap">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-3 py-1 text-xs rounded border transition-all ${
                    selectedSize === size
                      ? 'bg-[#F53E32] text-white border-[#F53E32]'
                      : 'bg-white text-[#777777] border-[#E9E9E9] hover:border-[#F53E32]'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="flex gap-2 items-center">
            <div className="w-10 h-9 bg-white border border-[#E9E9E9] rounded flex items-center justify-center">
              <span className="font-['Segoe UI'] font-normal text-sm text-black">
                {quantity}
              </span>
            </div>

            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-9 h-9 bg-white border border-[#E9E9E9] rounded flex items-center justify-center hover:bg-gray-100 text-sm"
            >
              +
            </button>

            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-9 h-9 bg-white border border-[#E9E9E9] rounded flex items-center justify-center hover:bg-gray-100 text-sm"
            >
              −
            </button>

            <button
              onClick={handleAddToCart}
              className="flex-1 h-9 bg-[#F53E32] border border-[#F53E32] rounded hover:opacity-90 transition-opacity flex items-center justify-center"
            >
              <span className="font-manrope font-bold text-xs text-white uppercase">
                Add to Cart
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="bg-white border border-[#E9E9E9] rounded-md p-4">
        <div className="flex gap-6 border-b border-[#DEE2E6] mb-4">
          {['description', 'information', 'review'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 text-xs font-poppins font-semibold border-b-2 capitalize transition-all ${
                activeTab === tab
                  ? 'text-[#F53E32] border-[#64B496]'
                  : 'text-[#2B2B2D] border-transparent'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="text-xs">
          {activeTab === 'description' && (
            <div className="space-y-3">
              <p className="font-poppins font-normal text-[#7A7A7A] tracking-[0.48px] leading-5">
                {productDescription}
              </p>
              <div className="border-t pt-3">
                <h4 className="font-poppins font-medium text-xs text-[#2B2B2D] tracking-[0.48px] mb-2">
                  Packaging & Delivery
                </h4>
                <p className="font-poppins font-normal text-[#7A7A7A] tracking-[0.48px] leading-5">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, maiores placeat. Architecto soluta, cum corporis sit odio at in accusamus ea beatae minus minima qui quos fugiat officiis cumque! Et qui laboriosam quas atque, sit odio. Repudiandae quia totam, distinctio dignissimos minima neque nemo maiores sequi culpa, fugiat, officia qui obcaecati earum ab architecto! Culpa quis laborum eos blanditiis quia quam architecto, perferendis magni et odit consequuntur, dicta dignissimos eligendi. Ipsam aspernatur, ut laboriosam fugit dolor nostrum quasi ex non quam officia alias maxime sed eveniet asperiores sapiente quia exercitationem animi, ipsum voluptatum unde molestias magnam iusto voluptatibus possimus. Quisquam!
                </p>
              </div>
            </div>
          )}
          {activeTab === 'information' && (
            <p className="font-poppins font-normal text-[#7A7A7A]">Information content...</p>
          )}
          {activeTab === 'review' && (
            <p className="font-poppins font-normal text-[#7A7A7A]">Review content...</p>
          )}
        </div>
      </div>
    </div>
  )
}
