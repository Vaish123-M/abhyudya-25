import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const themes = [
  {
    title: 'पर्यावरण संरक्षण',
    subtitle: 'Environmental Conservation',
    icon: '🌳',
    description: 'Protecting nature for future generations',
    color: 'from-green-600 to-emerald-400',
  },
  {
    title: 'नागरिक कर्तव्य',
    subtitle: 'Civic Duty',
    icon: '🗳️',
    description: 'Fulfilling responsibilities as citizens',
    color: 'from-blue-600 to-cyan-400',
  },
  {
    title: 'स्वदेशी आचरण',
    subtitle: 'Indigenous Conduct',
    icon: '🇮🇳',
    description: 'Promoting local culture and products',
    color: 'from-saffron to-gold',
  },
  {
    title: 'कुटुम्ब प्रबोधन',
    subtitle: 'Family Awakening',
    icon: '👨‍👩‍👧‍👦',
    description: 'Strengthening family bonds',
    color: 'from-pink-600 to-rose-400',
  },
  {
    title: 'सामाजिक समरसता',
    subtitle: 'Social Harmony',
    icon: '🤝',
    description: 'Building inclusive communities',
    color: 'from-purple-600 to-indigo-400',
  },
]

const ThemeCard = ({ theme, index }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      className="glass-effect rounded-3xl p-8 hover:scale-105 transition-all duration-300 cursor-pointer group"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
    >
      <motion.div
        className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br ${theme.color} flex items-center justify-center text-4xl`}
        whileHover={{ rotate: 360, scale: 1.2 }}
        transition={{ duration: 0.5 }}
      >
        {theme.icon}
      </motion.div>
      
      <h3 className="text-2xl font-bold text-white mb-2 text-center group-hover:gradient-text transition-all">
        {theme.title}
      </h3>
      
      <p className="text-gold text-sm mb-3 text-center font-semibold">
        {theme.subtitle}
      </p>
      
      <p className="text-gray-300 text-center">
        {theme.description}
      </p>

      {/* Decorative element */}
      <motion.div
        className={`h-1 mt-4 rounded-full bg-gradient-to-r ${theme.color} opacity-0 group-hover:opacity-100 transition-opacity`}
        initial={{ width: 0 }}
        whileHover={{ width: '100%' }}
      />
    </motion.div>
  )
}

const Theme = ({ showHindi }) => {
  return (
    <section id="theme" className="relative py-20 px-4 overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle, #FFD700 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
        animate={{
          backgroundPosition: ['0px 0px', '50px 50px'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <div className="container mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-4">
            पंच परिवर्तन
          </h2>
          <p className="text-xl text-gray-300">Five Pillars of Transformation</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {themes.map((theme, index) => (
            <ThemeCard key={index} theme={theme} index={index} />
          ))}
        </div>

        {/* Central decorative element */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="inline-block glass-effect px-8 py-4 rounded-full">
            <span className="text-2xl gradient-text font-bold">
              Unite for Change • एक साथ परिवर्तन
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Theme
