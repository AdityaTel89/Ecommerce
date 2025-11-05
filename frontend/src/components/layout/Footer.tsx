'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full bg-[#F7F7F8] border-t border-[#E9E9E9]">
      <div className="max-w-7xl mx-auto px-20 py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-4 gap-10 mb-12">
          {/* Column 1 - About Foodzy */}
          <div className="space-y-4">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-6">
              <Image
                src="/assets/logos/foodzy-logo.png"
                alt="Foodzy"
                width={40}
                height={40}
              />
              <h3 className="font-poppins font-bold text-lg text-black">
                Foodzy
              </h3>
            </div>

            {/* Description */}
            <p className="font-poppins font-normal text-sm text-[#7A7A7A] leading-6">
              FoodTrove is the biggest market of grocery products. Get your daily
              needs from our store.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mt-6">
              {/* Address */}
              <div className="flex gap-3 items-start">
                <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center mt-0.5">
                  <Image
                    src="/Assets/icons/Location.png"
                    alt="Location"
                    width={16}
                    height={16}
                    className="object-contain"
                  />
                </div>
                <p className="font-poppins font-normal text-sm text-[#777777]">
                  51 Green St.Huntington ohaio beach ontario, NY 11746 KY 4783,
                  USA.
                </p>
              </div>

              {/* Email */}
              <div className="flex gap-3 items-center">
                <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center">
                  <Image
                    src="/Assets/icons/Mail.png"
                    alt="Email"
                    width={16}
                    height={16}
                    className="object-contain"
                  />
                </div>
                <a
                  href="mailto:example@email.com"
                  className="font-poppins font-normal text-sm text-[#777777] hover:text-[#F53E32]"
                >
                  example@email.com
                </a>
              </div>

              {/* Phone */}
              <div className="flex gap-3 items-center">
                <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center">
                  <Image
                    src="/Assets/icons/Phone1.png"
                    alt="Phone"
                    width={16}
                    height={16}
                    className="object-contain"
                  />
                </div>
                <a
                  href="tel:+911234567890"
                  className="font-poppins font-normal text-sm text-[#777777] hover:text-[#F53E32]"
                >
                  +91 123 4567890
                </a>
              </div>
            </div>
          </div>

          {/* Column 2 - Company */}
          <div className="space-y-4">
            <h4 className="font-arial font-bold text-lg text-black">
              Company
            </h4>
            <nav className="space-y-3">
              {['About Us', 'Delivery Information', 'Privacy Policy', 'Terms & Conditions', 'Contact Us', 'Support Center'].map(
                (link) => (
                  <Link
                    key={link}
                    href="#"
                    className="font-poppins font-normal text-sm text-[#777777] hover:text-[#F53E32] block"
                  >
                    {link}
                  </Link>
                )
              )}
            </nav>
          </div>

          {/* Column 3 - Category */}
          <div className="space-y-4">
            <h4 className="font-arial font-bold text-lg text-black">
              Category
            </h4>
            <nav className="space-y-3">
              {['Dairy & Bakery', 'Fruits & Vegetable', 'Snack & Spice', 'Juice & Drinks', 'Chicken & Meat', 'Fast Food'].map(
                (link) => (
                  <Link
                    key={link}
                    href="#"
                    className="font-poppins font-normal text-sm text-[#777777] hover:text-[#F53E32] block"
                  >
                    {link}
                  </Link>
                )
              )}
            </nav>
          </div>

          {/* Column 4 - Newsletter */}
          <div className="space-y-4">
            <h4 className="font-arial font-bold text-lg text-black">
              Subscribe Our Newsletter
            </h4>
            <p className="font-poppins font-normal text-sm text-[#7A7A7A]">
              Subscribe to our newsletter and get up to date with latest offers
            </p>

            {/* Subscription Form */}
            <form className="flex">
              <input
                type="email"
                placeholder="Search here..."
                className="flex-1 px-4 py-3 border border-[#E9E9E9] rounded-l-md bg-white font-poppins text-sm text-[#7A7A7A] focus:outline-none"
              />
              <button
                type="submit"
                className="bg-white border border-[#E9E9E9] rounded-r-md px-2 py-2 transition-colors flex items-center justify-center hover:bg-gray-100"
              >
                <Image
                  src="/Assets/icons/sender.png"
                  alt="sender"
                  width={14}
                  height={14}
                  className="object-contain"
                />
              </button>
            </form>

            {/* Social Icons */}
            <div className="flex gap-3 pt-4">
              {[
                { src: '/Assets/icons/Facebook.png', label: 'Facebook', href: '#' },
                { src: '/Assets/icons/X.png', label: 'Twitter', href: '#' },
                { src: '/Assets/icons/Earth.png', label: 'Google', href: '#' },
                { src: '/Assets/icons/Instagram.png', label: 'Instagram', href: '#' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-9 h-9 bg-white border border-[#E1DFDF] rounded-md flex items-center justify-center hover:bg-[#F53E32] hover:border-[#F53E32] transition-colors"
                  aria-label={social.label}
                >
                  <Image
                    src={social.src}
                    alt={social.label}
                    width={13}
                    height={13}
                    className="object-contain"
                  />
                </a>
              ))}
            </div>

            {/* Gallery */}
            <div className="grid grid-cols-5 gap-2 pt-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <Image
                  key={i}
                  src={`/assets/images/gallery-${i}.jpg`}
                  alt={`Gallery ${i}`}
                  width={60}
                  height={60}
                  className="rounded-md object-cover"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-[#E9E9E9] pt-6 flex items-center justify-center">
          <p className="font-poppins font-normal text-sm text-black">
            © 2025{' '}
            <span className="text-[#F53E32] font-semibold">Foodzy</span>
            {'. All rights reserved.'}
          </p>
        </div>
      </div>
    </footer>
  )
}
