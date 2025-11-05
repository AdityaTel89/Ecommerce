'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Subscribed with email:', email)
    setEmail('')
  }

  return (
    <section className="w-full bg-white pt-0 pb-10 py-16 px-20">
      <div className="max-w-7xl mx-auto">
        {/* Footer Container - 417px height, 20px border-radius */}
        <div className="relative bg-cover bg-center rounded-[20px] overflow-hidden h-96">
          {/* Background Image */}
          <Image
            src="/assets/images/footer-bg.png"
            alt="Footer background"
            fill
            className="object-cover absolute inset-0"
          />

          {/* Content Container */}
          <div className="relative z-20 h-full flex items-center justify-between px-20">
            {/* Left Content */}
            <div className="flex-1 max-w-2xl">
              {/* Title - 32px, Quicksand bold (down from 40px) */}
              <h2 className="font-quicksand font-semibold text-4xl text-[#253D4E] leading-tight mb-6">
                Stay home & get your daily needs from our shop
              </h2>
              

              {/* Subtitle - 16px, Lato (down from 18px) */}
              <p className="font-lato font-normal text-base text-[#7E7E7E] mb-6">
                Start You'r Daily Shopping with Nest Mart
              </p>

              {/* Email Form - 56px height, 50px border-radius */}
              <form onSubmit={handleSubscribe} className="flex h-14 rounded-full overflow-hidden shadow-lg w-fit">
                {/* Input Section - Flex grow */}
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-12 py-3 bg-white text-sm font-lato text-gray-800 placeholder-[#838383] focus:outline-none"
                  required
                />

                {/* Subscribe Button - 140px width, red background */}
                <button
                  type="submit"
                  className="bg-accent hover:bg-red-600 text-white font-quicksand font-bold text-sm px-6 py-3 rounded-r-full transition-colors flex items-center justify-center whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>

            {/* Right Image - 634.39px width, 345.73px height */}
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
