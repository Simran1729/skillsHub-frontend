import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <>
        <div className = "lg:flex md:flex justify-center items-center font-poppins">
          
          <section className = "bg-my-dark-blue text-white lg:w-2/6 md:w-2/6 font-semibold py-24 lg:my-20 md:my-20 -my-9">
            <div className = "text-2xl lg:text-3xl w-2/5 ml-16">
              Welcome Back to SkillsHub
              <div className = "bg-my-green h-2 rounded-md my-5"></div>
            </div>

            <div className = "text-md lg:text-xl w-3/5 ml-16 leading-relaxed">
            Login to continue to your account.
            </div>
          </section>

          <section className = "bg-white text-black lg:w-4/6 md:w-4/6 pt-8">
          <form className= "px-10 py-5">

              <div className = "flex flex-col gap-1 pb-4">
                <label htmlFor = "email">Email<sup className = "text-red-500">*</sup></label>
                <input type= "email" id='email' name = "email" required placeholder = "Email" className = "outline-none py-1 border-b-[1px] border-black w-1/4"></input>
              </div>

              <div className = "flex flex-col gap-1 pb-4">
                <label htmlFor = "password">Password<sup className = "text-red-500">*</sup></label>
                <input type= "password" id='password' name = "password" required placeholder = "Password" className = "outline-none py-1 border-b-[1px] border-black w-1/4"></input>
              </div>

              <div className = "py-2 lg:w-1/4 items-center">
              <button className = "py-2 bg-my-green text-my-dark-blue font-semibold w-full text-xl rounded-md hover:scale-105 transition-all duration-200">Login</button>
              </div>

              <div className = "flex">
                <p>Not a member?</p>
                <p className = "pl-1 underline text-my-blue hover:cursor-pointer">  <Link to="/signUp">Sign Up</Link></p>
              </div>

          </form>
          </section>
            
        </div>
    </>
  )
}

export default Login