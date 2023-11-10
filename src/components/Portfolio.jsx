import React from "react";
import port1 from "../assets/port1.png";
import port2 from "../assets/port2.png";
import port3 from "../assets/port3.png";
import port4 from "../assets/port4.png";
import port5 from "../assets/port5.png";
import port6 from "../assets/port6.png";

function Portfolio() {

  const portimages =  [
    {
      id:1,
      src: port1
    },
    {
      id:2,
      src: port2
    },
    {
      id:3,
      src: port3
    },
    {
      id:4,
      src: port4
    },
    {
      id:5,
      src: port5
    },
    {
      id:6,
      src: port6
    }

  ]
  return (
    <div name="portfolio" className="text-white  md:h-screen items-center w-full bg-gradient-to-b from-black to-gray-700">
      <div className=" max-w-screen-lg p-4 py-4  mx-auto flex flex-col justify-center  w-full h-full">
        {/* header for portfolio */}
        <div className=" pb-6 ">
          <p className=" text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
          <p className=" py-4">check out some of my works !</p>
        </div>
        {/* cards */}
          <div  className=" grid sm:grid-cols-2 md:grid-cols-3 gap-3 px-12 sm:p-1 ">
        {portimages.map(({ id, src})=> (
            
          <div key={id} className=" shadow-md shadow-gray-500 rounded-lg ">
            <img src={src} alt="" className=" rounded-md duration-200 hover:scale-105" />
            <div className=" flex items-center justify-center">
              <button className=" w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Demo</button>
              <button className=" w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">code</button>
            </div>
          </div>
       
          ))}
         </div>
      </div>
    </div>
  );
}

export default Portfolio;
