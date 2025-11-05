'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function HeroSection() {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Subscribed with email:', email)
    setEmail('')
  }

  return (
    <section className="relative w-full h-screen bg-[#f0f0f0] overflow-hidden flex items-center">
      {/* Top Left Leaf - Small */}
      <img
        src="/assets/images/TopLeft.png"
        alt=""
        className="absolute top-0 left-0 w-12 h-12 z-0"
      />

      {/* Top Right Lemon - Medium */}
      <img
        src="/assets/images/CenterTop.png"
        alt=""
        className="absolute top-0 right-1/2 w-16 h-16 z-0"
      />

      {/* Main Container */}
      <div className="relative w-full max-w-8xl mx-auto px-20 flex gap-16 items-center justify-between">
        
        {/* Left Content */}
        <div className="flex-1 z-10">
          {/* Tag */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-accent border-b-2 border-accent font-poppins font-bold text-base pb-1">
              100%
            </span>
            <h5 className="text-[#212529] font-poppins font-bold text-base">
              Organic Vegetables
            </h5>
          </div>

          {/* Title */}
          <h1 className="font-arial font-black text-5xl leading-tight text-black mb-6 max-w-md">
            The best way to stuff your wallet.
          </h1>

          {/* Description */}
          <p className="font-poppins text-base text-gray-600 leading-relaxed mb-8 max-w-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reiciendis beatae consequuntur.
          </p>

          {/* Subscription Form */}
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

      {/* Bottom Left Bowl - Small */}
      <img
        src="/assets/images/BottonLeft.png"
        alt=""
        className="absolute bottom-0 left-0 w-16 h-16 z-0"
      />

      {/* Bottom Center Berries - Medium */}
      <img
        src="/assets/images/BottonCenter.png"
        alt=""
        className="absolute bottom-30 right-1/3 w-20 h-20 z-0"
      />

      {/* Bottom Right Image */}
      <img
        src="/assets/images/BottonRight.png"
        alt="Fresh vegetables"
        width={600}
        height={500}
        
        className="absolute bottom-0 right-0 w-full max-w-lg h-auto z-0  object-contain drop-shadow-xl"
      />
    </section>
  )
}
