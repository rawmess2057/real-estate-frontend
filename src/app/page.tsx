import BlogsPage from "@/components/blogs/page";
import { AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import FaqPage from "@/components/questions/page";
import ReviewPage from "@/components/reviews/page";
import BannerPage from "@/components/banner/page";
import MobileAppPage from "@/components/mobileApp/page";
import RentPropertypage from "@/components/rent-property/page";

import { EB_Garamond } from "next/font/google";
import PropertiesPage from "./properties/page";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export default function Home() {
  
  return (
     <main className="m-0 p-0 ">   
      <BannerPage/> 
      <ReviewPage/>
      <BlogsPage/>

     <section className="mb-16 mt-40">
       <div className="w-298 h-93 mx-auto bg-[#4954A4] relative p-8">
         <div className="w-146">
           <h1 className={`${ebGaramond.className} font-medium text-white text-[32px]`}>
             Download our Mobile App
           </h1>
           <p className="font-normal text-base leading-normal text-white pt-4 ">
             Get our app and explore thousands of properties at your fingertips. 
             Never miss out on a great deal with instant notifications. Save your 
             favorite properties, compare options effortlessly, and schedule visits
             in just a few taps—making your property search faster, easier, and
             stress-free.
           </p>
           <div className="flex items-center gap-8 py-8">
             <img src="/images/google-play.svg" alt="" />
             <img src="/images/appleplay.svg" alt="" />
           </div>
         </div>
     
         <div className="absolute left-210 bottom-4">
          {/* background */}
           <div className="relative z-10">
             <img src="/images/iphone.svg" alt="" />
             
             {/* screenshot */}
             <div className="absolute bottom-0 z-20 p-2">
               <img className="rounded-2xl w-62.5 h-104 relative" 
               src="/images/screenshot.png" alt="" />
               {/* iphone top */}
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
     </section>

     <section className="bg-[#FAFAFA] py-8 px-18">
      <div className=" grid grid-cols-2">
        <div>
        <h1 className={`${ebGaramond.className} font-semibold text-[24px] pr-40`}>
          READY TO SELL OR RENT YOUR PROPERTY?
        </h1>
        <p className="text-[#717171] mt-4 mb-5">
          List your property on Nepal's most trusted real estate platform
           and connect with thousands of genuine buyers and tenants.
        </p>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <img src="/images/calculator.svg" alt="" />
            <p className="font-medium text-[16px] ">
              Free Listings</p>
          </div>
          <div className="flex items-center gap-2">
            <img src="/images/max-reach.svg" alt="" />
            <p className="font-medium text-[16px] ">
              Maximum Reach</p>
          </div>
          <div className="flex items-center gap-2">
            <img src="/images/verified-buyers.svg" alt="" />
            <p className="font-medium text-[16px] ">
              Verified Buyers</p>
          </div>
        </div>
        </div>

        <div className=" flex flex-col items-center gap-y-2 justify-center md:pl-40">
          <Button className="px-4 py-2 bg-[#7171FF] text-white gap-2">
            Post Your Property
            <span className="text-2xl inline-block transform transition-transform duration-200 hover:translate-x-1 pl-2">
             → 
            </span>
            </Button>
          <p className="text-[12px] text-[#717171]">
            No hidden charges. Reach genuine buyers instantly.
          </p>
        </div>
      </div>
     </section>

     <FaqPage/>
    
    </main>
  );
}
