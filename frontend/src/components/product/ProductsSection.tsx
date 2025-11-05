'use client'

import Image from 'next/image'
import { useState } from 'react'

const PRODUCTS = [
  {
    id: 1,
    title: 'Fresh organic villa farm lemon 500gm pack',
    category: 'Snack',
    brand: 'NestFood',
    image: '/assets/images/product-1-1.png',
    rating: 4.0,
    price: 28.85,
    originalPrice: 32.8,
    badge: { text: 'Hot', color: 'bg-[#F74B81]' },
  },
  {
    id: 2,
    title: 'Best snakes with hazel nut pack 200gm',
    category: 'Hodo Foods',
    brand: 'Stouffer',
    image: '/assets/images/product-2-1.png',
    rating: 3.5,
    price: 52.85,
    originalPrice: 55.8,
    badge: { text: 'Sale', color: 'bg-[#67BCEE]' },
  },
  {
    id: 3,
    title: 'Organic fresh venila farm watermelon 5kg',
    category: 'Snack',
    brand: 'StarKist',
    image: '/assets/images/product-3-1.png',
    rating: 4.0,
    price: 48.85,
    originalPrice: 52.8,
    badge: { text: 'New', color: 'bg-[#3BB77E]' },
  },
  {
    id: 4,
    title: 'Fresh organic apple kig simla marming',
    category: 'Vegetables',
    brand: 'NestFood',
    image: '/assets/images/product-4-1.png',
    rating: 4.0,
    price: 17.85,
    originalPrice: 19.8,
    badge: null,
  },
  {
    id: 5,
    title: 'Blue Diamond Almonds Lightly Salted Vegetables',
    category: 'Pet Foods',
    brand: 'NestFood',
    image: '/assets/images/product-5-1.png',
    rating: 4.0,
    price: 23.85,
    originalPrice: 25.8,
    badge: { text: '-14%', color: 'bg-[#F59758]' },
  },
  {
    id: 6,
    title: 'Chobani Complete Vanilla Greek Yogurt',
    category: 'Hodo Foods',
    brand: 'NestFood',
    image: '/assets/images/product-6-1.png',
    rating: 4.0,
    price: 54.85,
    originalPrice: 55.8,
    badge: null,
  },
  {
    id: 7,
    title: 'Canada Dry Ginger Ale – 2 L Bottle - 200ml',
    category: 'Meats',
    brand: 'NestFood',
    image: '/assets/images/product-7-1.png',
    rating: 4.0,
    price: 32.85,
    originalPrice: 33.8,
    badge: null,
  },
  {
    id: 8,
    title: 'Encore Seafoods Stuffed Alaskan Salmon',
    category: 'Snack',
    brand: 'NestFood',
    image: '/assets/images/product-8-1.png',
    rating: 4.0,
    price: 35.85,
    originalPrice: 37.8,
    badge: { text: 'Sale', color: 'bg-[#67BCEE]' },
  },
  {
    id: 9,
    title: "Gorton's Beer Battered Fish Fillets with soft paper",
    category: 'Coffes',
    brand: 'Old El Paso',
    image: '/assets/images/product-9-1.png',
    rating: 4.0,
    price: 23.85,
    originalPrice: 25.8,
    badge: { text: 'Hot', color: 'bg-[#F74B81]' },
  },
  {
    id: 10,
    title: 'Haagen-Dazs Caramel Cone Ice Cream Ketchup',
    category: 'Cream',
    brand: 'Tyson',
    image: '/assets/images/product-10-1.png',
    rating: 2.0,
    price: 22.85,
    originalPrice: 24.8,
    badge: null,
  },
]

const CATEGORIES = ['All', 'Milks & Dairies', 'Coffes & Teas', 'Pet Foods', 'Meats', 'Vegetables', 'Fruits']

export default function ProductsSection() {
  const [activeTab, setActiveTab] = useState('All')

  return (
    <section className="w-full bg-white pt-0 py-16 px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="font-quicksand font-semibold text-4xl text-[#253D4E]">
            Popular Products
          </h2>

          <div className="flex items-center gap-4">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`font-quicksand font-medium text-base transition-colors duration-200 ${
                  activeTab === category
                    ? 'text-primary'
                    : 'text-[#253D4E] hover:text-primary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-5 gap-6">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface Product {
  id: number
  title: string
  category: string
  brand: string
  image: string
  rating: number
  price: number
  originalPrice: number
  badge: { text: string; color: string } | null
}

interface ProductCardProps {
  product: Product
}

function ProductCard({ product }: ProductCardProps) {
  if (!product) return null

  return (
    <div className="bg-white border border-[#ECECEC] rounded-[15px] overflow-hidden w-full hover:shadow-md transition-shadow duration-300">
      <div className="relative bg-white h-[271px] flex items-center justify-center overflow-hidden">
        {product.badge ? (
          <div className={`absolute top-0 left-0 ${product.badge.color} rounded-br-[20px] px-5 py-2 z-10`}>
            <span className="font-lato font-normal text-xs text-white leading-3">
              {product.badge.text}
            </span>
          </div>
        ) : null}

        <Image
          src={product.image}
          alt={product.title}
          width={196}
          height={196}
          className="object-contain"
          priority={product.id === 1}
          quality={80}
        />
      </div>

      <div className="p-5 space-y-3 bg-white">
        <p className="font-lato font-normal text-xs text-[#ADADAD] leading-4">
          {product.category}
        </p>

        <h3 className="font-poppins font-medium text-sm text-[#2B2B2D] leading-6 line-clamp-2 h-12">
          {product.title}
        </h3>

        <div className="flex items-center gap-1">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-xs">
                ★
              </span>
            ))}
          </div>
          <span className="font-lato font-normal text-xs text-[#B6B6B6] leading-4">
            ({product.rating.toFixed(1)})
          </span>
        </div>

        <p className="font-lato font-normal text-xs text-primary leading-5">
          By {product.brand}
        </p>

        <div className="flex items-center justify-between pt-1">
          <div className="flex items-center gap-2">
            <span className="font-quicksand font-bold text-lg text-primary leading-6">
              ${product.price.toFixed(2)}
            </span>
            <span className="font-quicksand font-bold text-sm text-[#ADADAD] line-through leading-6">
              ${product.originalPrice.toFixed(2)}
            </span>
          </div>

          <button className="bg-accent hover:bg-red-600 text-white font-lato font-bold text-xs py-2 px-3 rounded transition-colors duration-200 flex items-center justify-center gap-1 h-8 flex-shrink-0">
            <Image
              src="/assets/icons/cart2.png"
              alt="cart"
              width={14}
              height={14}
              className="object-contain"
            />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  )
}
