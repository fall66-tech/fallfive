import React from 'react'
import { Link } from "react-scroll";

function About() {
  return (
    <div name="about" className=' w-full h-screen bg-gradient-to-b from-gray-700 via-gray-700 to-black text-white'>
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className=" pb-8">
            <p className=" text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>

        <p className=" text-xl mt-14"> Hello! 👋 I'm Pratheek Bayari, a passionate front-end developer specializing in React.js. With a keen eye for detail and a commitment to creating engaging user experiences, I bring 1 of hands-on experience in crafting robust and scalable web applications.</p>
        
        <div className=" mt-5">
            <Link to="contact" smooth duration={500} className="  text-white w-fit px-6 py-3 my-2 flex  items-center rounded-md bg-gradient-to-r from-pink-500 to-purple-500  cursor-pointer active:scale-90 duration-200">
              Contact Me
              
            </Link>
          </div>

      </div>
    </div>
  )
}

export default About
