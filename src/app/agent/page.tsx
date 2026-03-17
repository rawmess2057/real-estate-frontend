import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ebGaramond } from '@/lib/fonts'
import React from 'react'

function AgentPage() {
  return (
    <div>
        <div className='h-65.5 bg-[#7171FF] w-screen flex flex-col items-center justify-center'>
            <h1 className={`${ebGaramond.className} font-semibold text-[32px] text-white`}>
                Meet Our Professional Agents</h1>
            <p className='text-[#EAEAEA]'>
            Our experienced agents are ready to help you buy, sell, or rent 
            properties with confidence.</p>

        </div>

        <div className='mx-31.25'>
            <div className="w-66.5 h-68.5 overflow-hidden bg-red-500 p-2 rounded-lg">
                <div>
                    <img src="/images/ashal.jpg " alt="" 
                    className='object-cover rounded-lg'/>
                    <h1>Ashal Khanal</h1>
                    <p>Real Estate Consultant</p>
                    <div className='flex items-center'>
                         <img src="/images/email.svg" alt="" />
                         <p>ashalkhanal54@gmail.com</p>
                    </div>
                </div>
            </div> 
        </div>
    </div>
  )
}

export default AgentPage