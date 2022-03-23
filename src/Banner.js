import React from 'react'

function Banner() {
  return (
    <div className='flex  lg:flex-nowrap  bg-yellow rounded-2xl flex-wrap items-center mt-7 '>
           <div><img className=" hidden py-6 w-12 h-144 lg:flex lg:w-36" src="side.png" alt="banner"></img></div>
           <div className="pt-5 text-justify mx-10 lg:pl-0" >
           <p className="font-bold text-2xl lg:text-ft11">Decentralized lottery</p>
           <p className="text-xl font-semibold  lg:text-ft9 ">for the people, by the people</p>
           <p className="text-base font-semibold py-4 lg:py-9 lg:text-ft6">Lottery of the People is a distributed system which allows anyone to create, distribute, buy or sell digital NFT lottery tickets.</p>
           <button className="border font-semibold px-11 lg:text-ft6 lg:px-14 py-1 rounded-full text-white bg-red border-red hover:bg-white hover:text-black-100 hover:border-white">
           PLAY AND EARN
           </button></div>
           <div><img className=" pt-10  lg:pt-0" src="map.png" alt="banner"></img></div>
         </div>
  )
}

export default Banner