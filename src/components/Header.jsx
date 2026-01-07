import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold gradient-text">SmartPharm</span>
          </div>
          
          <div className="hidden md:flex md:space-x-8">
            <a href="#products" className="text-gray-700 hover:text-primary-600 transition">Products</a>
            <a href="#features" className="text-gray-700 hover:text-primary-600 transition">Features</a>
            <a href="#analytics" className="text-gray-700 hover:text-primary-600 transition">Analytics</a>
            <a href="#contact" className="text-gray-700 hover:text-primary-600 transition">Contact</a>
          </div>

          <div className="hidden md:block">
            <button className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition">
              Get Started
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <a href="#products" className="block text-gray-700">Products</a>
            <a href="#features" className="block text-gray-700">Features</a>
            <a href="#analytics" className="block text-gray-700">Analytics</a>
            <a href="#contact" className="block text-gray-700">Contact</a>
            <button className="w-full bg-primary-600 text-white px-6 py-2 rounded-lg">
              Get Started
            </button>
          </div>
        )}
      </nav>
    </header>
  )
}

