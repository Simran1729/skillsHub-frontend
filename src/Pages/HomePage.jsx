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
import instructor from "../assets/homePage/instructor.png"
import Footer from '../components/Footer';

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

        <section className = "font-poppins flex-col justify-center text-my-dark-blue text-center py-10">
              <div>
                <p className = "text-5xl font-bold py-8">Why Students Love skillsHub</p>
                {/* <div className = "bg-my-green h-2 w-1/12 mx-auto my-6"></div> */}
                <p className = "text-2xl w-1/3 mx-auto">Whether it's a first brush on canvas or the last frame in an animation, skillsHub is here to support you on every step of your creative journey.</p>
              </div>

              <div className = "py-20">
                <p className = "text-4xl font-semibold w-2/5 mx-auto">"I come to skillsHub for the curation and class quality. That's really worth the cost of membership to me."</p>
                <p className = "text-2xl font-bold py-10">-Jason R, skillsHub student</p>
                <div className = "bg-my-green h-2 w-1/12 mx-auto"></div>
              </div>

              <div> 
                <p className = "text-4xl font-semibold w-2/5 mx-auto">"I have an understanding that, even if the work is not perfect, it's a work in progress. And the reason why I'm on skillsHub is to develop a skill. I feel that it's a safe space."</p>
                <p className = "text-2xl font-bold py-10">-DeVeor R, skillsHub student</p>
                <div className = "bg-my-green h-2 w-1/12 mx-auto"></div>
              </div>
        </section>

        <section className = "w-full flex bg-black font-poppins text-white">
                <div className = "mx-auto px-14">
                    <p className = "text-5xl font-bold py-7">Become an Instructor</p>
                    <p className = "text-2xl w-4/5 leading-relaxed">Unleash your teaching potential! Become an instructor on 
                    Skillshub and monetize your knowledge. Whether you're a seasoned 
                    educator or a passionate expert, we provide the tools and support 
                    to help you succeed in the online learning space.</p>
                    <div className = "py-7">
                    <button className= "font-semibold px-4 bg-my-green py-2 text-xl rounded-md mr-3 text-my-dark-blue">Sign up</button>
                    </div>
                </div>
                
              
                <div>
                  <img src={instructor} className = "object-contain" />
                </div>
        </section>


        <Footer/>

    </>
  )
}

export default HomePage