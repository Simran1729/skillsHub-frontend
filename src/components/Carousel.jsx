import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion';

function Carousel({images}) {
    const carouselRef = useRef(null);

    useEffect(() => {
      const handleScroll = () => {
        const scroll = carouselRef.current;
        if (scroll) {
          scroll.scrollLeft += 1; // Adjust the speed of the scroll here
        }
      };
  
      const interval = setInterval(handleScroll, 200); // Speed of animation
  
      return () => clearInterval(interval);
    }, []);


  return (
    <div className="w-screen overflow-hidden relative">
         <motion.div
        className="flex w-max"
        ref={carouselRef}
        initial={{ x: 0 }}
        animate={{ x: '-100%' }}
        transition={{ repeat: Infinity, ease: 'linear', duration: 150 }} // Control the speed with `duration`
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