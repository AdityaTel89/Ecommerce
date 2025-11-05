'use client'

import { useState } from 'react'
import Image from 'next/image'
import styles from './SearchBar.module.css'

interface Category {
  id: string
  label: string
}

const CATEGORIES: Category[] = [
  { id: 'all', label: 'All Categories' },
  { id: 'pizza', label: 'Pizza' },
  { id: 'burgers', label: 'Burgers' },
  { id: 'sushi', label: 'Sushi' },
  { id: 'desserts', label: 'Desserts' },
  { id: 'vegetarian', label: 'Vegetarian' },
]

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Searching:', { searchTerm, selectedCategory })
  }

  return (
    <div className={styles.searchBarWrapper}>
      {/* Logo Section */}
      <div className={styles.logoSection}>
        <div className={styles.logoContainer}>
          <div className={styles.logoImageWrapper}>
            <Image
              src="/assets/logos/foodzy-logo.png"
              alt="Foodzy Logo"
              width={82}
              height={82}
              priority
              className={styles.logoImage}
            />
          </div>
          <div className={styles.logoText}>
            <h1 className={styles.brandName}>Foodzy</h1>
            <p className={styles.brandTagline}>A Treasure of Tastes</p>
          </div>
        </div>
      </div>

      {/* Search Container - Center */}
      <form onSubmit={handleSearch} className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search For Items..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchInput}
          aria-label="Search for items"
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className={styles.categorySelect}
          aria-label="Product category"
        >
          {CATEGORIES.map((category) => (
            <option key={category.id} value={category.id}>
              {category.label}
            </option>
          ))}
        </select>
        <button type="submit" className={styles.searchButton} aria-label="Search">
          <img src="/assets/icons/Search.png" alt="Search" />
        </button>
      </form>

      {/* Right Actions */}
      <div className={styles.rightBar}>
        {/* Account Button */}
        <button className={styles.actionButton} title="Account">
          <img src="/assets/icons/Account.png" alt="Account" />
          <span>Account</span>
        </button>

        {/* Wishlist Button */}
        <button className={styles.actionButton} title="Wishlist">
            <img src="/assets/icons/Wishlist.png" alt="Wishlist" />
          <span>Wishlist</span>
        </button>

        {/* Cart Button */}
        <button className={styles.actionButton} title="Cart">
            <img src="/assets/icons/Cart.png" alt="Cart" />
          <span>Cart</span>
        </button>
      </div>
    </div>
  )
}
