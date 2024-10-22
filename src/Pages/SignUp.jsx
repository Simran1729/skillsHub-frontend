import React from 'react'
import { Link } from 'react-router-dom'

function SignUp() {
  return (
    <>
        <div className = "lg:flex md:flex justify-center items-center font-poppins">
          
          <section className = "bg-my-dark-blue text-white lg:w-2/6 md:w-2/6 font-semibold py-24 lg:my-20 md:my-20 -my-9">
            <div className = "text-2xl lg:text-3xl w-2/5 ml-16">
              Join Skillshare for Free
              <div className = "bg-my-green h-2 rounded-md my-5"></div>
            </div>

            <div className = "text-md lg:text-xl w-3/5 ml-16 leading-relaxed">
            Explore your creativity with thousands of inspiring classes in design,
            illustration, photography, and more.
            </div>
          </section>

          <section className = "bg-white text-black lg:w-4/6 md:w-4/6 pt-8">
          <form className= "px-10 pt-5">

              <div className = "flex">
                <div className = "flex flex-col gap-1">
                  <label htmlFor = "firstName">First Name<sup className = "text-red-500">*</sup></label>
                  <input type= "text" id='firstName' name = "firstName" required placeholder = "First Name" className = "outline-none py-1 border-b-[1px] border-black"></input>
                </div>

                <div className = "flex flex-col gap-1 pb-4 px-14">
                  <label htmlFor = "lastName">Last Name<sup className = "text-red-500">*</sup></label>
                  <input type= "text" id='lastName' name = "lastName" required placeholder = "Last Name" className = "outline-none py-1 border-b-[1px] border-black"></input>
                </div>
              </div>

              <div className = "flex flex-col gap-1 pb-4">
                <label htmlFor = "email">Email<sup className = "text-red-500">*</sup></label>
                <input type= "email" id='email' name = "email" required placeholder = "Email" className = "outline-none py-1 border-b-[1px] border-black w-1/4"></input>
              </div>

              <div className = "flex flex-col gap-1 pb-4">
                <label htmlFor = "password">Password<sup className = "text-red-500">*</sup></label>
                <input type= "password" id='password' name = "password" required placeholder = "Password" className = "outline-none py-1 border-b-[1px] border-black w-1/4"></input>
              </div>

              <div className = "flex flex-col gap-1 pb-4">
                <label htmlFor = "confirmPassword">Confirm Password<sup className = "text-red-500">*</sup></label>
                <input type= "password" id='confirmPassword' name = "confirmPassword" required placeholder = "Confirm Password" className = "outline-none py-1 border-b-[1px] border-black w-1/4"></input>
              </div>

              <div className="flex flex-col gap-1 pb-4">
                <label htmlFor="accountType">
                  Account Type<sup className="text-red-500">*</sup>
                </label>
                <div className="flex gap-2 py-1">
                    <label>
                        <input
                          type="radio"
                          id="accountTypeStudent"
                          name="accountType"
                          value="student"
                          required
                          className="mr-1"
                        />
                        Student
                    </label>
                    <label>
                        <input
                          type="radio"
                          id="accountTypeInstructor"
                          name="accountType"
                          value="instructor"
                          required
                          className="mr-1"
                        />
                        Instructor
                    </label>
                </div>
            </div>

            {/* starts here */}

              <div className="flex flex-col gap-1 pb-4">
                <label htmlFor="gender">
                  Gender (for your profile avatar)<sup className="text-red-500">*</sup>
                </label>
                  <div className=" flex gap-2 py-1">
                    <label>
                      <input
                        type="radio"
                        id="genderMale"
                        name="gender"
                        value="male"
                        required
                        className="mr-1"
                      />
                      Male
                    </label>
                    <label>
                      <input
                        type="radio"
                        id="genderFemale"
                        name="gender"
                        value="female"
                        required
                        className="mr-1"
                      />
                      Female
                    </label>
                    <label>
                      <input
                        type="radio"
                        id="genderOther"
                        name="gender"
                        value="other"
                        required
                        className="mr-1"
                      />
                      Others
                    </label>
                  </div>
            </div>
           {/*ends here  */}

              <div className = "bg-black h-[1px] w-full"></div>
              <div>
                <p className = "text-xs py-2 px-2 text-left">
                  By signing up you agree to Skillshare's Terms of Service and Privacy Policy, 
                  and agree to receive marketing communications from Skillshare at the email 
                  address provided. This page is protected by reCAPTCHA and is subject to Google's 
                  Terms of Service and Privacy Policy.
                </p>
              </div>

              <div className = "pt-2 lg:w-1/4 items-center">
              <button className = "py-2 bg-my-green text-my-dark-blue font-semibold w-full text-xl rounded-md hover:scale-105 transition-all duration-200">Sign Up</button>
              </div>

          </form>

            <div className = "flex px-10 py-4">
              <p>Already a member?</p>
              <p className = "pl-1 underline text-my-blue"> <Link to = "/login">Login</Link> </p>
            </div>
          </section>

        </div>
    </>
  )
}

export default SignUp