import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { ebGaramond } from "@/lib/fonts";
import { Button } from '../ui/button';

function BlogsPage() {
  return (
    <div className='bg-[#FAFAFA] mt-20 mb-6 pt-12 pb-28'>
        <h1 className={`${ebGaramond.className} font-medium text-[32px] text-[#434343] flex justify-center mb-8`}>
            Blogs & Articles
        </h1>

        <div className='container mx-auto grid grid-cols-4 gap-8 px-2'>
        <Card className="w-78.5 h-104 px-2 py-2 shadow-[0px_4px_5px_0px_#0000001F]">
          <img
            src="/images/blog1.jpg"
            alt="property"
            className="w-full h-38 object-cover rounded-xl pt-2 pb-0 mb-0"
          />

          <div className="flex justify-start">
          <button className="inline-block px-3 py-1 font-medium text-[12px] bg-[#7171FF] rounded-4xl text-white">
            Investment Tips
          </button>
          </div>
          <CardHeader className='p-0'>
            
            <h1 className={`${ebGaramond.className} font-medium text-[24px] text-black`}>
              Top 10 Locations to Buy Property in Kathmandu Valley
            </h1>   
          </CardHeader>
        
          <CardContent className='gap-4 p-0'>
            <p className='text-[#5D5D5D] text-[16px] py-0'>
              Discover the best neighborhoods for property investment in the capital city</p>
            <div className='flex items-center pt-5'> 
            <div className='flex items-center mr-8'>
              <img src="/images/calanderVector.svg" alt=""  />
              <p className='text-[12px] text-[#5D5D5D] font-medium pl-2'>Jan 15, 2024</p>
            </div>  
            <div className='flex items-center px-2'>
              <img src="/images/clock.svg" alt=""  />
              <p className='text-[12px] text-[#5D5D5D] font-medium pl-2'>5 min read</p>
            </div> 
            </div>        
          </CardContent>
        </Card>

        <Card className="w-78.5 h-104 px-2 py-2 shadow-[0px_4px_5px_0px_#0000001F]">
          <img
            src="/images/blog1.jpg"
            alt="property"
            className="w-full h-38 object-cover rounded-xl pt-2 pb-0 mb-0"
          />

          <div className="flex justify-start">
          <button className="inline-block px-3 py-1 font-medium text-[12px] bg-[#7171FF] rounded-4xl text-white">
            Investment Tips
          </button>
          </div>
          <CardHeader className='p-0'>
            
            <h1 className={`${ebGaramond.className} font-medium text-[24px] text-black`}>
              Top 10 Locations to Buy Property in Kathmandu Valley
            </h1>   
          </CardHeader>
        
          <CardContent className='gap-4 p-0'>
            <p className='text-[#5D5D5D] text-[16px] py-0'>
              Discover the best neighborhoods for property investment in the capital city</p>
            <div className='flex items-center pt-5'> 
            <div className='flex items-center mr-8'>
              <img src="/images/calanderVector.svg" alt=""  />
              <p className='text-[12px] text-[#5D5D5D] font-medium pl-2'>Jan 15, 2024</p>
            </div>  
            <div className='flex items-center px-2'>
              <img src="/images/clock.svg" alt=""  />
              <p className='text-[12px] text-[#5D5D5D] font-medium pl-2'>5 min read</p>
            </div> 
            </div>        
          </CardContent>
        </Card>

        <Card className="w-78.5 h-104 px-2 py-2 shadow-[0px_4px_5px_0px_#0000001F]">
          <img
            src="/images/blog1.jpg"
            alt="property"
            className="w-full h-38 object-cover rounded-xl pt-2 pb-0 mb-0"
          />

          <div className="flex justify-start">
          <button className="inline-block px-3 py-1 font-medium text-[12px] bg-[#7171FF] rounded-4xl text-white">
            Investment Tips
          </button>
          </div>
          <CardHeader className='p-0'>
            
            <h1 className={`${ebGaramond.className} font-medium text-[24px] text-black`}>
              Top 10 Locations to Buy Property in Kathmandu Valley
            </h1>   
          </CardHeader>
        
          <CardContent className='gap-4 p-0'>
            <p className='text-[#5D5D5D] text-[16px] py-0'>
              Discover the best neighborhoods for property investment in the capital city</p>
            <div className='flex items-center pt-5'> 
            <div className='flex items-center mr-8'>
              <img src="/images/calanderVector.svg" alt=""  />
              <p className='text-[12px] text-[#5D5D5D] font-medium pl-2'>Jan 15, 2024</p>
            </div>  
            <div className='flex items-center px-2'>
              <img src="/images/clock.svg" alt=""  />
              <p className='text-[12px] text-[#5D5D5D] font-medium pl-2'>5 min read</p>
            </div> 
            </div>        
          </CardContent>
        </Card>

        <Card className="w-78.5 h-104 px-2 py-2 shadow-[0px_4px_5px_0px_#0000001F]">
          <img
            src="/images/blog1.jpg"
            alt="property"
            className="w-full h-38 object-cover rounded-xl pt-2 pb-0 mb-0"
          />

          <div className="flex justify-start">
          <button className="inline-block px-3 py-1 font-medium text-[12px] bg-[#7171FF] rounded-4xl text-white">
            Investment Tips
          </button>
          </div>
          <CardHeader className='p-0'>
            
            <h1 className={`${ebGaramond.className} font-medium text-[24px] text-black`}>
              Top 10 Locations to Buy Property in Kathmandu Valley
            </h1>   
          </CardHeader>
        
          <CardContent className='gap-4 p-0'>
            <p className='text-[#5D5D5D] text-[16px] py-0'>
              Discover the best neighborhoods for property investment in the capital city</p>
            <div className='flex items-center pt-5'> 
            <div className='flex items-center mr-8'>
              <img src="/images/calanderVector.svg" alt=""  />
              <p className='text-[12px] text-[#5D5D5D] font-medium pl-2'>Jan 15, 2024</p>
            </div>  
            <div className='flex items-center px-2'>
              <img src="/images/clock.svg" alt=""  />
              <p className='text-[12px] text-[#5D5D5D] font-medium pl-2'>5 min read</p>
            </div> 
            </div>        
          </CardContent>
        </Card>
        </div>
    </div>
  )
}

export default BlogsPage