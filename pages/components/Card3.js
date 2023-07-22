import React from 'react'
import {motion} from 'framer-motion';

const Card3 = () => {
  return (
    <motion.div 
    whileHover={{scale:1.1}}>
    <div className='bg-red-300 text-white mx-'>
        <div className=''>
        <h1 className='text-center text-xl mx-10 font-bold pt-14 '>
BRANDING
        </h1>
        <h1 className='mx-10 hover:underline  pb-20'>
            Read More
        </h1>
    </div>
    </div>
    </motion.div>

  )
}

export default Card3