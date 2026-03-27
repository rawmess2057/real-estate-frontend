import { ebGaramond, poppins } from '@/lib/fonts'
import React from 'react'

function AboutPage() {
  return (
    <div>
    <div className='relative'>
      <div className="w-full h-86 bg-[#D9D9D9] overflow-hidden ">
        <img 
          src="/images/abouttop.jpg" 
          alt="About Top" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className=' w-full max-w-180
                       flex flex-col items-center justify-center
                       px-6 md:px-20
                       bg-white rounded-lg shadow
                     
                       mt-6 py-4 md:mt-0
                       relative md:absolute
                     
                       md:bottom-0 md:left-1/2
                       md:-translate-x-1/2 md:translate-y-1/4'>

        <h1 className={`${ebGaramond.className} text-[32px] font-semibold`}>
          About Us</h1>
        <p className={`${poppins.className} text-[#434343] text-center  leading-normal`}>
          At Gharjagga we believe that finding the right property is more 
          than just a transaction  it’s a life changing experience. Our mission is to help individuals, families, and investors discover spaces where dreams grow and investments thrive.
        </p>
      </div>
    </div>

    <div className='bg-[#FAFAFA] my-36'>
    <div className='md:py-12 md:mx-28 mx-auto'>
      <h1 className={`${ebGaramond.className} text-[32px] text-center font-semibold mb-12`}>
        Our Services</h1>

        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 justify-items-center md:justify-items-stretch'>

        <div className='border border-[#D6D6D6] h-auto min-h-65 w-full max-w-96 flex flex-col items-center
                        justify-center bg-white px-5 py-3 gap-3 rounded-xl'>
          <img src="/images/yoga.svg" alt="" 
                className='text-center'/>
          <h1 className='{`${ebGaramond.className} text-[24px] text-center font-medium`}'>
            Property Listings</h1>
          <p className={`${poppins.className} text-[#717171] text-center  leading-normal`}>
            Gharjagga assists property owners in listing their properties for sale or rent
             on various platforms, ensuring maximum exposure to potential buyers or tenants.</p>  
        </div>

        <div className='border border-[#D6D6D6] h-auto min-h-65 w-full max-w-96 flex flex-col items-center
                        justify-center bg-white px-5 py-3 gap-3 rounded-xl'>
          <img src="/images/yoga.svg" alt="" 
                className='text-center'/>
          <h1 className='{`${ebGaramond.className} text-[24px] text-center font-medium`}'>
            Property Listings</h1>
          <p className={`${poppins.className} text-[#717171] text-center  leading-normal`}>
            Gharjagga assists property owners in listing their properties for sale or rent
             on various platforms, ensuring maximum exposure to potential buyers or tenants.</p>  
        </div>

        <div className='border border-[#D6D6D6] h-auto min-h-65 w-full max-w-96 flex flex-col items-center
                        justify-center bg-white px-5 py-3 gap-3 rounded-xl'>
          <img src="/images/yoga.svg" alt="" 
                className='text-center'/>
          <h1 className='{`${ebGaramond.className} text-[24px] text-center font-medium`}'>
            Property Listings</h1>
          <p className={`${poppins.className} text-[#717171] text-center  leading-normal`}>
            Gharjagga assists property owners in listing their properties for sale or rent
             on various platforms, ensuring maximum exposure to potential buyers or tenants.</p>  
        </div>

        <div className='border border-[#D6D6D6] h-auto min-h-65 w-full max-w-96 flex flex-col items-center
                        justify-center bg-white px-5 py-3 gap-3 rounded-xl'>
          <img src="/images/yoga.svg" alt="" 
                className='text-center'/>
          <h1 className='{`${ebGaramond.className} text-[24px] text-center font-medium`}'>
            Property Listings</h1>
          <p className={`${poppins.className} text-[#717171] text-center  leading-normal`}>
            Gharjagga assists property owners in listing their properties for sale or rent
             on various platforms, ensuring maximum exposure to potential buyers or tenants.</p>  
        </div>
        </div>

    </div>
    </div>

    </div>
  )
}

export default AboutPage