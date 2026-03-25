"use client"
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Separator } from '../ui/separator'
import { ArrowRight } from 'lucide-react'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'
import { ebGaramond } from '@/lib/fonts'

function ListingPage() {
  const router = useRouter()
  return (
    <div className='md:mt-8 mt-12 bg-[#FAFAFA]'>
      <div className='md:ml-28 mx-auto text-center sm:text-left'>
        <p className='text-[18px] font-medium text-[#7171FF]'>Latest Properties</p>
        <h1 className={`${ebGaramond.className} font-medium text-[32px] text-[#434343] mb-6`}>
          Discover Our Best Listings</h1>
      </div>

      <div className='max-w-7xl mx-auto px-4'>
      <div className='grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-8 md:px-4 
                      justify-items-center'>
        <Card className="w-75 mb-2">
          <img
            src="/images/building1.jpg"
            alt="property"
            className="w-full h-50 object-cover rounded-t-xl"
          />
        
          <CardHeader>
            <CardTitle>4.5 Crore</CardTitle>
            <h1>Modern Villa With Garden</h1>
            <div className='flex items-center gap-2'>
              <img src="/images/vector3.svg" alt="" />
              <p className='text-[12px] text-[#5D5D5D] font-medium'>Sanepa, Bhaktapur</p>
            </div>
            
            <Separator className='border-[#5D5D5D] border-[1.5px] mt-2'/>
          </CardHeader>
        
          <CardContent className='flex items-center gap-4'>
            <div className='flex items-center px-2'>
              <img src="/images/vector.svg" alt=""  />
              <p className='text-[12px] text-[#5D5D5D] font-medium'>8 Beds</p>
            </div>
            <div className='flex items-center gap-2'>
              <img src="/images/vector1.svg" alt=""  />
              <p className='text-[12px] text-[#5D5D5D] font-medium'>4 Aana</p>
            </div>
            <div className='flex items-center gap-2'>
              <img src="/images/vector2.svg" alt=""  />
              <p className='text-[12px] text-[#5D5D5D] font-medium'>3 fit</p>
            </div>          
          </CardContent>
        </Card>

        <Card className="w-75 mb-2">
          <img
            src="/images/building1.jpg"
            alt="property"
            className="w-full h-50 object-cover rounded-t-xl"
          />
        
          <CardHeader>
            <CardTitle>4.5 Crore</CardTitle>
            <h1>Modern Villa With Garden</h1>
            <div className='flex items-center gap-2'>
              <img src="/images/vector3.svg" alt="" />
              <p className='text-[12px] text-[#5D5D5D] font-medium'>Sanepa, Bhaktapur</p>
            </div>
            
            <Separator className='border-[#5D5D5D] border-[1.5px] mt-2'/>
          </CardHeader>
        
          <CardContent className='flex items-center gap-4'>
            <div className='flex items-center px-2'>
              <img src="/images/vector.svg" alt=""  />
              <p className='text-[12px] text-[#5D5D5D] font-medium'>8 Beds</p>
            </div>
            <div className='flex items-center gap-2'>
              <img src="/images/vector1.svg" alt=""  />
              <p className='text-[12px] text-[#5D5D5D] font-medium'>4 Aana</p>
            </div>
            <div className='flex items-center gap-2'>
              <img src="/images/vector2.svg" alt=""  />
              <p className='text-[12px] text-[#5D5D5D] font-medium'>3 fit</p>
            </div>          
          </CardContent>
        </Card>

        <Card className="w-75 mb-2">
          <img
            src="/images/building1.jpg"
            alt="property"
            className="w-full h-50 object-cover rounded-t-xl"
          />
        
          <CardHeader>
            <CardTitle>4.5 Crore</CardTitle>
            <h1>Modern Villa With Garden</h1>
            <div className='flex items-center gap-2'>
              <img src="/images/vector3.svg" alt="" />
              <p className='text-[12px] text-[#5D5D5D] font-medium'>Sanepa, Bhaktapur</p>
            </div>
            
            <Separator className='border-[#5D5D5D] border-[1.5px] mt-2'/>
          </CardHeader>
        
          <CardContent className='flex items-center gap-4'>
            <div className='flex items-center px-2'>
              <img src="/images/vector.svg" alt=""  />
              <p className='text-[12px] text-[#5D5D5D] font-medium'>8 Beds</p>
            </div>
            <div className='flex items-center gap-2'>
              <img src="/images/vector1.svg" alt=""  />
              <p className='text-[12px] text-[#5D5D5D] font-medium'>4 Aana</p>
            </div>
            <div className='flex items-center gap-2'>
              <img src="/images/vector2.svg" alt=""  />
              <p className='text-[12px] text-[#5D5D5D] font-medium'>3 fit</p>
            </div>          
          </CardContent>
        </Card>

        <Card className="w-75 mb-2">
          <img
            src="/images/building1.jpg"
            alt="property"
            className="w-full h-50 object-cover rounded-t-xl"
          />
        
          <CardHeader>
            <CardTitle>4.5 Crore</CardTitle>
            <h1>Modern Villa With Garden</h1>
            <div className='flex items-center gap-2'>
              <img src="/images/vector3.svg" alt="" />
              <p className='text-[12px] text-[#5D5D5D] font-medium'>Sanepa, Bhaktapur</p>
            </div>
            
            <Separator className='border-[#5D5D5D] border-[1.5px] mt-2'/>
          </CardHeader>
        
          <CardContent className='flex items-center gap-4'>
            <div className='flex items-center px-2'>
              <img src="/images/vector.svg" alt=""  />
              <p className='text-[12px] text-[#5D5D5D] font-medium'>8 Beds</p>
            </div>
            <div className='flex items-center gap-2'>
              <img src="/images/vector1.svg" alt=""  />
              <p className='text-[12px] text-[#5D5D5D] font-medium'>4 Aana</p>
            </div>
            <div className='flex items-center gap-2'>
              <img src="/images/vector2.svg" alt=""  />
              <p className='text-[12px] text-[#5D5D5D] font-medium'>3 fit</p>
            </div>          
          </CardContent>
        </Card>

        <Card className="w-75 mb-2">
          <img
            src="/images/building1.jpg"
            alt="property"
            className="w-full h-50 object-cover rounded-t-xl"
          />
        
          <CardHeader>
            <CardTitle>4.5 Crore</CardTitle>
            <h1>Modern Villa With Garden</h1>
            <div className='flex items-center gap-2'>
              <img src="/images/vector3.svg" alt="" />
              <p className='text-[12px] text-[#5D5D5D] font-medium'>Sanepa, Bhaktapur</p>
            </div>
            
            <Separator className='border-[#5D5D5D] border-[1.5px] mt-2'/>
          </CardHeader>
        
          <CardContent className='flex items-center gap-4'>
            <div className='flex items-center px-2'>
              <img src="/images/vector.svg" alt=""  />
              <p className='text-[12px] text-[#5D5D5D] font-medium'>8 Beds</p>
            </div>
            <div className='flex items-center gap-2'>
              <img src="/images/vector1.svg" alt=""  />
              <p className='text-[12px] text-[#5D5D5D] font-medium'>4 Aana</p>
            </div>
            <div className='flex items-center gap-2'>
              <img src="/images/vector2.svg" alt=""  />
              <p className='text-[12px] text-[#5D5D5D] font-medium'>3 fit</p>
            </div>          
          </CardContent>
        </Card>
      </div>
      <div className='flex lg:justify-end justify-center mt-4'>
        <Button
            className="px-4 py-2 bg-[#7171FF] text-white hover:bg-gray-400 hover:text-black"
            onClick={() => router.push("/")}
          >
            <span>View All Properties</span>
            <ArrowRight className="w-5 h-5" />
          </Button>
          </div>
      </div>
      </div>
  )
}

export default ListingPage