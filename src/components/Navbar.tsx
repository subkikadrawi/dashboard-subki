'use client'
import Link from 'next/link'
import { useState } from 'react'
import Button from './Button'
import { showSuccess } from './Alert'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  // const [user, setUser] = useState<string | null>(null)
  // useEffect(() => {
  //   fetch('/api/user', { credentials: 'include' })
  //     .then(r => r.json())
  //     .then(d => setUser(d.user?.username || null))
  // }, [])

  return (
    <nav className="bg-white shadow p-4">
      <div className="w-5/6 mx-auto flex justify-between items-center">
        <div className="font-bold">MyApp</div>
        
        {/* Desktop Menu - hidden on mobile */}
        <div className="hidden md:flex space-x-4 items-center">
          <Link href="/">About</Link>
          <Link href="/">Work</Link>
          <Link href="/">Contact</Link>
          <Button type="primary" onClick={() => showSuccess('Download CV clicked')}>Download CV</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Sidebar Menu */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Sidebar */}
          <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out md:hidden">
            <div className="p-4">
              <div className="flex justify-between items-center mb-8">
                <div className="font-bold text-lg">Menu</div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Close menu"
                  className="p-2"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="flex flex-col space-y-4">
                <Link href="/" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600">About</Link>
                <Link href="/" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600">Work</Link>
                <Link href="/" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600">Contact</Link>
                <Button onClick={() => showSuccess('Download CV clicked')}>Download CV</Button>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  )
}
