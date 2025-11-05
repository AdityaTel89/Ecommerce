'use client'

import Image from 'next/image'

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

export default function FeaturesSection() {
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

interface Feature {
  id: number
  title: string
  description: string
  icon: string
}

interface FeatureCardProps {
  feature: Feature
}

function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <div className="bg-[#F4F6FA] border border-[#ECECEC] p-3 flex items-center gap-3 hover:shadow-sm transition-shadow h-24">
      {/* Icon Container - 48px */}
      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
        <Image
          src={feature.icon}
          alt={feature.title}
          width={48}
          height={48}
          className="object-contain"
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col gap-0.5">
        {/* Title - 14px, Quicksand 600 */}
        <h3 className="font-quicksand font-semibold text-sm text-[#242424]">
          {feature.title}
        </h3>

        {/* Description - 12px, Lato 400 */}
        <p className="font-lato font-normal text-xs text-[#ADADAD]">
          {feature.description}
        </p>
      </div>
    </div>
  )
}
