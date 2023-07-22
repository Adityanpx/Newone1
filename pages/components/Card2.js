import React from 'react'
import {motion} from 'framer-motion';

const Card2 = () => {
  return (
    <motion.div 
    whileHover={{scale:1.1}}>
    <div className='bg-black mx-'>
        
        <div className=' '>
            <img src='TheMan.jpeg' alt='ADT' className='h-48 '/>
        </div>



    </div>
    </motion.div>
  )
}

export default Card2