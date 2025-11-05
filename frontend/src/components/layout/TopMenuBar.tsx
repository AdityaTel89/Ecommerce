'use client'

import { useState } from 'react'
import Link from 'next/link'
import styles from './TopMenuBar.module.css'

interface NavigationLink {
  label: string
  hasDropdown: boolean
}

const NAVIGATION_LINKS: NavigationLink[] = [
  { label: 'Home', hasDropdown: false },
  { label: 'Category', hasDropdown: true },
  { label: 'Products', hasDropdown: true },
  { label: 'Pages', hasDropdown: true },
  { label: 'Blog', hasDropdown: true },
  { label: 'Elements', hasDropdown: true },
]

export default function TopMenuBar() {
  const [isToggleOpen, setIsToggleOpen] = useState(false)

  return (
    <div className={styles.topMenuBar}>
      {/* Category Toggle Button - Left */}
      <button
        onClick={() => setIsToggleOpen(!isToggleOpen)}
        className={styles.categoryToggle}
        aria-label="Toggle category menu"
        title="Category Menu"
      >
        <img src="/assets/icons/Toggle.png" alt="Toggle" />
      </button>

      {/* Navigation Menu - Center */}
      <nav className={styles.navContainer} role="navigation" aria-label="Main navigation">
        <ul className={styles.navList}>
          {NAVIGATION_LINKS.map((link) => (
            <li key={link.label} className={styles.navItem}>
              <Link href={`/${link.label.toLowerCase()}`} className={styles.navLink}>
                {link.label}
              </Link>
              {link.hasDropdown && (
                <span className={styles.dropdownIcon}>
                  <img src="/assets/icons/DropDown.png" alt="DropDown" />
                </span>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Right Section - Phone Icon and Number */}
      <div className={styles.rightSection}>
        <div className={styles.phoneIcon}>
            <img src="/assets/icons/Phone.png" alt="Phone" />
        </div>
        <span className={styles.phoneNumber}>+123 ( 456 ) ( 7890 )</span>
      </div>
    </div>
  )
}
