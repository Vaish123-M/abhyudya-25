import { useState } from 'react'
import { motion } from 'framer-motion'

const Navbar = ({ showHindi, setShowHindi }) => {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = ['Home', 'Events', 'Theme', 'Contact']
  
  const socialLinks = [
    { name: 'Instagram', icon: '📷', url: '#' },
    { name: 'Facebook', icon: '👥', url: '#' },
    { name: 'LinkedIn', icon: '💼', url: '#' },
    { name: 'YouTube', icon: '▶️', url: '#' },
  ]

  return (
    <motion.nav
      className="fixed top-0 w-full z-50 glass-effect shadow-lg"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="text-2xl font-bold gradient-text cursor-pointer select-none relative group"
            whileHover={{ scale: 1.05 }}
            onClick={() => setShowHindi(!showHindi)}
            title="Click to toggle Hindi"
          >
            <div className="flex items-center gap-2">
              <span>Abhyudaya'25</span>
              <span className="text-sm opacity-50 group-hover:opacity-100 transition-opacity">
                {showHindi ? '🇮🇳' : '🌐'}
              </span>
            </div>
            {showHindi && (
              <motion.div
                className="text-sm mt-1"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                अभ्युदय'25
              </motion.div>
            )}
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white hover:text-gold transition-colors font-medium"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                {item}
              </motion.a>
            ))}

            {/* Register Button */}
            <motion.a
              href="#contact"
              className="px-6 py-2 bg-gradient-to-r from-saffron to-gold text-white font-bold rounded-full shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 215, 0, 0.8)" }}
              whileTap={{ scale: 0.95 }}
            >
              Register
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white text-3xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            className="md:hidden mt-4 space-y-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
          >
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-white hover:text-gold transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <a
              href="#contact"
              className="block text-center px-6 py-2 bg-gradient-to-r from-saffron to-gold text-white font-bold rounded-full"
              onClick={() => setIsOpen(false)}
            >
              Register
            </a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navbar
