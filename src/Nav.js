import React from 'react'

function Nav() {
  return (
    <nav className=" flex justify-between font-bold  ">
    <img className="w-32 h-8 lg:w-36 xl:w-44 xl:h-10 " src='/logo.png' alt='logo'></img>
    <ul className=" py-1 space-x-1 px-3 md:text-sm hidden lg:flex lg:space-x-7 md:space-x-4 xl:space-x-10 xl:text-base">
      <li className="cursor-pointer">PLAY</li>
      <li className="cursor-pointer">SPONSOR</li>
      <li className="cursor-pointer">DISTRIBUTE</li>
      <li className="cursor-pointer">RETAIL</li>
      <li className="cursor-pointer">ABOUT</li>
      <li className="cursor-pointer">COMMUNITY</li>
    </ul>
    <div className=" py-1 flex space-x-4 md:text-xs xl:text-base ">
    <button className="px-1 sm:px-2 lg:text-base sm:text-lg text-sm py-1 border-2 rounded-full text-red hover:text-black-50 font-bold border-red hover:border-black-50">CREATE GAME</button>
    <button className="px-1 sm:px-2 lg:text-base sm:text-lg text-sm py-1 border-2 rounded-full text-white bg-blue-50  hover:bg-white font-bold focus:ring-4 hover:border-black-100 hover:text-black-100 ">CONNECT WALLET</button></div>
  </nav>
  )
}

export default Nav