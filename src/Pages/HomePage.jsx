import React from 'react'
import NavBar from '../components/NavBar'
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
        <NavBar/>
        <section className = "flex w-full justify-around pt-5">
            {/* first section with big photo and  */}
            <div className = "font-poppins text-my-dark-blue w-3/12 flex flex-col justify-center">
                <p className = "text-6xl font-bold">Beocome a pro with thousands of creative classes</p>
                <p className = "font-semibold text-xl py-5">
                  Join a community of creatives who are mastering their craft with our courses
                  </p>
                  <div className = "bg-my-green h-2 w-40"></div>
            </div>
            
            <div>
              <img src={teacher} className = "w-full h-full" />
            </div>
        </section>

        <section>
          {/* our dashing carousel */}
          <div>
              <Carousel images={images}/>
          </div>
        </section>

        <section className = "w-screen h-auto bg-black text-white font-poppins flex py-36 px-16 justify-center gap-14">
             <div className = "text-5xl font-bold w-1/6 flex items-center">
                <p>Creative Learning Made Easy</p>
             </div> 

             <div className = "text-4xl font-semibold relative" >
                {
                  data.map((point, index) => {
                    return <div key={index} className = "flex items-center py-4">
                      <span className = "text-my-green mr-3"><IoCheckmarkCircleSharp/></span> <p>{point}</p>
                    </div>
                  })
                }
             </div>            
        </section>

        <section>
            {/* get started with these popularcourses */}
            <div>show popular courses</div>
            <img />
        </section>

        <section>
            <div>reviews</div>
            {/* reviews from enrolled students */}
        </section>
    </>
  )
}

export default HomePage