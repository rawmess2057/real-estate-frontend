import { ebGaramond } from '@/lib/fonts'
import React from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'

function Step4() {
  return (
    <div>
       <form className='border border-[#D9D9D9] p-4 rounded-lg'>
          <div className='mb-6'>
              <div className='flex items-center gap-2'>
                <img src="/images/formphone.svg" alt=""/>
                <h1 className={`${ebGaramond.className} font-medium text-[24px]`}>
                  Contact Information</h1>
              </div>
              <p className='text-[14px] text-[#5D5D5D]'>
                How buyers/ renters can reach you </p>
          </div>

          <div className='mt-4'>
             <Label className="block text-black text-[16px] font-medium mb-1">
               Full Name<span className="text-red-600">*</span>
             </Label>
     
             <Input
               type="text"
               placeholder="Your Full Name"
               className="bg-[#FCFCFC] placeholder:text-[#5D5D5D] placeholder:text-[12px] px-8 py-1 
                          rounded-lg border border-[#ADADAD]"
             />
          </div>

          <div className='mt-4'>
             <Label className="block text-black text-[16px] font-medium mb-1">
               Phone Number<span className="text-red-600">*</span>
             </Label>
     
             <Input
               type="text"
               placeholder="98********"
               className="bg-[#FCFCFC] placeholder:text-[#5D5D5D] placeholder:text-[12px] px-8 py-1 
                          rounded-lg border border-[#ADADAD]"
             />
          </div>

          <div className='mt-4'>
             <Label className="block text-black text-[16px] font-medium mb-1">
               Email<span className="text-[12px]">(optional)</span>
             </Label>
     
             <Input
               type="text"
               placeholder="your@gmail.com"
               className="bg-[#FCFCFC] placeholder:text-[#5D5D5D] placeholder:text-[12px] px-8 py-1 
                          rounded-lg border border-[#ADADAD]"
             />
          </div>

          <div className='border border-[#ADADAD] bg-[#FCFCFC]  rounded-lg p-2 mt-6'>
            <h1 className='text-black text-[16px] font-medium my-2'>Listing Property</h1>
            <div className='flex flex-col gap-1'>
              <div className='grid grid-cols-2'>
                <p className='text-[12px] font-medium text-[#5D5D5D]'>Title</p>
                <p>----</p>
              </div>
              
              <div className='grid grid-cols-2'>
                <p className='text-[12px] font-medium text-[#5D5D5D]'>Type</p>
                <p>----</p>
              </div>

              <div className='grid grid-cols-2'>
                <p className='text-[12px] font-medium text-[#5D5D5D]'>Location</p>
                <p>----</p>
              </div>

              <div className='grid grid-cols-2'>
                <p className='text-[12px] font-medium text-[#5D5D5D]'>Price</p>
                <p>----</p>
              </div>

              <div className='grid grid-cols-2'>
                <p className='text-[12px] font-medium text-[#5D5D5D]'>Size</p>
                <p>----</p>
              </div>

              <div className='grid grid-cols-2'>
                <p className='text-[12px] font-medium text-[#5D5D5D]'>Photos</p>
                <p>----</p>
              </div>
            </div>
          </div>
        </form>
      
    </div>
  )
}

export default Step4