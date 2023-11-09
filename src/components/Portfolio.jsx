import React from "react";
import port1 from "../assets/port1.png";
import port2 from "../assets/port2.png";
import port3 from "../assets/port3.png";
import port4 from "../assets/port4.png";
import port5 from "../assets/port5.png";

function Portfolio() {
  return (
    <div name="portfolio" className="text-white md:h-screen w-full bg-gradient-to-b from-black to-gray-700">
      <div className=" max-w-screen-lg p4 mx-auto flex flex-col justify-center w-full h-full">
        {/* header for portfolio */}
        <div className=" ">
          <p className="">Portfolio</p>
          <p className="">check out some of my works !</p>
        </div>
        {/* cards */}
        <div className="">
          <div className="">
            <img src={port1} alt="" />
            {/* <div>
              <button className=""></button>
              <button className=""></button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
