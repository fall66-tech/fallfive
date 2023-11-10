import React from 'react'

function Contact() {
  return (
    <div name='contact' className=' w-full h-screen bg-gradient-to-b from-gray-700 to-black p-4 text-white'>
      <div className=" flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className=" pb-8">
            <p className=" text-4xl font-bold inline border-b-4 border-gray-500">contact</p>
            <p className=" py-6"> submit form below to conatct me</p>
        </div>

        <div className=' flex justify-center items-center'>
            <form action=" https://getform.io/f/9849c35f-b73f-4cb6-a1fb-469cb71b8296" method='POST' className=' flex flex-col w-full md:w-1/2'>
                <input className=' p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' type="text" name='name' placeholder='Enter your name' />
                <input className=' p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none' type="text" name='email' placeholder='Enter your email' />
                <textarea name="message"  rows="10" placeholder='Enter your message' className=' p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
                <button className=' text-white bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 m-8 mx-auto flex items-center rounded-md hover:scale-105 duration-300'> Submit</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
