import { ebGaramond } from '@/lib/fonts'
import React from 'react'

function FaqPage() {
  return (
    <div className='px-18 mt-16 mb-30'>
        <div className='flex flex-col items-center justify-center text-center mb-12'>
            <h1 className={`${ebGaramond.className} font-semibold text-[32px] text-[#434343]`}>
                F.A.Qs</h1>
            <p className='text-[16px] text-[#717171]'>
                Have any questions? We are here to help you.</p>
        </div>

        <div className='grid sm:grid-cols-2 grid-cols-1 gap-x-30 gap-y-20'>
            <div className='flex items-center justify-between border border-[#7171FF] rounded-2xl px-2 py-2'>
                <p className='text-[16px] font-medium'>
                    How many agents are there in Gharjagga?</p>
                <img src="images/arrow.svg" alt="" />    
            </div>
            <div className='flex items-center justify-between border border-[#7171FF] rounded-2xl px-2 py-2'>
                <p className='text-[16px] font-medium'>
                    How many agents are there in Gharjagga?</p>
                <img src="images/arrow.svg" alt="" />    
            </div>
            <div className='flex items-center justify-between border border-[#7171FF] rounded-2xl px-2 py-2'>
                <p className='text-[16px] font-medium'>
                    How many agents are there in Gharjagga?</p>
                <img src="images/arrow.svg" alt="" />    
            </div>
            <div className='flex items-center justify-between border border-[#7171FF] rounded-2xl px-2 py-2'>
                <p className='text-[16px] font-medium'>
                    How many agents are there in Gharjagga?</p>
                <img src="images/arrow.svg" alt="" />    
            </div>
        </div>
    </div>
  )
}

export default FaqPage