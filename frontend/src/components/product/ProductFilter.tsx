// src/components/product/ProductFilter.tsx
'use client'

import React, { useState } from 'react'

interface Category {
  label: string
  count: number
}

interface FilterState {
  category: string
  priceRange: [number, number]
  tags: string[]
}

interface ProductFilterProps {
  onFilterChange?: (filters: FilterState) => void
}

const CATEGORIES: Category[] = [
  { label: 'Juice & Drinks', count: 20 },
  { label: 'Dairy & Milk', count: 54 },
  { label: 'Snack & Spice', count: 64 },
]

const TAGS = ['Vegetables', 'Juice', 'Food', 'Dry Fruits']

export const ProductFilter: React.FC<ProductFilterProps> = ({ onFilterChange }) => {
  const [filters, setFilters] = useState<FilterState>({
    category: '',
    priceRange: [20, 250],
    tags: [],
  })

  const handleCategoryChange = (label: string) => {
    const newFilter = {
      ...filters,
      category: filters.category === label ? '' : label,
    }
    setFilters(newFilter)
  }

  const handlePriceChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: 'min' | 'max'
  ) => {
    const value = parseInt(e.target.value, 10)
    const newRange: [number, number] = [...filters.priceRange]
    if (type === 'min') {
      newRange[0] = Math.min(value, newRange[1])
    } else {
      newRange[1] = Math.max(value, newRange[0])
    }
    const newFilter = { ...filters, priceRange: newRange }
    setFilters(newFilter)
  }

  const handleTagToggle = (tag: string) => {
    const newFilter = {
      ...filters,
      tags: filters.tags.includes(tag)
        ? filters.tags.filter((t) => t !== tag)
        : [...filters.tags, tag],
    }
    setFilters(newFilter)
  }

  const handleFilterClick = () => {
    if (onFilterChange) {
      onFilterChange(filters)
    }
  }

  const minPrice = 0
  const maxPrice = 1000
  const minPercent = ((filters.priceRange[0] - minPrice) / (maxPrice - minPrice)) * 100
  const maxPercent = ((filters.priceRange[1] - minPrice) / (maxPrice - minPrice)) * 100

  return (
    <aside className="w-full bg-[#F7F7F8] border border-[#E9E9E9] rounded-md p-6 space-y-8 h-fit sticky top-4">
      {/* Product Category Section */}
      <div className="space-y-4 pb-6 border-b border-[#E9E9E9]">
        <h4 className="font-poppins font-semibold text-sm text-[#2B2B2D] tracking-[0.48px] capitalize">
          Product Category
        </h4>

        <div className="space-y-3">
          {CATEGORIES.map((category) => (
            <label
              key={category.label}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="checkbox"
                checked={filters.category === category.label}
                onChange={() => handleCategoryChange(category.label)}
                className="w-4 h-4 cursor-pointer accent-[#F53E32] rounded"
              />
              <span className="font-poppins font-normal text-xs text-[#7A7A7A] tracking-[0.48px] capitalize flex-1 group-hover:text-[#F53E32] transition">
                {category.label}
              </span>
              <span className="font-poppins font-normal text-xs text-[#7A7A7A] tracking-[0.48px]">
                [{category.count}]
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Filter By Price Section */}
      <div className="space-y-4 pb-6 border-b border-[#E9E9E9]">
        <h4 className="font-poppins font-semibold text-sm text-[#2B2B2D] tracking-[0.48px] capitalize">
          Filter By Price
        </h4>

        <div className="space-y-4">
          {/* Single Range Slider Container */}
          <div className="relative pt-4 pb-8 px-0">
            {/* Background Track */}
            <div className="absolute left-0 right-0 top-1/2 h-1 bg-[#CECECE] rounded-full transform -translate-y-1/2"></div>

            {/* Progress Track */}
            <div
              className="absolute top-1/2 h-1 bg-[#F53E32] rounded-full transform -translate-y-1/2"
              style={{
                left: `${minPercent}%`,
                right: `${100 - maxPercent}%`,
              }}
            ></div>

            {/* Min Input Slider - Hidden */}
            <input
              type="range"
              min="0"
              max="1000"
              value={filters.priceRange[0]}
              onChange={(e) => handlePriceChange(e, 'min')}
              className="absolute w-full h-1 top-1/2 left-0 appearance-none bg-transparent rounded-full pointer-events-none outline-none transform -translate-y-1/2"
              style={{
                zIndex: filters.priceRange[0] > 500 ? 5 : 3,
                WebkitAppearance: 'none',
              } as any}
            />

            {/* Max Input Slider - Hidden */}
            <input
              type="range"
              min="0"
              max="1000"
              value={filters.priceRange[1]}
              onChange={(e) => handlePriceChange(e, 'max')}
              className="absolute w-full h-1 top-1/2 left-0 appearance-none bg-transparent rounded-full pointer-events-none outline-none transform -translate-y-1/2"
              style={{
                zIndex: filters.priceRange[1] <= 500 ? 5 : 3,
                WebkitAppearance: 'none',
              } as any}
            />

            {/* Min Handle */}
            <div
              className="absolute w-4 h-4 bg-[#F53E32] rounded-full border-2 border-white shadow-md top-1/2 transform -translate-y-1/2 -translate-x-2"
              style={{
                left: `${minPercent}%`,
                cursor: 'grab',
              }}
            />

            {/* Max Handle */}
            <div
              className="absolute w-4 h-4 bg-[#F53E32] rounded-full border-2 border-white shadow-md top-1/2 transform -translate-y-1/2 -translate-x-2"
              style={{
                left: `${maxPercent}%`,
                cursor: 'grab',
              }}
            />
          </div>

          {/* Price Display */}
          <div className="bg-white p-3 rounded border border-[#E9E9E9]">
            <div className="flex items-center justify-between">
              <span className="font-poppins font-bold text-xs text-[#2B2B2D]">Price :</span>
              <span className="font-poppins font-bold text-xs text-[#7A7A7A]">
                ${filters.priceRange[0]} - ${filters.priceRange[1]}
              </span>
            </div>
          </div>

          {/* Filter Button */}
          <button
            onClick={handleFilterClick}
            className="w-full h-8 bg-[#F53E32] border border-[#F53E32] rounded text-xs font-manrope font-bold text-white uppercase hover:bg-[#E63224] transition-all"
          >
            Filter
          </button>
        </div>
      </div>

      {/* Products Tags Section */}
      <div className="space-y-3">
        <h4 className="font-poppins font-semibold text-sm text-[#2B2B2D] tracking-[0.48px] capitalize">
          Products Tags
        </h4>

        <div className="flex flex-wrap gap-2">
          {TAGS.map((tag) => (
            <button
              key={tag}
              onClick={() => handleTagToggle(tag)}
              className={`px-3 py-1.5 rounded text-xs font-poppins font-medium border transition-all ${
                filters.tags.includes(tag)
                  ? 'bg-[#F53E32] text-white border-[#F53E32]'
                  : 'bg-white text-[#7A7A7A] border-[#E9E9E9] hover:border-[#F53E32]'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </aside>
  )
}
