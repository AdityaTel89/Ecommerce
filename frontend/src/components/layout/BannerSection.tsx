'use client'

import Image from 'next/image'

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

export default function BannerSection() {
  return (
    <section className="w-full bg-white  py-16 px-20">
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
      {/* Background Image */}
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 1536px) 100vw"
        className="object-cover"
        priority={id === 1}
      />

      {/* Text Content */}
      <div className="absolute inset-0 z-20 flex flex-col justify-between p-8">
        {/* Title Section */}
        <div className='mt-10 mr-40'>
          <h4 className="font-quicksand font-bold text-lg leading-6 text-[#253D4E] max-w-xs">
            {title}
          </h4>
        </div>

        {/* Shop Now Button - Aligned to left */}
        <div>
          <ShopButton />
        </div>
      </div>
    </div>
  )
}

function ShopButton() {
  return (
    <button className="w-fit flex items-center gap-1.5 bg-accent hover:bg-red-600 text-white px-3 py-1.5 rounded text-xs font-quicksand font-bold leading-4 transition-colors">
      <span>Shop Now</span>
      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
      </svg>
    </button>
  )
}
