import React from 'react'
import Card from './components/Card'
import {motion} from 'framer-motion'

export default function index() {
  return (
    <div className='md:h-full  w-screen h- fixed bg-white '>
      <motion.div
        initial={{ opacity: 0, y: -50 }} // Initial animation properties
        animate={{ opacity: 1, y: 0 }} // Animation properties to transition to
        transition={{ duration: 0.9 }} // Duration of the animation
        >
    <Card/>
    </motion.div>
    </div>
  )
}
