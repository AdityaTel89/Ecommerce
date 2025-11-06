'use client'

import { useState } from 'react'
import Image from 'next/image'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { ProtectedRoute } from '@/components/ProtectedRoute'
import { useAuth } from './context/AuthContext'

// ==================== HERO SECTION ====================
function HeroSection() {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Subscribed with email:', email)
    setEmail('')
  }

  return (
    <section className="relative w-full h-screen bg-[#f0f0f0] overflow-hidden flex items-center">
      <img
        src="/assets/images/TopLeft.png"
        alt=""
        className="absolute top-0 left-0 w-12 h-12 z-0"
      />

      <img
        src="/assets/images/CenterTop.png"
        alt=""
        className="absolute top-0 right-1/2 w-16 h-16 z-0"
      />

      <div className="relative w-full max-w-8xl mx-auto px-20 flex gap-16 items-center justify-between">
        <div className="flex-1 z-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-accent border-b-2 border-accent font-poppins font-bold text-base pb-1">
              100%
            </span>
            <h5 className="text-[#212529] font-poppins font-bold text-base">
              Organic Vegetables
            </h5>
          </div>

          <h1 className="font-arial font-black text-5xl leading-tight text-black mb-6 max-w-md">
            The best way to stuff your wallet.
          </h1>

          <p className="font-poppins text-base text-gray-600 leading-relaxed mb-8 max-w-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reiciendis beatae consequuntur.
          </p>

          <form
            onSubmit={handleSubscribe}
            className="flex items-center bg-white rounded-full shadow-sm w-fit overflow-hidden"
          >
            <div className="flex items-center gap-3 px-6">
              <img
                src="/assets/icons/Send.png"
                alt=""
                className="w-5 h-5 opacity-70"
              />
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent font-poppins text-base text-gray-600 placeholder-gray-600 min-w-48 focus:outline-none"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-primary hover:bg-[#2fa373] text-white font-poppins font-semibold text-base px-8 py-3.5 rounded-full transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <img
        src="/assets/images/BottonLeft.png"
        alt=""
        className="absolute bottom-0 left-0 w-16 h-16 z-0"
      />

      <img
        src="/assets/images/BottonCenter.png"
        alt=""
        className="absolute bottom-30 right-1/3 w-20 h-20 z-0"
      />

      <img
        src="/assets/images/BottonRight.png"
        alt="Fresh vegetables"
        width={600}
        height={500}
        className="absolute bottom-0 right-0 w-full max-w-lg h-auto z-0 object-contain drop-shadow-xl"
      />
    </section>
  )
}

// ==================== BANNER SECTION ====================
const BANNERS = [
  {
    id: 1,
    title: 'Everyday Fresh & Clean with Our Products',
    image: '/assets/images/banner-1.png',
    bgColor: 'bg-[#F3E8D9]',
  },
  {
    id: 2,
    title: 'Make your Breakfast Healthy and Easy',
    image: '/assets/images/banner-2.png',
    bgColor: 'bg-[#F3D5E0]',
  },
  {
    id: 3,
    title: 'The best Organic Products Online',
    image: '/assets/images/banner-3.png',
    bgColor: 'bg-[#E8EEF7]',
  },
]

function BannerSection() {
  return (
    <section className="w-full bg-white py-16 px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-3 gap-6">
          {BANNERS.map((banner) => (
            <BannerCard key={banner.id} {...banner} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface BannerCardProps {
  id: number
  title: string
  image: string
  bgColor: string
}

function BannerCard({ id, title, image, bgColor }: BannerCardProps) {
  return (
    <div className={`relative rounded-xl overflow-hidden w-full ${bgColor}`} style={{ aspectRatio: '16/9' }}>
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 1536px) 100vw"
        className="object-cover"
        priority={id === 1}
      />

      <div className="absolute inset-0 z-20 flex flex-col justify-between p-8">
        <div className='mt-10 mr-40'>
          <h4 className="font-quicksand font-bold text-lg leading-6 text-[#253D4E] max-w-xs">
            {title}
          </h4>
        </div>

        <div>
          <button className="w-fit flex items-center gap-1.5 bg-accent hover:bg-red-600 text-white px-3 py-1.5 rounded text-xs font-quicksand font-bold leading-4 transition-colors">
            <span>Shop Now</span>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

// ==================== PRODUCTS SECTION ====================
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

function ProductsSection() {
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

// ==================== DAILY BEST SELLS ====================
const DAILY_PRODUCTS = [
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

function DailyBestSells() {
  const [activeTab, setActiveTab] = useState('Featured')

  return (
    <section className="w-full bg-white pt-0 py-16 px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-quicksand font-semibold text-4xl text-[#253D4E]">
            Daily Best Sells
          </h2>

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

        <div className="flex gap-6 h-96">
          <div className="w-80 rounded-[15px] overflow-hidden relative">
            <Image
              src="/assets/images/daily-banner-bg.png"
              alt="Daily banner"
              fill
              className="object-cover absolute inset-0"
            />
            <div className="relative z-10 flex flex-col justify-between h-full p-8 mr-10">
              <h3 className="font-quicksand font-light text-4xl text-white leading-tight">
                Bring nature into your home
              </h3>
              <button className="w-fit bg-accent hover:bg-red-600 text-white font-quicksand font-bold text-xs px-3 py-2 rounded-sm transition-colors flex items-center gap-2 h-8">
                <span>Shop Now</span>
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 5l7 7-7 7" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex-1 grid grid-cols-4 gap-4">
            {DAILY_PRODUCTS.map((product) => (
              <BestSellCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

interface BestSellCardProps {
  product: {
    id: number
    title: string
    category: string
    image: string
    rating: number
    price: number
    originalPrice: number
    badge: { text: string; color: string } | null
  }
}

function BestSellCard({ product }: BestSellCardProps) {
  if (!product) return null

  return (
    <div className="bg-white border border-[#ECECEC] rounded-[15px] overflow-hidden w-full hover:shadow-md transition-shadow h-full flex flex-col">
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

      <div className="p-3 space-y-2 flex-1 flex flex-col">
        <p className="font-lato font-normal text-xs text-[#ADADAD]">
          {product.category}
        </p>

        <h3 className="font-quicksand font-bold text-xs text-[#253D4E] leading-4 line-clamp-2">
          {product.title}
        </h3>

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

        <div className="flex items-center gap-1">
          <span className="font-quicksand font-bold text-sm text-primary">
            ${product.price.toFixed(2)}
          </span>
          <span className="font-quicksand font-bold text-xs text-[#ADADAD] line-through">
            ${product.originalPrice.toFixed(2)}
          </span>
        </div>

        <button className="w-full bg-accent hover:bg-red-600 text-white font-quicksand font-bold text-xs py-2 rounded-sm transition-colors flex items-center justify-center gap-1 h-9 mt-auto">
          <span>Add To Cart</span>
        </button>
      </div>
    </div>
  )
}

// ==================== DEALS OF THE DAY ====================
const DEALS = [
  {
    id: 1,
    title: 'Seeds of Change Organic Quinoa, Brown, & Red Rice',
    brand: 'NestFood',
    image: '/assets/images/deals-1.png',
    rating: 4.0,
    price: 32.85,
    originalPrice: 33.8,
  },
  {
    id: 2,
    title: 'Perdue Simply Smart Organics Gluten free',
    brand: 'Old El Paso',
    image: '/assets/images/deals-2.png',
    rating: 4.0,
    price: 24.85,
    originalPrice: 26.8,
  },
  {
    id: 3,
    title: 'Signature Wood-Fired Mushroom and Caramelized',
    brand: 'Progresso',
    image: '/assets/images/deals-3.png',
    rating: 3.0,
    price: 12.85,
    originalPrice: 13.8,
  },
  {
    id: 4,
    title: 'Simply Lemonade with Raspberry Juice',
    brand: 'Yoplait',
    image: '/assets/images/deals-4.png',
    rating: 3.0,
    price: 15.85,
    originalPrice: 16.8,
  },
]

function DealsOfTheDay() {
  return (
    <section className="w-full bg-white pt-0 py-16 px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="font-quicksand font-semibold text-4xl text-[#253D4E]">
            Deals Of The Day
          </h2>
          <a href="#" className="font-lato font-normal text-base text-[#7E7E7E] hover:text-primary flex items-center gap-1">
            All Deals
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-4 gap-6">
          {DEALS.map((deal) => (
            <DealCard key={deal.id} deal={deal} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface DealCardProps {
  deal: {
    id: number
    title: string
    brand: string
    image: string
    rating: number
    price: number
    originalPrice: number
  }
}

function DealCard({ deal }: DealCardProps) {
  if (!deal) return null

  return (
    <div className="bg-white rounded-[15px] overflow-hidden w-full">
      <div className="relative w-full h-80 bg-white rounded-[15px] overflow-hidden">
        <Image
          src={deal.image}
          alt={deal.title}
          fill
          className="object-cover"
          quality={80}
        />
      </div>

      <div className="relative -mt-24 mx-6 bg-white rounded-[10px] shadow-lg p-7 space-y-3 z-10" style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)' }}>
        <h3 className="font-quicksand font-semibold text-base text-[#253D4E] leading-5 line-clamp-2 h-10">
          {deal.title}
        </h3>

        <div className="flex items-center gap-0.5">
          <div className="flex gap-0.1 w-12">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-xs">★</span>
            ))}
          </div>
          <span className="font-lato font-normal text-sm text-[#B6B6B6]">
            ({deal.rating.toFixed(1)})
          </span>
        </div>

        <p className="font-lato font-normal text-sm text-[#B6B6B6]">
          By {deal.brand}
        </p>

        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-2">
            <span className="font-quicksand font-semibold text-lg text-primary">
              ${deal.price.toFixed(2)}
            </span>
            <span className="font-quicksand font-semibold text-sm text-[#ADADAD] line-through">
              ${deal.originalPrice.toFixed(2)}
            </span>
          </div>

          <button className="bg-accent hover:bg-red-600 text-white font-lato font-normal text-sm px-2 py-2 rounded-sm transition-colors flex items-center justify-center gap-2 h-9 flex-shrink-0">
            <img src="/assets/icons/cart2.png" alt="cart" />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  )
}

// ==================== FOOTER BANNER ====================
function FooterBanner() {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Subscribed with email:', email)
    setEmail('')
  }

  return (
    <section className="w-full bg-white pt-0 pb-10 py-16 px-20">
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-cover bg-center rounded-[20px] overflow-hidden h-96">
          <Image
            src="/assets/images/footer-bg.png"
            alt="Footer background"
            fill
            className="object-cover absolute inset-0"
          />

          <div className="relative z-20 h-full flex items-center justify-between px-20">
            <div className="flex-1 max-w-2xl">
              <h2 className="font-quicksand font-semibold text-4xl text-[#253D4E] leading-tight mb-6">
                Stay home & get your daily needs from our shop
              </h2>

              <p className="font-lato font-normal text-base text-[#7E7E7E] mb-6">
                Start You'r Daily Shopping with Nest Mart
              </p>

              <form onSubmit={handleSubscribe} className="flex h-14 rounded-full overflow-hidden shadow-lg w-fit">
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-12 py-3 bg-white text-sm font-lato text-gray-800 placeholder-[#838383] focus:outline-none"
                  required
                />

                <button
                  type="submit"
                  className="bg-accent hover:bg-red-600 text-white font-quicksand font-bold text-sm px-6 py-3 rounded-r-full transition-colors flex items-center justify-center whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>

            <div className="flex-1 relative h-96 ml-10">
              <Image
                src="/assets/images/footer-vegetables.png"
                alt="Fresh vegetables"
                fill
                className="object-contain object-bottom"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ==================== FEATURES SECTION ====================
const FEATURES = [
  {
    id: 1,
    title: 'Best prices & offers',
    description: 'Orders $50 or more',
    icon: '/assets/icons/icon-1.svg.png',
  },
  {
    id: 2,
    title: 'Free delivery',
    description: '24/7 amazing services',
    icon: '/assets/icons/icon-2.svg.png',
  },
  {
    id: 3,
    title: 'Great daily deal',
    description: 'When you sign up',
    icon: '/assets/icons/icon-3.svg.png',
  },
  {
    id: 4,
    title: 'Wide assortment',
    description: 'Mega Discounts',
    icon: '/assets/icons/icon-4.svg.png',
  },
  {
    id: 5,
    title: 'Easy returns',
    description: 'Within 30 days',
    icon: '/assets/icons/icon-5.svg.png',
  },
]

function FeaturesSection() {
  return (
    <section className="w-full bg-white py-4 px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-5 gap-0">
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface FeatureCardProps {
  feature: {
    id: number
    title: string
    description: string
    icon: string
  }
}

function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <div className="bg-[#F4F6FA] border border-[#ECECEC] p-3 flex items-center gap-3 hover:shadow-sm transition-shadow h-24">
      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
        <Image
          src={feature.icon}
          alt={feature.title}
          width={48}
          height={48}
          className="object-contain"
        />
      </div>

      <div className="flex flex-col gap-0.5">
        <h3 className="font-quicksand font-semibold text-sm text-[#242424]">
          {feature.title}
        </h3>

        <p className="font-lato font-normal text-xs text-[#ADADAD]">
          {feature.description}
        </p>
      </div>
    </div>
  )
}

// ==================== MAIN HOME PAGE ====================
// ✅ WRAPPED WITH PROTECTED ROUTE
export default function Home() {
  return (
    <ProtectedRoute>
      <Header />
      <main>
        <HeroSection />
        <BannerSection />
        <ProductsSection />
        <DailyBestSells />
        <DealsOfTheDay />
        <FooterBanner />
        <FeaturesSection />
      </main>
      <Footer />
    </ProtectedRoute>
  )
}
