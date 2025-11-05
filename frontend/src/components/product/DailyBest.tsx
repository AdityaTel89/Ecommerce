'use client'

import Image from 'next/image'
import { useState } from 'react'

const PRODUCTS = [
  {
    id: 1,
    title: 'All Natural Italian-Style Chicken Meatballs',
    category: 'Hodo Foods',
    image: '/assets/images/daily-product-1.jpg',
    rating: 4.0,
    price: 238.85,
    originalPrice: 245.8,
    badge: { text: 'Save 35%', color: 'bg-[#3BB77E]' },
  },
  {
    id: 2,
    title: "Angie's Boomchickapop Sweet and wommies",
    category: 'Hodo Foods',
    image: '/assets/images/daily-product-2.jpg',
    rating: 4.0,
    price: 238.85,
    originalPrice: 245.8,
    badge: { text: 'Sale', color: 'bg-[#67BCEE]' },
  },
  {
    id: 3,
    title: 'Foster Farms Takeout Crispy Classic',
    category: 'Hodo Foods',
    image: '/assets/images/daily-product-3.jpg',
    rating: 4.0,
    price: 238.85,
    originalPrice: 245.8,
    badge: { text: 'Best sale', color: 'bg-[#F59758]' },
  },
  {
    id: 4,
    title: 'Blue Diamond Almonds Lightly Salted',
    category: 'Hodo Foods',
    image: '/assets/images/daily-product-4.jpg',
    rating: 4.0,
    price: 238.85,
    originalPrice: 245.8,
    badge: { text: 'Save 15%', color: 'bg-[#F74B81]' },
  },
]

const TABS = ['Featured', 'Popular', 'New added']

export default function DailyBestSells() {
  const [activeTab, setActiveTab] = useState('Featured')

  return (
    <section className="w-full bg-white pt-0 py-16 px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-quicksand font-semibold text-4xl text-[#253D4E]">
            Daily Best Sells
          </h2>

          {/* Tabs */}
          <div className="flex items-center gap-5">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`font-quicksand font-medium text-base transition-colors duration-200 ${
                  activeTab === tab
                    ? 'text-primary'
                    : 'text-[#253D4E] hover:text-primary'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Section Container */}
        <div className="flex gap-6 h-96">
          {/* Left Banner - Full Height */}
          <div className="w-80  rounded-[15px] overflow-hidden relative">
            <Image
              src="/assets/images/daily-banner-bg.png"
              alt="Daily banner"
              fill
              className="object-cover absolute inset-0 "
            />
            <div className="relative z-10 flex flex-col justify-between h-full p-8 mr-10">
              {/* Title */}
              <h3 className="font-quicksand font-light text-4xl text-white leading-tight">
                Bring nature into your home
              </h3>
              {/* Button */}
              <button className="w-fit bg-accent hover:bg-red-600 text-white font-quicksand font-bold text-xs px-3 py-2 rounded-sm transition-colors flex items-center gap-2 h-8">
                <span>Shop Now</span>
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 5l7 7-7 7" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          </div>

          {/* Products Grid - 4 columns */}
          <div className="flex-1 grid grid-cols-4 gap-4">
            {PRODUCTS.map((product) => (
              <BestSellCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

interface Product {
  id: number
  title: string
  category: string
  image: string
  rating: number
  price: number
  originalPrice: number
  badge: { text: string; color: string } | null
}

interface BestSellCardProps {
  product: Product
}

function BestSellCard({ product }: BestSellCardProps) {
  if (!product) return null

  return (
    <div className="bg-white border border-[#ECECEC] rounded-[15px] overflow-hidden w-full hover:shadow-md transition-shadow h-full flex flex-col">
      {/* Image Container - 176px */}
      <div className="relative bg-white h-44 flex items-center justify-center overflow-hidden flex-shrink-0">
        {product.badge ? (
          <div className={`absolute top-0 left-0 ${product.badge.color} rounded-br-[15px] px-3 py-1 z-10`}>
            <span className="font-lato font-normal text-xs text-white">
              {product.badge.text}
            </span>
          </div>
        ) : null}

        <Image
          src={product.image}
          alt={product.title}
          width={160}
          height={160}
          className="object-contain"
          quality={80}
        />
      </div>

      {/* Content - Flexible */}
      <div className="p-3 space-y-2 flex-1 flex flex-col">
        {/* Category */}
        <p className="font-lato font-normal text-xs text-[#ADADAD]">
          {product.category}
        </p>

        {/* Title */}
        <h3 className="font-quicksand font-bold text-xs text-[#253D4E] leading-4 line-clamp-2">
          {product.title}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-0.5">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-xs">★</span>
            ))}
          </div>
          <span className="font-lato font-normal text-xs text-[#B6B6B6]">
            ({product.rating.toFixed(1)})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-1">
          <span className="font-quicksand font-bold text-sm text-primary">
            ${product.price.toFixed(2)}
          </span>
          <span className="font-quicksand font-bold text-xs text-[#ADADAD] line-through">
            ${product.originalPrice.toFixed(2)}
          </span>
        </div>

        {/* Button */}
        <button className="w-full bg-accent hover:bg-red-600 text-white font-quicksand font-bold text-xs py-2 rounded-sm transition-colors flex items-center justify-center gap-1 h-9 mt-auto">
          
          <span>Add To Cart</span>
        </button>
      </div>
    </div>
  )
}
