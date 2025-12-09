import { motion } from 'framer-motion'
import { useState } from 'react'

const Contact = ({ showHindi }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Registration submitted! We will contact you soon.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="relative py-20 px-4 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-transparent to-blue-900/30" />

      <div className="container mx-auto relative z-10 max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-4">
            Register Now
            {showHindi && (
              <motion.div
                className="text-3xl md:text-4xl mt-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                पंजीकरण करें
              </motion.div>
            )}
          </h2>
          <p className="text-xl text-gray-300">
            Join us in the journey of transformation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            className="glass-effect rounded-3xl p-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-white font-semibold mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/50 transition-all"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/50 transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/50 transition-all"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">
                  Message / Event Interest
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/50 transition-all resize-none"
                  placeholder="Tell us which events you're interested in..."
                />
              </div>

              <motion.button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-saffron via-gold to-green text-white font-bold text-lg rounded-xl shadow-lg"
                whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(255, 215, 0, 0.6)" }}
                whileTap={{ scale: 0.98 }}
              >
                Submit Registration
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Info Card */}
            <div className="glass-effect rounded-3xl p-8">
              <h3 className="text-3xl font-bold gradient-text mb-6">
                Get In Touch
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">📧</div>
                  <div>
                    <div className="text-white font-semibold">Email</div>
                    <div className="text-gray-300">info@engineeringindia.org</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-3xl">📱</div>
                  <div>
                    <div className="text-white font-semibold">Phone</div>
                    <div className="text-gray-300">+91 XXXXX XXXXX</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-3xl">📍</div>
                  <div>
                    <div className="text-white font-semibold">Location</div>
                    <div className="text-gray-300">Engineering India Headquarters</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="glass-effect rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Follow Us
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: 'Instagram', icon: '📷', color: 'from-pink-600 to-purple-600' },
                  { name: 'Facebook', icon: '👥', color: 'from-blue-600 to-blue-800' },
                  { name: 'LinkedIn', icon: '💼', color: 'from-blue-700 to-blue-900' },
                  { name: 'YouTube', icon: '▶️', color: 'from-red-600 to-red-800' },
                ].map((social) => (
                  <motion.a
                    key={social.name}
                    href="#"
                    className={`flex items-center space-x-3 p-4 rounded-xl bg-gradient-to-r ${social.color} text-white font-semibold`}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-2xl">{social.icon}</span>
                    <span>{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Important Dates */}
            <div className="glass-effect rounded-3xl p-8">
              <h3 className="text-2xl font-bold gradient-text mb-4">
                Important Dates
              </h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex justify-between">
                  <span>Registration Opens:</span>
                  <span className="text-white font-semibold">Jan 15, 2025</span>
                </div>
                <div className="flex justify-between">
                  <span>Early Bird Deadline:</span>
                  <span className="text-white font-semibold">Feb 1, 2025</span>
                </div>
                <div className="flex justify-between">
                  <span>Event Date:</span>
                  <span className="text-gold font-bold">Feb 20-22, 2025</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
