import { motion } from 'framer-motion'

const Landing = ({ onEnter }) => {
  const pillars = [
    { name: 'पर्यावरण', eng: 'Environment', icon: '🌿', color: '#22c55e', delay: 0 },
    { name: 'नागरिक कर्तव्य', eng: 'Civic Duty', icon: '🤝', color: '#3b82f6', delay: 0.2 },
    { name: 'स्वदेशी', eng: 'Swadeshi', icon: '🇮🇳', color: '#f59e0b', delay: 0.4 },
    { name: 'परिवार', eng: 'Family', icon: '👨‍👩‍👧‍👦', color: '#ec4899', delay: 0.6 },
    { name: 'सामाजिक सद्भावना', eng: 'Social Harmony', icon: '🕉️', color: '#8b5cf6', delay: 0.8 },
  ]

  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden flex flex-col items-center justify-center"
      exit={{ scale: 0, opacity: 0, rotate: 180 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      {/* Background Tricolor Waves */}
      <motion.div
        className="absolute inset-0 opacity-15"
        style={{
          background: 'linear-gradient(180deg, #FF9933 0%, #FF9933 33%, white 33%, white 66%, #138808 66%, #138808 100%)',
        }}
        animate={{ skewY: [0, 3, 0, -3, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Rotating Ashoka Chakra Background */}
      <motion.div
        className="absolute w-80 h-80 border-4 border-saffron opacity-5 rounded-full"
        animate={{ rotate: 360, scale: [1, 1.2, 1] }}
        transition={{ rotate: { duration: 40, repeat: Infinity, ease: "linear" }, scale: { duration: 6, repeat: Infinity } }}
        style={{ top: '5%', right: '5%' }}
      />
      <motion.div
        className="absolute w-96 h-96 border-2 border-green opacity-5 rounded-full"
        animate={{ rotate: -360, scale: [1.1, 0.9, 1.1] }}
        transition={{ rotate: { duration: 50, repeat: Infinity, ease: "linear" }, scale: { duration: 8, repeat: Infinity } }}
        style={{ bottom: '5%', left: '5%' }}
      />

      {/* Main Title */}
      <motion.div
        className="absolute top-16 z-10 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <h1 className="text-5xl md:text-6xl font-black gradient-text mb-2">अभ्युदय'25</h1>
        <p className="text-gold text-lg md:text-2xl font-bold tracking-widest">ABHYUDAYA'25</p>
        <p className="text-gray-400 text-xs md:text-sm mt-2">Transforming Society Through Five Pillars</p>
      </motion.div>

      {/* Animated PanchParivartan Pillars in Circle */}
      <motion.div className="absolute left-1/2 top-[62%] -translate-x-1/2 -translate-y-1/2 transform flex items-center justify-center w-full h-full">
        {pillars.map((pillar, i) => {
          const angle = (i / pillars.length) * Math.PI * 2
          const radius = 200
          const x = Math.cos(angle) * radius
          const y = Math.sin(angle) * radius

          return (
            <motion.div
              key={i}
              className="absolute"
              initial={{ x: 0, y: 0, opacity: 0 }}
              animate={{ x, y, opacity: 1 }}
              transition={{ duration: 1, delay: pillar.delay + 0.5 }}
            >
              <motion.div
                className="relative w-28 h-28 flex flex-col items-center justify-center rounded-2xl border-2 cursor-pointer"
                style={{
                  borderColor: pillar.color,
                  background: `radial-gradient(circle, ${pillar.color}15, ${pillar.color}05)`,
                }}
                animate={{
                  y: [0, -15, 0],
                  boxShadow: [
                    `0 0 20px ${pillar.color}40`,
                    `0 0 40px ${pillar.color}60`,
                    `0 0 20px ${pillar.color}40`,
                  ],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3 + i * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.15,
                }}
                whileHover={{ scale: 1.15 }}
              >
                <motion.div
                  className="text-4xl mb-1"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  {pillar.icon}
                </motion.div>
                <p className="text-white text-xs font-bold text-center leading-tight">{pillar.name}</p>
                <p className="text-gray-300 text-xs text-center mt-1">{pillar.eng}</p>
              </motion.div>

              {/* Orbiting particles around each pillar */}
              {[...Array(3)].map((_, j) => (
                <motion.div
                  key={`particle-${i}-${j}`}
                  className="absolute w-2 h-2 rounded-full"
                  style={{
                    backgroundColor: pillar.color,
                    boxShadow: `0 0 8px ${pillar.color}`,
                    width: 8 + j * 2,
                    height: 8 + j * 2,
                  }}
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                    delay: j * 0.3,
                  }}
                />
              ))}
            </motion.div>
          )
        })}
      </motion.div>

      {/* Central Glowing Orb with Enter Button */}
      <motion.div className="absolute left-1/2 top-[62%] -translate-x-1/2 -translate-y-1/2 transform flex items-center justify-center w-48 h-48">
        <motion.div
          className="absolute w-44 h-44 rounded-full border-2 border-gold"
          style={{
            background: 'radial-gradient(circle, #FFD700 0%, #FFD70030 100%)',
          }}
          animate={{
            scale: [1, 1.3, 1],
            boxShadow: [
              '0 0 30px rgba(255, 215, 0, 0.4)',
              '0 0 60px rgba(255, 215, 0, 0.8)',
              '0 0 30px rgba(255, 215, 0, 0.4)',
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.button
          onClick={onEnter}
          className="relative z-20 px-12 py-3 text-lg font-bold tracking-wide text-amber-800 bg-gradient-to-r from-white via-amber-50 to-white rounded-full shadow-[0_10px_40px_rgba(255,215,0,0.5)] border border-gold"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.2, type: "spring" }}
        >
          Enter Event
        </motion.button>
      </motion.div>

      {/* Floating Particles */}
      {[...Array(40)].map((_, i) => {
        const colors = ['#FF9933', 'white', '#138808', '#FFD700']
        const color = colors[i % colors.length]
        return (
          <motion.div
            key={`float-${i}`}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 3 + 1,
              height: Math.random() * 3 + 1,
              backgroundColor: color,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              boxShadow: `0 0 8px ${color}`,
            }}
            animate={{
              y: [0, -250, 0],
              opacity: [0, 0.7, 0],
              x: [0, Math.random() * 100 - 50, 0],
            }}
            transition={{
              duration: 6 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        )
      })}

      {/* Animated Arrow */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <span className="text-gold text-2xl">↓</span>
      </motion.div>
    </motion.div>
  )
}

export default Landing
