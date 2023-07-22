import React from 'react'
import {motion} from 'framer-motion';

const  Card5 = () => {
  return (
    <motion.div 
    whileHover={{scale:1.1}}>
    <div className='bg-red-500  text-white mx-' >
        <div className=''>
        <h1 className='text-center text-xl mx-10 font-bold pt-14 '>
DESIGNS
        </h1>
        <h1 className='mx-10 hover:underline  pt- pb-20'>
            Read More
        </h1>
    </div>
    </div>
        </motion.div>

  )
}

export default  Card5