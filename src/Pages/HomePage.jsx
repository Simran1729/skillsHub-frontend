import React from 'react'
import teacher from '../assets/homePage/teacher.png'
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import Carousel from '../components/Carousel';
import car1 from '../assets/homePage/car1.png'
import car2 from '../assets/homePage/car2.png'
import car3 from '../assets/homePage/car3.png'
import car4 from '../assets/homePage/car4.png'
import car5 from '../assets/homePage/car5.png'
import car6 from '../assets/homePage/car6.png'
import car7 from '../assets/homePage/car7.png'
import car8 from '../assets/homePage/car8.png'
import car9 from '../assets/homePage/car9.png'
import car10 from '../assets/homePage/car10.png'
import instructor from "../assets/homePage/instructor.png"
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const data = [
  "Thousands of creative classes. Beginner to pro.",
  "Taught by creative pros and industry icons.",
  "Learning Paths to help you achieve your goals.",
  "Certificates to celebrate your accomplishments."
]

const images = [
 car1, car2, car3, car4, car5, car6, car7, car8, car9, car10
]


 
function HomePage() {
  return (
    <>
        <section className="flex flex-col md:flex-row w-full justify-around pt-5">
            <div className="font-poppins text-my-dark-blue md:w-3/12 flex flex-col justify-center">
              <p className="text-4xl md:text-6xl font-bold sm:px-2">Become a pro with thousands of creative classes</p>
              <p className="font-semibold text-lg md:text-xl py-5 sm:px-2">
                Join a community of creatives who are mastering their craft with our courses
              </p>
              <div className="bg-my-green h-2 w-20 md:w-40"></div>
            </div>

            <div className="w-full md:w-6/12">
              <img src={teacher} className="w-full h-auto" alt="Teacher" />
            </div>
        </section>


        {/* <section className="flex flex-col md:flex-row w-full justify-around pt-5">
          <div className="font-poppins text-my-dark-blue md:w-3/12 flex flex-col justify-center">
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1 }}
              className="text-4xl md:text-6xl font-bold sm:px-2"
            >
              Become a pro with thousands of creative classes
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1, delay: 0.5 }}
              className="font-semibold text-lg md:text-xl py-5 sm:px-2"
            >
              Join a community of creatives who are mastering their craft with our courses
            </motion.p>
            <motion.div 
              initial={{ x: 0, width: 0 }} 
              animate={{ x: 0, width: '100%' }} 
              transition={{ duration: 1, delay: 1 }}
              className="bg-my-green h-2 w-20 md:w-40"
            />
          </div>

          <div className="w-full md:w-6/12">
            <img src={teacher} className="w-full h-auto" alt="Teacher" />
          </div>
        </section> */}


        <section>
          {/* our dashing carousel */}
          <div className = "w-full">
              <Carousel images={images}/>
          </div>
        </section>

        <section className="w-full h-auto bg-black text-white font-poppins flex flex-col lg:flex-row py-12 lg:py-36 px-4 lg:px-16 justify-center gap-10 lg:gap-14">
          <div className="text-3xl lg:text-5xl font-bold w-full lg:w-1/6 flex items-center">
            <p>Creative Learning Made Easy</p>
          </div>

          <div className="text-xl lg:text-4xl font-semibold">
            {data.map((point, index) => (
              <div key={index} className="flex items-center py-2 lg:py-4">
                <span className="text-my-green mr-3"><IoCheckmarkCircleSharp/></span> 
                <p>{point}</p>
              </div>
            ))}
          </div>            
      </section>

        <section>
            {/* get started with these popularcourses */}
            <div>show popular courses</div>
            <img />
        </section>

        <section className = "font-poppins flex-col justify-center text-my-dark-blue text-center py-10">
              <div>
                <p className = "text-5xl font-bold py-8 sm:text-4xl">Why Students Love skillsHub</p>
                <p className = "text-2xl w-1/3 mx-auto sm:text-xl">Whether it's a first brush on canvas or the last frame in an animation, skillsHub is here to support you on every step of your creative journey.</p>
              </div>

              <div className = "py-20">
                <p className = "text-4xl font-semibold w-2/5 mx-auto sm:text-2xl">"I come to skillsHub for the curation and class quality. That's really worth the cost of membership to me."</p>
                <p className = "text-2xl font-bold py-10 sm:text-xl">-Jason R, skillsHub student</p>
                <div className = "bg-my-green h-2 w-1/12 mx-auto"></div>
              </div>

              <div> 
                <p className = "text-4xl font-semibold w-2/5 mx-auto sm:text-2xl">"I have an understanding that, even if the work is not perfect, it's a work in progress. And the reason why I'm on skillsHub is to develop a skill. I feel that it's a safe space."</p>
                <p className = "text-2xl font-bold py-10 sm:text-xl">-DeVeor R, skillsHub student</p>
                <div className = "bg-my-green h-2 w-1/12 mx-auto"></div>
              </div>
        </section>

      <section className="w-full flex flex-col lg:flex-row bg-black font-poppins text-white px-4 py-10 lg:py-20">
        <div className="mx-auto lg:mx-0 lg:px-14">
          <p className="text-3xl lg:text-5xl font-bold py-7">Become an Instructor</p>
          <p className="text-lg lg:text-2xl w-full lg:w-4/5 leading-relaxed">
            Unleash your teaching potential! Become an instructor on Skillshub and monetize your knowledge. Whether you're a seasoned educator or a passionate expert, we provide the tools and support to help you succeed in the online learning space.
          </p>
          <div className="py-7">
            <button className="font-semibold px-4 bg-my-green py-2 text-lg lg:text-xl rounded-md mr-3 text-my-dark-blue">
              Sign up
            </button>
          </div>
        </div>

        <div className="w-full"> {/* Increase the width to 2/3 on large screens */}
          <img src={instructor} className="object-cover md:w-2/3 md:h-auto lg:w-[50%] lg:h-auto xl:w-3/4 xl:h-auto shadow-sm shadow-my-green" alt="Instructor" />
        </div>
    </section>
    </>
  )
}

export default HomePage