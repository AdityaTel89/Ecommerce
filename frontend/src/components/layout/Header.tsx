'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const NAV_LINKS = [
  { label: 'Home', dropdown: false },
  { label: 'Category', dropdown: true },
  { label: 'Products', dropdown: true },
  { label: 'Pages', dropdown: true },
  { label: 'Blog', dropdown: true },
  { label: 'Elements', dropdown: true },
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

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ search, category })
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      {/* Top Bar */}
      <TopBar />

      {/* Search Bar */}
      <SearchBar
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        onSearch={handleSearch}
      />
    </header>
  )
}

function TopBar() {
  return (
    <div className="h-14 border-b border-gray-200 px-60 flex items-center justify-between">
      {/* Menu Toggle */}
      <button className="w-8 h-8 border border-gray-200 rounded flex items-center justify-center hover:border-primary hover:bg-gray-50 transition-all flex-shrink-0">
        <img src="/assets/icons/Toggle.png" alt="Menu" className="w-4 h-4" />
      </button>

      {/* Navigation - Centered */}
      <nav className="flex-1 flex justify-center">
        <ul className="flex items-center">
          {NAV_LINKS.map(({ label, dropdown }) => (
            <li key={label} className="relative group">
              <Link
                href={`/${label.toLowerCase()}`}
                className="px-4 py-3.5 text-sm font-medium text-black hover:text-primary transition-colors flex items-center gap-2.5 whitespace-nowrap"
              >
                {label}
                {dropdown && (
                  <img src="/assets/icons/DropDown.png" alt="" className="w-2.5 h-1.5" />
                )}
              </Link>
            </li>
          ))}
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
}

function SearchBar({ search, setSearch, category, setCategory, onSearch }: SearchBarProps) {
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
          className="flex-1 h-full px-4 border  border-primary rounded-l text-sm bg-white text-black placeholder-gray-500 focus:outline-none"
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
        <ActionButton icon="Account" label="Account" />
        <ActionButton icon="Wishlist" label="Wishlist" />
        <ActionButton icon="Cart" label="Cart" />
      </div>
    </div>
  )
}

interface ActionButtonProps {
  icon: string
  label: string
}

function ActionButton({ icon, label }: ActionButtonProps) {
  return (
    <button className="h-8 px-2 flex items-center gap-1.5 text-black hover:text-primary hover:bg-gray-50 rounded transition-all">
      <img src={`/assets/icons/${icon}.png`} alt="" className="w-3 h-3" />
      <span className="text-xs font-small hidden lg:inline">{label}</span>
    </button>
  )
}



