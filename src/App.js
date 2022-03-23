import './App.css';
import Banner from './Banner';
import Nav from './Nav';
import Slide1 from './Slide1';
import Slide2 from './Slide2';
import Slide3 from './Slide3';

function App() {
  return (
    <div className="App m-5 font-poppins ">
       <header>
        <Nav />
       </header>
       <main>
         <Banner />
         <div className="flex justify-between text-ft8 py-9 font-semibold cursor-pointer"><p>Top Games</p>
         <p className="text-blue-50 flex">See all<img src='arrow.png' className="w-5 h-6 mx-1" alt=''></img></p>
         </div>
         <Slide1 />

         <div className="flex py-9 text-ft8 font-semibold cursor-pointer"><p>Total Money Earned till date</p></div>
         <Slide2 />

         <div className="flex py-9 text-ft8 font-semibold cursor-pointer"><p>Join and Earn</p></div>
         <div className="flex flex-wrap lg:px-8">
           <div className="flex bg-grey w-full h-72 lg:w-45 lg:mx-2 my-1 items-center">
             <div className='px-3 text-justify space-y-7 '>
               <p className=' font-semibold text-ft6 pt-3'>For Game Designers</p>
               <p className='text-ft5 font-normal mr-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu libero in erat consequat fermentum quis vel velit. Nulla sit amet tortor nunc. Praesent vel interdum diam.</p>
               <button className="px-8 py-1 border-2 rounded-full text-blue-50 hover:text-black-100 font-semibold text-ft3 border-blue-50 hover:border-black-100">CREATE GAME</button>
             </div>
             <div className='w-96 mx-14' > <img className='' src="game1.png" alt=''></img></div>

           </div>

           <div className="flex bg-grey w-full h-72 my-1 lg:w-45 lg:mx-2 items-center">
           <div className='px-3 text-justify space-y-7'>
               <p className=' font-semibold text-ft6  pt-3'>For Lottery Sponsors</p>
               <p className='text-ft5 font-normal mr-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu libero in erat consequat fermentum quis vel velit. Nulla sit amet tortor nunc. Praesent vel interdum diam.</p>
               <button className="px-8 py-1 border-2 rounded-full text-blue-50 hover:text-black-100 font-semibold text-ft3 border-blue-50 hover:border-black-100">SPONSOR GAME</button>
             </div>
             <div className='w-96 mx-14'  > <img className='' src="game2.png" alt=''></img></div>

           </div>

           <div className="flex bg-grey w-full h-72 lg:w-45 lg:mx-2 my-1 items-center">
           <div className='px-3 text-justify space-y-7'>
               <p className='font-semibold text-ft6  pt-3'>For Distributors</p>
               <p className='text-ft5 font-normal mr-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu libero in erat consequat fermentum quis vel velit. Nulla sit amet tortor nunc. Praesent vel interdum diam.</p>
               <button className="px-8 py-1 border-2 rounded-full text-blue-50 hover:text-black-100 font-semibold text-ft3 border-blue-50 hover:border-black-100">BECOME A DISTRIBUTOR</button>
             </div>
             <div className='w-96 mx-14' > <img src="game3.png" alt=''></img></div>

           </div>

           <div className="flex bg-grey w-full h-72 lg:w-45 lg:mx-2 my-1 items-center">
           <div className='px-3 text-justify space-y-7'>
               <p className=' font-semibold text-ft6  pt-3'>For Retailers</p>
               <p className='text-ft5 font-normal mr-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu libero in erat consequat fermentum quis vel velit. Nulla sit amet tortor nunc. Praesent vel interdum diam.</p>
               <button className="px-8 py-1 border-2 rounded-full text-blue-50 hover:text-black-100 font-semibold text-ft3 border-blue-50 hover:border-black-100">BECOME A RETAILER</button>
             </div>
             <div className='w-96 mx-14' > <img src="game4.png" alt=''></img></div>

           </div>

         </div>


         <div className="flex py-9 text-ft8 font-semibold cursor-pointer"><p>How Lottery of the People works</p></div>
         < Slide3 />
           <footer className='bottom-0 pt-8'>
             <div className='bg-blue-100 w-full h-full flex flex-row text-white flex-wrap justify-between'>
               <div>
                 <img src='logow.png' className='w-44 m-11' alt=''></img>
                 <p className='m-8 lg:w-80 xl:w-96'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu libero in erat consequat fermentum quis vel velit. Nulla sit amet tortor nunc. Praesent vel interdum diam.consectetur adipiscing elit. Maecenas eu libero in erat consequat fermentum quis vel velit. Nulla sit amet tortor nunc. Praesent vel interdum diam.
                 </p>
               </div>
               <div className='px-10 py-2 lg:pt-28 mx-auto'>
                 <ul className='space-y-4'>
                   <li>Play</li>
                   <li>Create</li>
                   <li>Sponsor</li>
                   <li>Distribute</li>
                   <li>Retail</li>
                 </ul>
               </div>

               <div className='px-10 py-2 lg:pt-28 mx-auto'>
                 <ul className='space-y-4'>
                   <li>About</li>
                   <li>Developers Documentation</li>
                   <li>Privacy Policy</li>
                   <li>Terms of use</li>
                   <li>Help</li>
                 </ul>
               </div>

               <div className='px-10 py-2 lg:pt-28 mx-auto'>
                 <ul className='space-y-4'>
                   <li>Community</li>
                   <li>Twitter</li>
                   <li>Facebook</li>
                   <li>Reddit</li>
                   <li>Telegram</li>
                 </ul>
               </div>

             </div>
             <hr className=''></hr>
             <div className='bg-blue-100 text-center text-white h-11 py-8'><p className=''>Lottery of People @2022</p></div>
           </footer>
       </main>
    </div>
  );
}

export default App;
