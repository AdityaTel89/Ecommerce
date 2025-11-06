// src/components/product/ProductBreadcrumb.tsx
import React from 'react'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface ProductBreadcrumbProps {
  currentPage?: string
  breadcrumbItems?: BreadcrumbItem[]
}

export const ProductBreadcrumb: React.FC<ProductBreadcrumbProps> = ({
  currentPage = 'Product',
  breadcrumbItems,
}) => {
  const defaultBreadcrumbs: BreadcrumbItem[] = [
    { label: 'Home', href: '/' },
    { label: currentPage },
  ]

  const items = breadcrumbItems || defaultBreadcrumbs

  return (
    <div className="relative w-full h-16 bg-[#F53E32] flex items-center justify-between px-4 sm:px-6 lg:px-20">
      <h2 className="font-manrope font-bold text-lg text-white tracking-[0.48px]">
        {currentPage}
      </h2>

      <nav className="flex items-center">
        <div className="flex items-center gap-1 text-white text-sm">
          {items.map((item, index) => (
            <React.Fragment key={`breadcrumb-${index}`}>
              {index > 0 && <span className="text-white mx-1">→</span>}
              <a
                href={item.href || '#'}
                className="font-poppins font-medium text-xs tracking-[0.48px] capitalize hover:opacity-80 transition-opacity"
              >
                {item.label}
              </a>
            </React.Fragment>
          ))}
        </div>
      </nav>
    </div>
  )
}
