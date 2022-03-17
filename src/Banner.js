import React from 'react'

function Banner() {
  return (
    <div className='flex  lg:flex-nowrap  bg-yellow rounded-2xl flex-wrap items-center mt-7 '>
           <div><img className=" hidden py-6 w-12 h-144 lg:flex lg:w-36" src="side.png" alt="banner"></img></div>
           <div className="pt-5 text-justify mx-10 lg:pl-0" >
           <p className="font-bold text-2xl lg:text-3xl">Decentralized lottery</p>
           <p className="text-xl font-medium py-1 lg:text-2xl ">for the people, by the people</p>
           <p className="text-base font-medium py-4 lg:py-9">Lottery of the People is a distributed system which allows anyone to create, distribute, buy or sell digital NFT lottery tickets.</p>
           <button className="border font-bold px-11 lg:px-14 py-1 rounded-full text-white bg-red border-red hover:bg-white hover:text-black-100 hover:border-white">
           PLAY AND EARN
           </button></div>
           <div><img className=" pt-10  lg:pt-0" src="map.png" alt="banner"></img></div>
         </div>
  )
}

export default Banner