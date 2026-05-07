import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const MouseFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches
    setIsTouchDevice(isTouch)

    if (isTouch) return

    const handleMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY })
      setIsVisible(true)
    }

    const handleLeave = () => setIsVisible(false)
    const handleEnter = () => setIsVisible(true)

    window.addEventListener('mousemove', handleMove)
    document.addEventListener('mouseleave', handleLeave)
    document.addEventListener('mouseenter', handleEnter)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      document.removeEventListener('mouseleave', handleLeave)
      document.removeEventListener('mouseenter', handleEnter)
    }
  }, [])

  if (isTouchDevice) return null

  return (
    <>
      <motion.div
        animate={{
          x: position.x - 18,
          y: position.y - 18,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: 'spring', stiffness: 220, damping: 22, mass: 0.6 }}
        className="pointer-events-none fixed left-0 top-0 z-110 h-9 w-9 rounded-full border border-white/30 bg-white/5 backdrop-blur-sm"
      />
      <motion.div
        animate={{
          x: position.x - 3,
          y: position.y - 3,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: 'spring', stiffness: 520, damping: 28, mass: 0.3 }}
        className="pointer-events-none fixed left-0 top-0 z-111 h-1.5 w-1.5 rounded-full bg-white"
      />
    </>
  )
}

export default MouseFollower
