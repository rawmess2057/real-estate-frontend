import { ebGaramond } from '@/lib/fonts'
import React from 'react'
import { Label } from '../ui/label'
import { Button } from '../ui/button'

function Step3() {
  return (
    <div>
      <form className='border border-[#D9D9D9] p-4 rounded-lg'>
        <div className='mb-6'>
            <div className='flex items-center gap-1'>
              <img src="/images/media.svg" alt="" />
              <h1 className={`${ebGaramond.className} font-medium text-[24px]`}>
                Photos & Amenities</h1>
            </div>
            <p className='text-[14px] text-[#5D5D5D]'>
              Add photos and select amenities</p>
        </div>

        <div className=''>
          <Label className="block text-black text-[16px] font-medium mb-1">
           Property Photos <span className="text-[12px]">(upto 6)</span>
          </Label>
          <div className='h-26.5 w-34 border border-[#C2C2C2] rounded-lg
                          flex flex-col items-center justify-center'>
            <img src="/images/media.svg" alt="" />
            <p>Add photos</p>
          </div>
        </div>

        <div className='mt-4'>
          <Label className="block text-black text-[16px] font-medium mb-1">
           Amenities
          </Label>

          <div className='grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-6'>

            <label className="bg-white border border-[#ADADAD] flex items-center gap-6 px-3 py-2 cursor-pointer rounded-md">
              <input
                type="checkbox"
                className="w-5 h-5 rounded-full border-2 border-gray-400 appearance-none cursor-pointer
                           checked:bg-blue-500 checked:border-blue-500"
              />
              <span className="text-black text-sm">Parking</span>
            </label>

            <label className="bg-white border border-[#ADADAD] flex items-center gap-6 px-3 py-2 cursor-pointer rounded-md">
              <input
                type="checkbox"
                className="w-5 h-5 rounded-full border-2 border-gray-400 appearance-none cursor-pointer
                           checked:bg-blue-500 checked:border-blue-500"
              />
              <span className="text-black text-sm">CCTV</span>
            </label>

            <label className="bg-white border border-[#ADADAD] flex items-center gap-6 px-3 py-2 cursor-pointer rounded-md">
              <input
                type="checkbox"
                className="w-5 h-5 rounded-full border-2 border-gray-400 appearance-none cursor-pointer
                           checked:bg-blue-500 checked:border-blue-500"
              />
              <span className="text-black text-sm">Water</span>
            </label>

            <label className="bg-white border border-[#ADADAD] flex items-center gap-6 px-3 py-2 cursor-pointer rounded-md">
              <input
                type="checkbox"
                className="w-5 h-5 rounded-full border-2 border-gray-400 appearance-none cursor-pointer
                           checked:bg-blue-500 checked:border-blue-500"
              />
              <span className="text-black text-sm">Road</span>
            </label>

            <label className="bg-white border border-[#ADADAD] flex items-center gap-6 px-3 py-2 cursor-pointer rounded-md">
              <input
                type="checkbox"
                className="w-5 h-5 rounded-full border-2 border-gray-400 appearance-none cursor-pointer
                           checked:bg-blue-500 checked:border-blue-500"
              />
              <span className="text-black text-sm">Gallery</span>
            </label>

            <label className="bg-white border border-[#ADADAD] flex items-center gap-6 px-3 py-2 cursor-pointer rounded-md">
              <input
                type="checkbox"
                className="w-5 h-5 rounded-full border-2 border-gray-400 appearance-none cursor-pointer
                           checked:bg-blue-500 checked:border-blue-500"
              />
              <span className="text-black text-sm">Garden</span>
            </label>

            <label className="bg-white border border-[#ADADAD] flex items-center gap-6 px-3 py-2 cursor-pointer rounded-md">
              <input
                type="checkbox"
                className="w-5 h-5 rounded-full border-2 border-gray-400 appearance-none cursor-pointer
                           checked:bg-blue-500 checked:border-blue-500"
              />
              <span className="text-black text-sm">Bathrooms</span>
            </label>

            <label className="bg-white border border-[#ADADAD] flex items-center gap-6 px-3 py-2 cursor-pointer rounded-md">
              <input
                type="checkbox"
                className="w-5 h-5 rounded-full border-2 border-gray-400 appearance-none cursor-pointer
                           checked:bg-blue-500 checked:border-blue-500"
              />
              <span className="text-black text-sm">Hall</span>
            </label>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Step3