'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const NAV_LINKS = [
  { label: 'Home', path: '/', dropdown: false },
  { label: 'Category', path: '/category', dropdown: true },
  { label: 'Products', path: '/products', dropdown: true },
  { label: 'Pages', path: '/pages', dropdown: true },
  { label: 'Blog', path: '/blog', dropdown: true },
  { label: 'Elements', path: '/elements', dropdown: true },
]

const CATEGORIES = [
  { id: 'all', label: 'All Categories' },
  { id: 'pizza', label: 'Pizza' },
  { id: 'burgers', label: 'Burgers' },
  { id: 'sushi', label: 'Sushi' },
  { id: 'desserts', label: 'Desserts' },
  { id: 'vegetarian', label: 'Vegetarian' },
]

export default function Header() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('all')
  const [showAccountDropdown, setShowAccountDropdown] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const pathname = usePathname()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ search, category })
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      {/* Top Bar */}
      <TopBar pathname={pathname} />

      {/* Search Bar */}
      <SearchBar
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        onSearch={handleSearch}
        showAccountDropdown={showAccountDropdown}
        setShowAccountDropdown={setShowAccountDropdown}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      />
    </header>
  )
}

interface TopBarProps {
  pathname: string
}

function TopBar({ pathname }: TopBarProps) {
  return (
    <div className="h-14 border-b border-gray-200 px-60 flex items-center justify-between">
      {/* Menu Toggle */}
      <button className="w-8 h-8 border border-gray-200 rounded flex items-center justify-center hover:border-primary hover:bg-gray-50 transition-all flex-shrink-0">
        <img src="/assets/icons/Toggle.png" alt="Menu" className="w-4 h-4" />
      </button>

      {/* Navigation - Centered */}
      <nav className="flex-1 flex justify-center">
        <ul className="flex items-center">
          {NAV_LINKS.map(({ label, path, dropdown }) => {
            const isActive = pathname === path
            return (
              <li key={label} className="relative group">
                <Link
                  href={path}
                  className={`px-4 py-3.5 text-sm font-medium transition-colors flex items-center gap-2.5 whitespace-nowrap ${
                    isActive
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-black hover:text-primary'
                  }`}
                >
                  {label}
                  {dropdown && (
                    <img src="/assets/icons/DropDown.png" alt="" className="w-2.5 h-1.5" />
                  )}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* Phone */}
      <div className="flex items-center gap-2 flex-shrink-0">
        <img src="/assets/icons/Phone.png" alt="" className="w-3 h-3" />
        <span className="text-sm font-normal text-black whitespace-nowrap">+123 ( 456 ) ( 7890 )</span>
      </div>
    </div>
  )
}

interface SearchBarProps {
  search: string
  setSearch: (value: string) => void
  category: string
  setCategory: (value: string) => void
  onSearch: (e: React.FormEvent) => void
  showAccountDropdown: boolean
  setShowAccountDropdown: (value: boolean) => void
  isLoggedIn: boolean
  setIsLoggedIn: (value: boolean) => void
}

function SearchBar({ 
  search, 
  setSearch, 
  category, 
  setCategory, 
  onSearch,
  showAccountDropdown,
  setShowAccountDropdown,
  isLoggedIn,
  setIsLoggedIn
}: SearchBarProps) {
  return (
    <div className="h-18 border-b border-gray-200 px-60 flex items-center gap-7">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-0 flex-shrink-0">
        <div className="w-14 h-14">
          <Image
            src="/assets/logos/foodzy-logo.png"
            alt="Foodzy"
            width={56}
            height={56}
            priority
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex flex-col">
          <h1 className="text-xl font-black text-black leading-tight">Foodzy</h1>
          <p className="text-[10px] font-semibold text-gray-600 leading-tight">A Treasure of Tastes</p>
        </div>
      </Link>

      {/* Search Form */}
      <form onSubmit={onSearch} className="flex-1 flex items-center h-11 max-w-2xl gap-0">
        <input
          type="text"
          placeholder="Search For Items..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 h-full px-4 border border-primary rounded-l text-sm bg-white text-black placeholder-gray-500 focus:outline-none"
        />
        <div className="relative h-full">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="appearance-none h-full px-3 pr-8 border border-l-0 border-r-0 border-primary text-sm bg-white text-gray-700 focus:outline-none cursor-pointer whitespace-nowrap"
            style={{ minWidth: '140px' }}
          >
            {CATEGORIES.map(({ id, label }) => (
              <option key={id} value={id}>
                {label}
              </option>
            ))}
          </select>
          <img 
            src="/assets/icons/DropDown.png" 
            alt="" 
            className="absolute right-3 top-1/2 transform -translate-y-1/2 w-2.5 h-1.5 pointer-events-none"
          />
        </div>
        <button
          type="submit"
          className="w-11 h-full bg-accent hover:bg-red-600 rounded-r text-white flex items-center justify-center transition-colors"
        >
          <img src="/assets/icons/Search.png" alt="" className="w-4 h-4" />
        </button>
      </form>

      {/* Actions */}
      <div className="flex items-center gap-0 ml-2">
        <AccountButton 
          showDropdown={showAccountDropdown}
          setShowDropdown={setShowAccountDropdown}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
        />
        <ActionButton icon="Wishlist" label="Wishlist" href="/wishlist" />
        <ActionButton icon="Cart" label="Cart" href="/checkout" />
      </div>
    </div>
  )
}

interface ActionButtonProps {
  icon: string
  label: string
  href?: string
}

function ActionButton({ icon, label, href }: ActionButtonProps) {
  const content = (
    <>
      <img src={`/assets/icons/${icon}.png`} alt="" className="w-3 h-3" />
      <span className="text-xs font-small hidden lg:inline">{label}</span>
    </>
  )

  if (href) {
    return (
      <Link 
        href={href}
        className="h-8 px-2 flex items-center gap-1.5 text-black hover:text-primary hover:bg-gray-50 rounded transition-all"
      >
        {content}
      </Link>
    )
  }

  return (
    <button className="h-8 px-2 flex items-center gap-1.5 text-black hover:text-primary hover:bg-gray-50 rounded transition-all">
      {content}
    </button>
  )
}

interface AccountButtonProps {
  showDropdown: boolean
  setShowDropdown: (value: boolean) => void
  isLoggedIn: boolean
  setIsLoggedIn: (value: boolean) => void
}

function AccountButton({ showDropdown, setShowDropdown, isLoggedIn, setIsLoggedIn }: AccountButtonProps) {
  const handleLogout = () => {
    setIsLoggedIn(false)
    setShowDropdown(false)
    // Add your logout logic here (clear tokens, etc.)
  }

  return (
    <div className="relative">
      <button 
        onClick={() => setShowDropdown(!showDropdown)}
        className="h-8 px-2 flex items-center gap-1.5 text-black hover:text-primary hover:bg-gray-50 rounded transition-all"
      >
        <img src="/assets/icons/Account.png" alt="" className="w-3 h-3" />
        <span className="text-xs font-small hidden lg:inline">Account</span>
      </button>

      {/* Dropdown Menu */}
      {showDropdown && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
          {isLoggedIn ? (
            <>
              <Link
                href="/profile"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                onClick={() => setShowDropdown(false)}
              >
                My Profile
              </Link>
              <Link
                href="/orders"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                onClick={() => setShowDropdown(false)}
              >
                My Orders
              </Link>
              <Link
                href="/wishlist"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                onClick={() => setShowDropdown(false)}
              >
                Wishlist
              </Link>
              <div className="border-t border-gray-200 my-2"></div>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                onClick={() => setShowDropdown(false)}
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                onClick={() => setShowDropdown(false)}
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      )}
    </div>
  )
}
