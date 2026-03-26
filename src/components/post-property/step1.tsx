import { ebGaramond } from '@/lib/fonts'
import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Input } from '../ui/input'
import { Label } from '../ui/label'

function Step1() {
  return (
    <div>
      

      <form className='border border-[#D9D9D9] p-4 rounded-lg'>
      
      <div className='mb-6'>
        <div className='flex items-center gap-1'>
          <img src="/images/home.svg" alt="" />
          <h1 className={`${ebGaramond.className} font-medium text-[24px]`}>
            Property Information</h1>
        </div>
        <p className='text-[14px] text-[#5D5D5D]'>
          Tell us about your property</p>
      </div>

      {/* Property Title */}
      <div className='mt-4'>
        <Label className="block text-black text-[16px] font-medium mb-1">
          Property Title <span className="text-red-600">*</span>
        </Label>

        <Input
          type="text"
          placeholder="eg.3BHK house in Imadol area"
          className="bg-[#FCFCFC]placeholder:text-[#5D5D5D] placeholder:text-[12px] px-8 py-1 
                     rounded-lg border border-[#ADADAD]"
        />
      </div>

      {/* Property Type */}
      <div className='mt-4'>
        <Label className="block text-black text-[16px] font-medium mb-1">
          Property Type<span className="text-red-600">*</span>
        </Label>

        <Select>
          <SelectTrigger className="w-full  px-8 py-1 rounded-lg bg-[#FCFCFC] text-[12px]
                                     border border-[#ADADAD]">
            <SelectValue placeholder="Select Property Type" 
            className="text-[#5D5D5D]"/>
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="house">Home</SelectItem>
            <SelectItem value="apartment">Apartment</SelectItem>
            <SelectItem value="land">Land</SelectItem>
            <SelectItem value="land">Commercial Space</SelectItem>
          </SelectContent>
        </Select>

        <div className='flex md:flex-row flex-col items-center w-full md:gap-x-32 mt-4'>
          <div className='w-full'>
            <Label className="block text-black text-[16px] font-medium mb-1">
               Listing Type<span className="text-red-600">*</span>
            </Label>
            <Select>
              <SelectTrigger className="w-full border border-[#ADADAD] px-8 py-1 rounded-lg bg-[#FCFCFC] text-[12px]">
               <SelectValue placeholder="Select Property Type" 
                  className="text-[#5D5D5D]"/>
               </SelectTrigger>
    
              <SelectContent>
                <SelectItem value="house">Home</SelectItem>
                <SelectItem value="apartment">Apartment</SelectItem>
                <SelectItem value="land">Land</SelectItem>
                <SelectItem value="land">Commercial Space</SelectItem>
              </SelectContent>
              </Select>
          </div>

           <div className='w-full'>
            <Label className="block text-black text-[16px] font-medium mb-1 md:mt-0 mt-4">
               District<span className="text-red-600">*</span>
            </Label>
            <Select>
              <SelectTrigger className="w-full border border-[#ADADAD] px-8 py-1 rounded-lg bg-[#FCFCFC] text-[12px]">
               <SelectValue placeholder="Select Property Type" 
                  className="text-[#5D5D5D]"/>
               </SelectTrigger>
    
              <SelectContent>
                <SelectItem value="house">Home</SelectItem>
                <SelectItem value="apartment">Apartment</SelectItem>
                <SelectItem value="land">Land</SelectItem>
                <SelectItem value="Commercial Space">Commercial Space</SelectItem>
              </SelectContent>
              </Select>
          </div>
        </div>
      </div>

      <div className='mt-4'>
        <Label className="block text-black text-[16px] font-medium">
          Address / Locality<span className="text-red-600">*</span>
        </Label>

        <Input
          type="text"
          placeholder="eg.Imadol near Krishna mandir chwok"
          className="bg-[#FCFCFC] placeholder:text-[#5D5D5D] placeholder:text-[12px] 
          px-8 py-1 rounded-lg border border-[#ADADAD]"
        />
      </div>

      <div className='mt-4'>
        <Label className="block text-black text-[16px] font-medium mb-1">
          Description
        </Label>
         <textarea
           className="w-full bg-[#FCFCFC] px-8 py-2 rounded-lg placeholder:text-[#5D5D5D] 
           placeholder:text-[12px] resize-none border border-[#ADADAD]"
           rows={4}
           placeholder="Enter property description"
         />
      </div>
    </form>
    </div>
  )
}

export default Step1