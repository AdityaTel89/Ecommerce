'use client'

import Image from 'next/image'

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

export default function DealsOfTheDay() {
  return (
    <section className="w-full bg-white pt-0 py-16 px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
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

        {/* Cards Grid - 4 columns */}
        <div className="grid grid-cols-4 gap-6">
          {DEALS.map((deal) => (
            <DealCard key={deal.id} deal={deal} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface Deal {
  id: number
  title: string
  brand: string
  image: string
  rating: number
  price: number
  originalPrice: number
}

interface DealCardProps {
  deal: Deal
}

function DealCard({ deal }: DealCardProps) {
  if (!deal) return null

  return (
    <div className="bg-white rounded-[15px] overflow-hidden w-full ">
      {/* Image Container - 335.17px height */}
      <div className="relative w-full h-80 bg-white rounded-[15px] overflow-hidden">
        <Image
          src={deal.image}
          alt={deal.title}
          fill
          className="object-cover"
          quality={80}
        />
      </div>

      {/* Content Card - Overlapping with box-shadow */}
<div className="relative -mt-24 mx-6 bg-white rounded-[10px] shadow-lg p-7 space-y-3 z-10" style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)' }}>
  {/* Title - 16px, Quicksand bold, 39.19px height */}
  <h3 className="font-quicksand font-semibold text-base text-[#253D4E] leading-5 line-clamp-2 h-10">
    {deal.title}
  </h3>

  {/* Rating Stars - 60px width, 12px height */}
  <div className="flex items-center gap-0.5">
    <div className="flex gap-0.1 w-12">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="text-yellow-400 text-xs">★</span>
      ))}
    </div>
    {/* (4.0) - 14px Lato */}
    <span className="font-lato font-normal text-sm text-[#B6B6B6]">
      ({deal.rating.toFixed(1)})
    </span>
  </div>

  {/* By Brand - 14px Lato */}
  <p className="font-lato font-normal text-sm text-[#B6B6B6]">
    By {deal.brand}
  </p>

  {/* Price & Button Section */}
  <div className="flex items-center justify-between pt-2">
    {/* Price Section */}
    <div className="flex items-center gap-2">
      {/* Price - 18px, Quicksand bold, green */}
      <span className="font-quicksand font-semibold text-lg text-primary">
        ${deal.price.toFixed(2)}
      </span>
      {/* Original Price - 14px, Quicksand bold, strikethrough */}
      <span className="font-quicksand font-semibold text-sm text-[#ADADAD] line-through">
        ${deal.originalPrice.toFixed(2)}
      </span>
    </div>

    {/* Add Button - 84.91px width, 36px height, 4px radius */}
    <button className="bg-accent hover:bg-red-600 text-white font-lato font-normal text-sm px-2 py-2 rounded-sm transition-colors flex items-center justify-center gap-2 h-9 flex-shrink-0">
      <img src="/assets/icons/cart2.png" alt="cart" />
      <span>Add</span>
    </button>
  </div>
</div>

    </div>
  )
}

