import { ebGaramond } from '@/lib/fonts'
import React from 'react'

function MobileAppPage() {
  return (
    <div className="mb-16 mt-40">
       <div className="w-full max-w-298 h-93 mx-auto bg-[#4954A4] relative p-8">
         <div className="w-full max-w-146 sm:block ">
           <h1 className={`${ebGaramond.className} w-10 sm:w-full font-medium text-white text-[32px]`}>
             Download our Mobile App
           </h1>
           <p className="font-normal text-base leading-normal text-white pt-4 sm:block hidden">
             Get our app and explore thousands of properties at your fingertips. 
             Never miss out on a great deal with instant notifications. Save your 
             favorite properties, compare options effortlessly, and schedule visits
             in just a few taps—making your property search faster, easier, and
             stress-free.
           </p>
           <div className="flex sm:flex-row flex-col sm:items-center items-start gap-8 py-8">
             <img src="/images/google-play.svg" alt="" />
             <img src="/images/appleplay.svg" alt="" />
           </div>
         </div>
     
         <div className="absolute md:right-16 right-2 bottom-4 ">
          
           <div className="relative z-10">
             <img src="/images/iphone.svg" alt="" />
             
             
             <div className="absolute right-0 bottom-0 z-20 p-2">
               <img className="rounded-2xl w-62.5 h-104 relative" 
               src="/images/screenshot.png" alt="" />
               
              <div className="absolute left-2 -top-4 7-30">
               <div className="h-10.75 w-62.5 bg-white rounded-t-3xl">
                <div className="flex items-center justify-between">
                 <div>
                  <p className="font-bold pt-2 pl-4">9:41</p>
                 </div>
                <div className="flex items-center gap-2 pr-4">
                  <img src="/images/network.svg" alt="" />
                  <img src="/images/wifi.svg" alt="" />
                  <img src="/images/battery.svg" alt="" />
                </div>
                </div>
              </div>
              </div>

              <div className=" bg-black absolute bottom-5 left-1/2 -translate-x-1/2 rounded-4xl">
                <img src="/images/grabber.svg" alt="" className="filter brightness-0 " />
              </div>
             
             </div>
           </div>
         </div>
       </div>
    </div>
  )
}

export default MobileAppPage