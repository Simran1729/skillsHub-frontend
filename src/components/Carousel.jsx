import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion';

function Carousel({images}) {
    const carouselRef = useRef(null);

  return (
    <div className="w-full overflow-hidden relative">
         <motion.div
        className="flex w-full"
        ref={carouselRef}
        initial={{ x: 0 }}
        animate={{ x: '-100%' }}
        transition={{ repeat: Infinity, ease: 'linear', duration: 150 , while: 'scrollLeft < carouselRef.current.scrollWidth'}} // Control the speed with `duration`
      >
        {images.map((image, index) => (
          <div key={index} className="min-w-[300px] relative">
            <img
              src={image}
              alt={`Slide ${index}`}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
        {/* Duplicate the images to create an infinite loop */}
        {images.map((image, index) => (
          <div key={`duplicate-${index}`} className="min-w-[300px]">
            <img
              src={image}
              alt={`Slide ${index}`}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default Carousel