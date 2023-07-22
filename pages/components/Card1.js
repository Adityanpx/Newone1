import React from 'react'
import {motion} from 'framer-motion';

const Card1 = () => {
  return (
    <motion.div 
    whileHover={{scale:1.1}}>

    <div className='bg-red-500 text-white '>
    <div className=''>
        <h1 className='text-center text-xl mx-8 font-bold text-white pt-14 '>
STRATERGY
        </h1>
        <h1 className='mx-8 hover:underline  pb-20'>
            Read More
        </h1>
    </div>
    </div>
    </motion.div>
  )
}

export default Card1