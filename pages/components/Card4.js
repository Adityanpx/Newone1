import React from 'react'
import {motion} from 'framer-motion';

const Card4 = () => {
  return (
  <motion.div 
    whileHover={{scale:1.1}}>
    
    <div className='bg-red-400 mx-'>
        <div>
        <img src='KG.jpeg' alt='ADT' className='  h-48'/>

        </div>
    </div>
        </motion.div>

  )
}

export default Card4