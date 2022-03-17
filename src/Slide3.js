import React from 'react'

function Slide3() {
  return (
    <div className="flex space-x-2 flex-row overflow-x-auto ">
           <div className='flex flex-col items-center'>
             <img className='w-16' src='p1.png' alt=''></img>
             <p className="font-semibold text-lg py-3">Step 1</p>
             <p className=" w-52 text-sm">Game designer creates a game and posts it for Sponsorship</p>

           </div>
           <div className='flex flex-col items-center'>
             <img className='w-16' src='p2.png' alt=''></img>
             <p className="font-semibold text-lg py-3">Step 2</p>
             <p className=" w-52 text-sm">Distributor signs up Retailers</p>

           </div>
           <div className='flex flex-col items-center '>
             <img className='w-16' src='p3.png' alt=''></img>
             <p className="font-semibold text-lg py-3">Step 3</p>
             <p className=" w-52 text-sm">Retailer sells tickets and games to Customers</p>

           </div>
           <div className='flex flex-col items-center'>
             <img className='w-16' src='p4.png' alt=''></img>
             <p className="font-semibold text-lg py-3">Step 4</p>
             <p className=" w-52 text-sm">Retailer sells tickets and games to Customers</p>

           </div>
           <div className='flex flex-col items-center'>
             <img className='w-16' src='p5.png' alt=''></img>
             <p className="font-semibold text-lg py-3">Step 5</p>
             <p className=" w-52 text-sm">Customer selects a game to play and makes payment in crypto or cash to the Retailer</p>

           </div>
           <div className='flex flex-col items-center '>
             <img className='w-16' src='p6.png' alt=''></img>
             <p className="font-semibold text-lg py-3">Step 6</p>
             <p className=" w-52 text-sm">Everyone involved in the sale, get the commission and the winner gets the prize.</p>

           </div>
           </div>
  )
}

export default Slide3