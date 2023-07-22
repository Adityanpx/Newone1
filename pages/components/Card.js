import React from 'react'
import Card1 from '..//components/Card1'
import Card2 from './Card2'
import Card3 from './Card3'
import Card4 from './Card4'
import Card5 from './Card5'
import {motion} from 'framer-motion';
export default function Card() {
  return (
    
    <div className=' place-content-center md:pt-40 pt-10 mx-auto grid '>
      <div className='bg-gradient-to-r from-green-300 via-blue-300 to-red-300'>
        <div>
          <div className='text-center  md:text-5xl text-2xl opacity-50 border-spacing-3 font-extrabold pt-10' style={{ letterSpacing: '10px' }}> OUR SERVICES</div>
          <motion.div
        initial={{ opacity: 0, y: -50 }} // Initial animation properties
        animate={{ opacity: 1, y: 0 }} // Animation properties to transition to
        transition={{ duration: 0.9 }} // Duration of the animation
      className='mx-20 md:gap-3 hover:cursor-pointer pt-10 pb-10  md:flex'>
          <Card1/>
          <Card2/>
          <Card3/> 
          <Card4/>
          <Card5/>
          </motion.div>
        </div>
      </div>
   
    </div>
    
  )
}
