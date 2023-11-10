import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import '../App.css'

function Navbar() {
 
  const [nav , setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    
    {
      id: 4,
      link: "contact",
    },
  ];

  return (
    <div className=" flex justify-between items-center w-full h-[80px] text-white bg-gradient-to-b from-black fixed px-4">
      <div>
        <h1 className=" font-signature text-2xl font-bold bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 bg-clip-text text-transparent " id="fall5">Fall 5 designs</h1>
      </div>

      <ul className=" hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className=" px-4 cursor-pointer capitalize font-medium text-gray-300 hover:scale-110 hover:text-blue-400 duration-200"
          >
            <Link to={link} smooth duration={500}>{link}</Link>
          </li>
        ))}
      </ul>

      <div onClick={() => setNav(!nav)} className=" cursor-pointer pr-4 z-10 text-gray-300 md:hidden">
        { nav ? <FaTimes size={25} /> : <FaBars size={25} />}
      </div>

      {nav && (
        <ul className=" flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-700 text-gray-300">
      {links.map(({ id, link }) => (
          <li
            key={id}
            className=" px-4 cursor-pointer capitalize py-6 text-4xl hover:scale-105 duration-200"
          >
           <Link onClick={()=> setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
          </li>
        ))}
        
      </ul>
      )}

      
    </div>
  );
}

export default Navbar;
