import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const picDragConstraints = {
    top: -8,
    left: -8,
    right: 8,
    bottom: 8,
};

export default function ProfilePic() {
  return (
    <motion.div 
        drag
            dragConstraints={picDragConstraints}
        variants={{
            offscreen: {
                opacity: 0,
                x: -100,
            },
            onscreen: {
                opacity: 1,
                x: 0,
                transition: {
                    delay: 0.5,
                    type: "spring",
                    stiffness: 400,
                    damping: 17,
                    duration: 0.1,
                },
            },
        }}
    className='h-full bg-gray-50 border border-black/5 flex justify-center items-center p-5 shadow-sm cursor-grab'>
        <div 
        className="relative h-full w-80">
            <Image src='/profile.png' fill alt="Profile Picture" className='object-cover pointer-events-none'/>
        </div>
        
    </motion.div>
  )
}
