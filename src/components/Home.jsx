import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import heroimage from "../assets/heroiamge1.png";
import { useTypewriter, Cursor } from 'react-simple-typewriter'


function Home() {
  const [text] = useTypewriter({
      words: ['Frontend developer', 'Graphic designer', 'UI/UX designer'],
      loop: {},
      typeSpeed: 90,
      deleteSpeed: 60,
  });

  return (
    <div
      name="home"
      className=" h-screen w-full bg-gradient-to-b from-black to-gray-700"
    >
      <div className=" max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4  text-white md:flex-row">
        <div className=" flex flex-col justify-center h-full mr-6 mx-auto">
          <h2 className=" text-4xl sm:text-6xl font-bold text-white">
            Hi! I'm <span className=" bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 bg-clip-text text-transparent" >Pratheek</span>
          </h2>
          <div className="whatwedo flex items-center gap-2 mt-4">
            <h3>-</h3>
            <h2 className="subtitle text-2xl text-white">I'm a <span className=" text-pink-300 font-bold capitalize">  {text} </span><span className=""><Cursor cursorStyle='|' /></span></h2>
          </div>
          <p className=" text-gray-400 py-4 max-w-md">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit,
            quasi!
          </p>

          <div className="">
            <button className=" group text-white w-fit px-6 py-3 my-2 flex  items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500  cursor-pointer">
              Portfolio
              <span className=" ml-1 group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight size={20} />
              </span>
            </button>
          </div>
        </div>

        <div className="">
          <img
            src={heroimage}
            alt=" hero img"
            className=" rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
