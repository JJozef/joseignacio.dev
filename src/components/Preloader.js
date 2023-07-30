import { useState } from 'react'
import { motion } from 'framer-motion'

function Preloader() {
  const [isLoading, setIsLoading] = useState(true)

  return isLoading ? (
    <div className='w-full h-responsive fixed inset-0 z-50 bg-white dark:bg-neutral-900 flex justify-center items-center'>
      <motion.img
        src='/logo.jpg'
        alt='Jose Ignacio - Logo.'
        className='w-20 h-20 rounded-full absolute'
        transition={{
          duration: 3,
          ease: 'easeInOut',
          times: [0, 0.2, 0.5, 0.8, 1, 1.2, 1.5, 1.8, 2]
        }}
        animate={{
          scale: [1, 0.7, 1.5, 1, 1.2, 1, 0.6, 1],
          rotate: [0, 270, -70, 270, 0, -90, -90, 270, 0],
          borderRadius: ['20%', '20%', '50%', '50%', '20%', '20%', '50%', '50%']
        }}
        onAnimationComplete={() => {
          setIsLoading(false)
        }}
      />
    </div>
  ) : null
}

export default Preloader
