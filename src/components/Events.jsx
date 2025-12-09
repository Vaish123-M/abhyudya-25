import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const events = [
  {
    title: 'Ultimate Socio-Technocrat',
    icon: '🏆',
    description: 'Compete to be the ultimate leader combining social and technical skills',
    color: 'from-purple-600 to-pink-600',
    category: 'Competition',
  },
  {
    title: 'Pragyan Lecture Series',
    icon: '🎓',
    description: 'Two enlightening lectures by renowned speakers',
    color: 'from-blue-600 to-cyan-600',
    category: 'Lecture',
  },
  {
    title: 'Pragyan Panel Discussion',
    icon: '💬',
    description: 'Expert panel discussing contemporary issues',
    color: 'from-indigo-600 to-purple-600',
    category: 'Discussion',
  },
  {
    title: 'Speech Competition',
    icon: '🎤',
    description: 'Showcase your oratory skills on PanchParivartan',
    color: 'from-green-600 to-teal-600',
    category: 'Competition',
  },
  {
    title: 'Reel Making Competition',
    icon: '🎬',
    description: 'Create viral reels on social transformation',
    color: 'from-pink-600 to-rose-600',
    category: 'Creative',
  },
  {
    title: 'Drawing Competition',
    icon: '🎨',
    description: 'Express PanchParivartan through art',
    color: 'from-yellow-600 to-orange-600',
    category: 'Creative',
  },
  {
    title: 'Treasure Hunt',
    icon: '🗺️',
    description: 'Adventure through challenges and puzzles',
    color: 'from-red-600 to-pink-600',
    category: 'Adventure',
  },
  {
    title: 'Hackathon',
    icon: '💻',
    description: '24-hour coding marathon for innovative solutions',
    color: 'from-cyan-600 to-blue-600',
    category: 'Technical',
  },
  {
    title: 'Project Competition',
    icon: '🔬',
    description: 'Present your innovative engineering projects',
    color: 'from-teal-600 to-green-600',
    category: 'Technical',
  },
  {
    title: 'Youth Parliament',
    icon: '🏛️',
    description: 'Debate and discuss national policies',
    color: 'from-saffron to-gold',
    category: 'Debate',
  },
  {
    title: 'Open Stage',
    icon: '🎭',
    description: 'Platform for all talents - sing, dance, perform!',
    color: 'from-violet-600 to-purple-600',
    category: 'Performance',
  },
]

const EventCard = ({ event, index }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      className="glass-effect rounded-2xl p-6 group cursor-pointer relative overflow-hidden"
      initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
      animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : { opacity: 0, scale: 0.8, rotateY: -90 }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      whileHover={{ 
        scale: 1.05, 
        rotateZ: 2,
        boxShadow: "0 25px 50px rgba(0,0,0,0.5)" 
      }}
    >
      {/* Gradient Background on Hover */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
      />

      {/* Icon */}
      <motion.div
        className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${event.color} flex items-center justify-center text-3xl shadow-lg`}
        whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
        transition={{ duration: 0.5 }}
      >
        {event.icon}
      </motion.div>

      {/* Category Badge */}
      <div className="text-center mb-2">
        <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${event.color} text-white`}>
          {event.category}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-white text-center mb-3 group-hover:gradient-text transition-all">
        {event.title}
      </h3>

      {/* Description */}
      <p className="text-gray-300 text-sm text-center leading-relaxed">
        {event.description}
      </p>

      {/* Hover Effect Line */}
      <motion.div
        className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${event.color}`}
        initial={{ width: 0 }}
        whileHover={{ width: '100%' }}
        transition={{ duration: 0.3 }}
      />

      {/* Corner Decoration */}
      <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-gold opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-gold opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  )
}

const Events = ({ showHindi }) => {
  return (
    <section id="events" className="relative py-20 px-4 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-6xl"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              rotate: [0, 360],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            ✨
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-4">
            Events & Competitions
            {showHindi && (
              <motion.div
                className="text-3xl md:text-4xl mt-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                कार्यक्रम और प्रतियोगिताएं
              </motion.div>
            )}
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Participate in diverse events designed to inspire and transform
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {events.map((event, index) => (
            <EventCard key={index} event={event} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.a
            href="#contact"
            className="inline-block px-12 py-4 bg-gradient-to-r from-saffron via-gold to-green text-white text-xl font-bold rounded-full shadow-2xl"
            whileHover={{ 
              scale: 1.1, 
              boxShadow: "0 0 40px rgba(255, 215, 0, 0.8)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Register for Events
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Events
