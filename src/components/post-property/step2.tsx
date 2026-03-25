import { ebGaramond } from '@/lib/fonts'
import React from 'react'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Button } from '../ui/button'

function Step2() {
  return (
    <div>
       <form className='border border-[#D9D9D9] p-4 rounded-lg'>
            
            <div className='mb-6'>
              <div className='flex items-center gap-1'>
                <img src="/images/home.svg" alt="" />
                <h1 className={`${ebGaramond.className} font-medium text-[24px]`}>
                  Property Specifications</h1>
              </div>
              <p className='text-[14px] text-[#5D5D5D]'>
                Size, price, and features</p>
            </div>

            <div className='grid grid-cols-2 gap-x-12 gap-y-1'>
              <div className=''>
              <Label className="block text-black text-[16px] font-medium mb-1">
                Price(NPR) <span className="text-red-600">*</span>
              </Label>

              <Input
                type="text"
                placeholder="eg.18000000"
                className="bg-[#FCFCFC] placeholder:text-[#5D5D5D] placeholder:text-[12px] px-8 py-1 
                           rounded-lg border border-[#ADADAD]"
              />
              </div>

              <div className=''>
              <Label className="block text-black text-[16px] font-medium mb-1">
                Price Label<span className="text-red-600">*</span>
              </Label>

              <Input
                type="text"
                placeholder="eg.1.5 Crore, Negotiable"
                className="bg-[#FCFCFC] placeholder:text-[#5D5D5D] placeholder:text-[12px] px-8 py-1 
                           rounded-lg border border-[#ADADAD]"
              />
              </div>

              <div className='mt-4'>
              <Label className="block text-black text-[16px] font-medium mb-1">
                Land Area<span className="text-red-600">*</span>
              </Label>

              <Input
                type="text"
                placeholder="eg.4"
                className="bg-[#FCFCFC] placeholder:text-[#5D5D5D] placeholder:text-[12px] px-8 py-1 
                           rounded-lg border border-[#ADADAD]"
              />
              </div>

              <div className='mt-4'>
              <Label className="block text-black text-[16px] font-medium mb-1">
                Road Width<span className="text-red-600">*</span>
              </Label>

              <Input
                type="text"
                placeholder="eg.13 ft"
                className="bg-[#FCFCFC] placeholder:text-[#5D5D5D] placeholder:text-[12px] px-8 py-1 
                           rounded-lg border border-[#ADADAD]"
              />
              </div>

              <div className='mt-4'>
              <Label className="block text-black text-[16px] font-medium mb-1">
                Bedrooms
              </Label>

              <Input
                type="text"
                placeholder="eg.6"
                className="bg-[#FCFCFC] placeholder:text-[#5D5D5D] placeholder:text-[12px] px-8 py-1 
                           rounded-lg border border-[#ADADAD]"
              />
              </div>

              <div className='my-4'>
              <Label className="block text-black text-[16px] font-medium mb-1">
                Bathroom<span className="text-red-600">*</span>
              </Label>

              <Input
                type="text"
                placeholder="eg.2"
                className="bg-[#FCFCFC] placeholder:text-[#5D5D5D] placeholder:text-[12px] px-8 py-1 
                           rounded-lg border border-[#ADADAD]"
              />
              </div>
            </div>

            <div className='mt-2'> 
              <Label className="block text-black text-[16px] font-medium mb-2">
                 Facing Directions 
              </Label>
            </div>

            <div className="grid grid-cols-4 gap-6">
               {[
                 "East", "West", "North", "South",
                 "East North", "West South", "East South", "West East"
               ].map((dir) => (
                 <label key={dir} className="cursor-pointer">
                   
                   <input
                     type="checkbox"
                     name="direction"
                     value={dir}
                     className="peer hidden"
                   />
             
                   <div
                     className=" bg-[#F8F8F8] border border-[#5D5D5D] text-[12px]
                                text-black rounded-3xl text-center transition py-2
                                peer-checked:bg-blue-500 peer-checked:text-white peer-checked:border-blue-500"
                   >
                     {dir}
                   </div>
             
                 </label>
              ))}
            </div>
        </form>
    </div>
  )
}

export default Step2