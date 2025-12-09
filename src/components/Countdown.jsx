import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      // Set target date to February 8, 2026 at midnight (since Feb 8, 2025 is in the past)
      const targetDate = new Date(2026, 1, 8, 0, 0, 0).getTime()
      const now = new Date().getTime()
      const difference = targetDate - now

      console.log('Target:', new Date(targetDate), 'Now:', now, 'Difference:', difference)

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)
    return () => clearInterval(timer)
  }, [])

  const CountdownUnit = ({ value, label }) => (
    <motion.div
      className="flex flex-col items-center"
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="relative"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 0.5, repeat: Infinity, delay: 0 }}
      >
        <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-gradient-to-br from-saffron/40 to-gold/40 border-2 border-gold flex items-center justify-center relative overflow-hidden">
          {/* Animated background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-saffron via-gold to-green opacity-20"
            animate={{ x: ['100%', '-100%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          />
          
          {/* Number */}
          <span className="relative z-10 text-4xl md:text-5xl font-bold gradient-text">
            {String(value).padStart(2, '0')}
          </span>
        </div>
      </motion.div>
      
      <motion.span
        className="text-white font-semibold mt-3 text-sm md:text-base uppercase tracking-wider"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {label}
      </motion.span>
    </motion.div>
  )

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-saffron to-gold rounded-full blur-3xl"
          style={{ top: '10%', left: '10%' }}
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-green to-blue rounded-full blur-3xl"
          style={{ bottom: '10%', right: '10%' }}
          animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-4">
            Countdown to Abhyudaya'25
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            The transformation begins on February 8, 2026
          </p>
        </motion.div>

        {/* Countdown Grid */}
        <div className="flex justify-center gap-4 md:gap-8 flex-wrap max-w-4xl mx-auto mb-12">
          <CountdownUnit value={timeLeft.days} label="Days" />
          <CountdownUnit value={timeLeft.hours} label="Hours" />
          <CountdownUnit value={timeLeft.minutes} label="Minutes" />
          <CountdownUnit value={timeLeft.seconds} label="Seconds" />
        </div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.a
            href="#contact"
            className="inline-block px-12 py-4 bg-gradient-to-r from-saffron via-gold to-green text-white text-lg font-bold rounded-full shadow-2xl"
            whileHover={{ scale: 1.1, boxShadow: "0 0 40px rgba(255, 215, 0, 0.8)" }}
            whileTap={{ scale: 0.95 }}
          >
            Register Before It's Too Late
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Countdown
