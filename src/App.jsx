import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Landing from './components/Landing'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Countdown from './components/Countdown'
import Theme from './components/Theme'
import Events from './components/Events'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [showMain, setShowMain] = useState(false)
  const [showHindi, setShowHindi] = useState(false)

  return (
    <div className="min-h-screen">
      <AnimatePresence mode="wait">
        {!showMain ? (
          <Landing key="landing" onEnter={() => setShowMain(true)} />
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Navbar showHindi={showHindi} setShowHindi={setShowHindi} />
            <Hero showHindi={showHindi} />
            <Countdown />
            <Theme showHindi={showHindi} />
            <Events showHindi={showHindi} />
            <Contact showHindi={showHindi} />
            <Footer showHindi={showHindi} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
