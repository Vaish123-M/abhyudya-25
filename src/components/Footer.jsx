import { motion } from 'framer-motion'

const Footer = ({ showHindi }) => {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 py-12 px-4">
      <div className="container mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <motion.h3
              className="text-3xl font-bold gradient-text mb-4"
              whileHover={{ scale: 1.05 }}
            >
              Abhyudaya'25
              {showHindi && (
                <motion.div
                  className="text-xl mt-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  अभ्युदय'25
                </motion.div>
              )}
            </motion.h3>
            <p className="text-gray-400 mb-4">
              Club Engineering India's annual event celebrating transformation through PanchParivartan.
            </p>
            <div className="text-gray-500 text-sm">
              © 2025 Club Engineering India. All rights reserved.
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Events', 'Theme', 'Contact'].map((link) => (
                <li key={link}>
                  <motion.a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-gold transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    → {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold text-white mb-4">Contact</h4>
            <div className="space-y-3 text-gray-400">
              <div>📧 info@engineeringindia.org</div>
              <div>📱 +91 XXXXX XXXXX</div>
              <div>📍 Engineering India HQ</div>
            </div>
          </div>
        </div>

        {/* Social Media Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-500">
              Built with ❤️ for transformation
            </div>
            
            <div className="flex space-x-6">
              {[
                { icon: '📷', name: 'Instagram' },
                { icon: '👥', name: 'Facebook' },
                { icon: '💼', name: 'LinkedIn' },
                { icon: '▶️', name: 'YouTube' },
              ].map((social) => (
                <motion.a
                  key={social.name}
                  href="#"
                  className="text-2xl hover:scale-125 transition-transform"
                  whileHover={{ rotate: 360, scale: 1.3 }}
                  transition={{ duration: 0.3 }}
                  title={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="mt-8 text-center">
          <motion.div
            className="inline-block text-4xl"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            ✨
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
