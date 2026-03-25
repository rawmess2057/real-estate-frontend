import { ebGaramond } from '@/lib/fonts'
import Image from 'next/image'
import React from 'react'
import { Card, CardFooter, CardHeader } from '../ui/card'
import { Button } from '../ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'

function BannerPage() {
  return (
    <div className="relative w-full aspect-1440/713 max-lg:aspect-auto max-lg:h-[80vh]">
      
      {/* Image */}
      <Image
        src="/banner.png"
        alt="Home Banner"
        fill
        className="object-cover"
      />

      {/* ✅ MOVE THIS INSIDE */}
      <div className="
        absolute top-1/2 -translate-y-1/2 left-28 w-185

        max-md:top-20              /* for small screens */
        max-md:translate-y-0       /* stop centering */
        max-md:left-1/2 
        max-md:-translate-x-1/2 
        max-md:w-[90%]
      ">
        
        <div>
          <h1 className={`${ebGaramond.className} font-semibold text-[54px] text-white leading-tight tracking-normal md:pr-40
            max-md:text-[28px] max-md:pr-0 max-md:text-center`}>
            Find Your Perfect Home in Nepal
          </h1>

          <p className="text-[#D9D9D9] font-medium text-xl pt-4 pr-20 leading-normal
            max-md:text-sm max-md:pr-0 max-md:text-center">
            Discover thousands of properties for sale and rent across Nepal.
            From modern apartments to traditional houses and prime land.
          </p>
        </div> 

        <Card className="w-122 mt-10 max-md:w-full">  
          <CardHeader className="flex items-center justify-between
            max-md:flex-col max-md:gap-3">
            <Button variant="default" className="px-20 max-md:w-full">Buy</Button>
            <Button variant="default" className="px-20 max-md:w-full">Rent</Button>
          </CardHeader>
          
          <CardFooter className="flex justify-between gap-2
            max-md:flex-col max-md:gap-3">
            
            <Select>
              <SelectTrigger className="px-4 w-full">
                <SelectValue placeholder="Property Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="house">House</SelectItem>
                <SelectItem value="apartment">Apartment</SelectItem>
                <SelectItem value="villa">Villa</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline" className="px-2 max-md:w-full">Search by location</Button>
            <Button variant="outline" className="px-2 max-md:w-full">Search</Button>
          </CardFooter>
        </Card>

        <div className="flex items-center gap-6 max-md:justify-center max-md:text-center mt-12">
          <div>
            <h1 className="text-white text-[36px] font-semibold leading-none">10K+</h1>
            <p className="text-white text-[18px] font-normal">Properties</p>
          </div>

          <div>
            <h1 className="text-white text-[36px] font-semibold leading-none">5K+</h1>
            <p className="text-white text-[18px] font-normal">Happy Clients</p>
          </div>

          <div>
            <h1 className="text-white text-[36px] font-semibold leading-none">10K+</h1>
            <p className="text-white text-[18px] font-normal">Districts</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default BannerPage;