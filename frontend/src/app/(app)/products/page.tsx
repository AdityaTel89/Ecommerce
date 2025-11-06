// src/app/products/page.tsx
'use client'

import { useState } from 'react'
import { ProductBreadcrumb } from '@/components/product/ProductBreadcrumb'
import { ProductDetails } from '@/components/product/ProductDetails'
import { ProductFilter } from '@/components/product/ProductFilter'
import { PopularProducts } from '@/components/product/PopularProducts'

interface FilterState {
  category: string
  priceRange: [number, number]
  tags: string[]
}

export default function ProductsPage() {
  const [filters, setFilters] = useState<FilterState>({
    category: '',
    priceRange: [20, 250],
    tags: [],
  })

  const handleFilterChange = (newFilters: FilterState) => {
    setFilters(newFilters)
    console.log('Filters applied:', newFilters)
  }

  const productData = {
    productImage: '/Assets/images/quinoa.jpg',
    productTitle: 'Seeds Of Change Oraganic Quinoa, Brown',
    productDescription:
      'Premium organic quinoa sourced from certified sustainable farms. Rich in protein, fiber, and essential amino acids. Perfect for a healthy diet.',
    rating: 5,
    reviewCount: 75,
    brand: 'ESTA BETTERU CO',
    flavour: 'Super Saver Pack',
    dietType: 'Vegetarian',
    weight: '200 Grams',
    speciality: 'Gluten free, Sugar free',
    info: 'Egg Free, Allergen-Free',
    items: 1,
    originalPrice: 123.25,
    salePrice: 120.25,
    sizes: ['50kg', '80kg', '120kg', '200kg'],
  }

  return (
    <>
      <ProductBreadcrumb currentPage="Product" />
      <main className="bg-white w-full">
        <div className="w-full px-6 sm:px-8 md:px-12 lg:px-20 xl:px-32 py-10 sm:py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">
            <div className="lg:col-span-1">
              <ProductFilter onFilterChange={handleFilterChange} />
            </div>
            <div className="lg:col-span-4">
              <ProductDetails {...productData} />
            </div>
          </div>
        </div>
      </main>

      {/* Popular Products Section */}
      <PopularProducts />
    </>
  )
}
