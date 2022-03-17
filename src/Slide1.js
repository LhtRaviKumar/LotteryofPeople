import React from 'react'

function Slide1() {
  return (
    <div className="flex overflow-x-auto scroll-smooth space-x-10 lg:space-x-6">
           <div className="">
             <img src='g1.png' className="max-w-none h-40 lg:w-46 lg:h-26"alt=''></img>
             <div className="flex py-2 justify-between lg:text-xs">
               <div className='flex'><p className="font-semibold px-1 ">Big Win</p>
               <button className="bg-red flex items-center px-1 font-semibold  text-white rounded-lg">4.7<img className="w-3" src="star.png "alt=''></img></button></div>
              <div><p className=" text-blue-50 font-bold">$5.00</p></div> 
               </div>
           </div>
           <div className="">
             <img src='g2.png' className="max-w-none h-40 lg:w-46 lg:h-26"alt=''></img>
             <div className="flex py-2 justify-between lg:text-xs">
               <div className='flex'><p className="font-semibold px-1 ">Super Crossword</p>
               <button className="bg-red flex items-center px-1 font-semibold  text-white rounded-lg">4.3<img className="w-3" src="star.png"alt=''></img></button></div>
              <div><p className=" text-blue-50 font-bold">$5.00</p></div> 
               </div>
           </div>
           <div className="">
             <img src='g3.png' className="max-w-none h-40 lg:w-46 lg:h-26"alt=''></img>
             <div className="flex py-2 justify-between lg:text-xs">
               <div className='flex'><p className="font-semibold px-1">Scratch and Win</p>
               <button className="bg-red flex items-center px-1 font-semibold  text-white rounded-lg">4.7<img className="w-3" src="star.png"alt=''></img></button></div>
              <div><p className=" text-blue-50 font-bold">$10.00</p></div> 
               </div>
           </div>
           <div className="">
             <img src='g4.png' className="max-w-none h-40 lg:w-46 lg:h-26"alt=''></img>
             <div className="flex py-2 justify-between lg:text-xs">
               <div className='flex'><p className="font-semibold px-1">Diamond Lotto</p>
               <button className="bg-red flex items-center px-1 font-semibold  text-white rounded-lg">4.0<img className="w-3" src="star.png"alt=''></img></button></div>
              <div><p className=" text-blue-50 font-bold">$2.00</p></div> 
               </div>
           </div>
           <div className="">
             <img src='g5.png' className="max-w-none h-40 lg:w-46 lg:h-26"alt=''></img>
             <div className="flex py-2 justify-between lg:text-xs">
               <div className='flex'><p className="font-semibold px-1">Royal Slots</p>
               <button className="bg-red flex items-center px-1 font-semibold  text-white rounded-lg">4.1<img className="w-3" src="star.png"alt=''></img></button></div>
              <div><p className=" text-blue-50 font-bold">$7.00</p></div> 
               </div>
           </div>
           <div className="">
             <img src='g6.png' className="max-w-none h-40 lg:w-46 lg:h-26"alt=''></img>
             <div className="flex py-2 justify-between lg:text-xs">
               <div className='flex'><p className="font-semibold px-1 lg:te">Lucky Hunt</p>
               <button className="bg-red flex items-center px-1 font-semibold  text-white rounded-lg">4.2<img className="w-3" src="star.png"alt=''></img></button></div>
              <div><p className=" text-blue-50 font-bold">$5.00</p></div> 
               </div>
           </div>
         </div>
  )
}

export default Slide1