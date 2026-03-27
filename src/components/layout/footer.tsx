import { ebGaramond, poppins } from '@/lib/fonts'
import React from 'react'

function Footer() {
  return (
    <div className='bg-[#222222] pb-6'>
        <div className='px-18 grid grid-cols-1 sm:grid-cols-2 gap-y-4 md:grid-cols-5  gap-x-8 pt-6'>
            
            <div className='md:col-span-2 md:text-start text-center'>
                <h1 className={`${ebGaramond.className} font-semibold text-[32px] text-white `}>
                    GharJagga</h1>
                <p className={`${poppins.className} text-[#EAEAEA] text-[16px] font-normal md:pr-26`}>
                    Nepal's trusted platform for buying, selling, and renting 
                    properties. Find your dream home with us.</p>

                <div className='flex items-center gap-3 mt-5 md:justify-start justify-center'>
                    <div className='h-8 w-8 rounded-full flex items-center justify-center  border border-[#448DEC] relative'>
                        <img src="/images/fb.svg" alt="" className='absolute'/>
                    </div>
                    <div className='h-8 w-8 rounded-full flex items-center justify-center  border border-[#448DEC] relative'>
                        <img src="/images/insta.svg" alt="" className='absolute'/>
                    </div>
                    <div className='h-8 w-8 rounded-full flex items-center justify-center  border border-[#448DEC] relative'>
                        <img src="/images/twitter.svg" alt="" className='absolute'/>
                    </div>                  
                </div>
            </div>

            <div className='md:text-start text-center'>
                <h1 className={`${ebGaramond.className} font-semibold text-[22px] text-white`}>
                    Quick Links</h1>
                <ul>
                    <li className='text-[#EAEAEA] font-light'>Buy Property</li>
                    <li className='text-[#EAEAEA] font-light'>Sell Property</li>
                    <li className='text-[#EAEAEA] font-light'>Rent Property</li>
                    <li className='text-[#EAEAEA] font-light'>Property Valuation</li>
                </ul>    
            </div>

            <div className='md:text-start text-center'>
                <h1 className={`${ebGaramond.className} font-semibold text-[22px] text-white`}>
                    Company</h1>
                <ul>
                    <li className='text-[#EAEAEA] text-[16px] font-light'>Houses</li>
                    <li className='text-[#EAEAEA] font-light'>Apartment</li>
                    <li className='text-[#EAEAEA] font-light'>Land/Plots</li>
                    <li className='text-[#EAEAEA] font-light'>Commercial Space</li>
                </ul>    
            </div>

            <div className='flex flex-col md:text-start text-center '>
                <p className={`${ebGaramond.className} font-semibold text-[22px] text-white`}>
                    Contact Us</p>
                <div className='flex flex-col gap-y-2'>    
                <div className='flex items-center justify-center gap-2'>
                    <img src="/images/location.svg" alt="" />
                    <div>
                        <p className='text-white font-light'>Address</p>
                        <p className='text-[#EAEAEA] text-[12px]'>
                            Lazimpat, Kathmandu</p>
                    </div>
                </div>    
                <div className='flex items-center justify-center gap-2'>
                    <img src="/images/email.svg" alt="" />
                    <div>
                        <p className='text-white font-light'>Email</p>
                        <p className='text-[#EAEAEA] text-[12px]'>
                            gharjagga@gmail.com</p>
                    </div>
                </div>    
                <div className='flex items-center justify-center gap-2'>
                    <img src="/images/phone.svg" alt="" />
                    <div>
                        <p className='text-white font-light '>Contact</p>
                        <p className='text-[#EAEAEA] text-[12px]'>
                            9867483978</p>
                    </div>
                </div>    
                </div>
            </div>
        </div>

        <div>
        <div className='h-px bg-[#EAEAEA] mx-18 mt-6 mb-2 '/>

        <div className='flex md:flex-row flex-col items-center md:justify-between  md:px-18'>

        <div className='flex items-start'>
           <p className='text-[#EAEAEA] mr-4'>© GharJagga 2026. </p>
           <p className='text-[#EAEAEA]'>All Rights Reserved.</p>
        </div>

        <div className='flex md:gap-x-8 gap-4'>
           <p className='text-[#EAEAEA]'>Privacy Policy</p>
           <p className='text-[#EAEAEA]'>Terms of Services</p>
        </div>
        </div>

        </div>
    </div>
  )
}

export default Footer