import { ebGaramond, poppins } from '@/lib/fonts'
import React from 'react'

function ReviewPage() {
  return (
    <div className="bg-[#FAFAFA] py-10 px-28">

      <div className="flex items-center justify-center gap-3">
        <img src="/images/google.svg" alt="google logo" />
        <h1 className={`${ebGaramond.className} font-medium text-[32px] text-[#434343]`}>
          Google Reviews
        </h1>
      </div>

      <div className="flex justify-center items-center mt-4 gap-4">
        <p className='text-[16px] font-normal'>4.5 Stars</p>
        <p className='text-[30px] font-normal text-amber-500'>
            ★ ★ ★ ★ ★</p>
        <p className='text-[16px] font-normal'>45 Reviews</p>
      </div>

      <div className='flex gap-8 py-8'>
      <div className='border-[1.04px] border-[#AEAEAEAE] w-[306.5px] rounded-lg h-[262.2px]
                      shadow-[0px_4.14px_12.42px_0px_#00000024] px-3 py-6 
                      flex flex-col items-start gap-3'>

        <div className='flex items-center justify-start gap-x-6'>
          <div className='w-13 h-13 bg-[#D9D9D9] rounded-full flex items-center justify-center overflow-hidden'>
             <img 
               src="/images/reviewimage.jpg" 
               alt="" 
               className='w-full h-full object-cover'
             />
          </div>
          <div>
            <h1 className='text-[16.57px font-medium]'>
              Krishna Pokharel</h1>
            <p className='text-[14.49px] font-medium text-[#5D5D5D]'>
              February 24, 2026</p>
          </div>
          <div>
            <img src="images/googly.svg" alt="" />
          </div>
        </div>

        <div>
          <p className='text-[30px] font-normal text-amber-500'>
            ★ ★ ★ ★ ★</p>
        </div>

        <div>
          <p className={`${poppins.className} text-[16.57px] font-normal text-[#1A1A1A]`}>
            “Had a really good experience with this real estate company. 
            The team was easy to talk to, explained everything clearly.</p>
        </div>
      </div>

      <div className='border-[1.04px] rounded-lg border-[#AEAEAEAE] w-[306.5px] h-[262.2px]
                      shadow-[0px_4.14px_12.42px_0px_#00000024] px-3 py-6 
                      flex flex-col items-start gap-3'>

        <div className='flex items-center justify-start gap-x-6'>
          <div className='w-13 h-13 bg-[#D9D9D9] rounded-full flex items-center justify-center overflow-hidden'>
             <img 
               src="/images/reviewimage.jpg" 
               alt="" 
               className='w-full h-full object-cover'
             />
          </div>
          <div>
            <h1 className='text-[16.57px font-medium]'>
              Krishna Pokharel</h1>
            <p className='text-[14.49px] font-medium text-[#5D5D5D]'>
              February 24, 2026</p>
          </div>
          <div>
            <img src="images/googly.svg" alt="" />
          </div>
        </div>

        <div>
          <p className='text-[30px] font-normal text-amber-500'>
            ★ ★ ★ ★ ★</p>
        </div>

        <div>
          <p className={`${poppins.className} text-[16.57px] font-normal text-[#1A1A1A]`}>
            “Had a really good experience with this real estate company. 
            The team was easy to talk to, explained everything clearly.</p>
        </div>
      </div>
      
      </div>

    </div>
  )
}

export default ReviewPage