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

      <div className='h-54 w-180 flex flex-col items-center justify-center mb-20
                      shadow-[0px_4px_4px_0px_#00000026] absolute bottom-0 px-20
                      bg-white left-1/2  -translate-x-1/2 translate-y-3/4 rounded-lg'>

        <h1 className={`${ebGaramond.className} text-[32px] font-semibold`}>
          About Us</h1>
        <p className={`${poppins.className} text-[#434343] text-center  leading-normal`}>
          At Gharjagga we believe that finding the right property is more 
          than just a transaction  it’s a life changing experience. Our mission is to help individuals, families, and investors discover spaces where dreams grow and investments thrive.
        </p>
      </div>
    </div>

    <div className='bg-[#FAFAFA] my-36'>
    <div className='py-12 mx-28'>
      <h1 className={`${ebGaramond.className} text-[32px] text-center font-semibold mb-12`}>
        Our Services</h1>

        <div className='grid grid-cols-3 gap-12'>

        <div className='border border-[#D6D6D6] h-63 w-94 flex flex-col items-center
                        justify-center bg-white px-5 py-2 gap-3 rounded-xl'>
          <img src="/images/yoga.svg" alt="" 
                className='text-center'/>
          <h1 className='{`${ebGaramond.className} text-[24px] text-center font-medium`}'>
            Property Listings</h1>
          <p className={`${poppins.className} text-[#717171] text-center  leading-normal`}>
            Gharjagga assists property owners in listing their properties for sale or rent
             on various platforms, ensuring maximum exposure to potential buyers or tenants.</p>  
        </div>

        <div className='border border-[#D6D6D6] h-63 w-94 flex flex-col items-center
                        justify-center bg-white px-5 py-2 gap-3 rounded-xl'>
          <img src="/images/yoga.svg" alt="" 
                className='text-center'/>
          <h1 className='{`${ebGaramond.className} text-[24px] text-center font-medium`}'>
            Property Listings</h1>
          <p className={`${poppins.className} text-[#717171] text-center  leading-normal`}>
            Gharjagga assists property owners in listing their properties for sale or rent
             on various platforms, ensuring maximum exposure to potential buyers or tenants.</p>  
        </div>

        <div className='border border-[#D6D6D6] h-63 w-94 flex flex-col items-center
                        justify-center bg-white px-5 py-2 gap-3 rounded-xl'>
          <img src="/images/yoga.svg" alt="" 
                className='text-center'/>
          <h1 className='{`${ebGaramond.className} text-[24px] text-center font-medium`}'>
            Property Listings</h1>
          <p className={`${poppins.className} text-[#717171] text-center  leading-normal`}>
            Gharjagga assists property owners in listing their properties for sale or rent
             on various platforms, ensuring maximum exposure to potential buyers or tenants.</p>  
        </div>

        <div className='border border-[#D6D6D6] h-63 w-94 flex flex-col items-center
                        justify-center bg-white px-5 py-2 gap-3 rounded-xl'>
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