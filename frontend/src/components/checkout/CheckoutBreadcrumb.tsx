// src/components/checkout/CheckoutBreadcrumb.tsx
import React from 'react'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface CheckoutBreadcrumbProps {
  currentPage?: string
  breadcrumbItems?: BreadcrumbItem[]
}

export const CheckoutBreadcrumb: React.FC<CheckoutBreadcrumbProps> = ({
  currentPage = 'Checkout',
  breadcrumbItems,
}) => {
  const defaultBreadcrumbs: BreadcrumbItem[] = [
    { label: 'Home', href: '/' },
    { label: currentPage },
  ]

  const items = breadcrumbItems || defaultBreadcrumbs

  return (
    <div className="relative w-full h-16 bg-[#F53E32] flex items-center justify-between px-8 sm:px-12 lg:px-32">
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
                className="font-poppins font-medium text-xs tracking-[0.48px] capitalize hover:opacity-80 transition-opacity text-[#E5E5E5]"
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
