import { ebGaramond } from '@/lib/fonts'
import React from 'react'

function ReviewPage() {
  return (
    <div className="bg-[#FAFAFA] py-10">

      <div className="flex items-center justify-center gap-3">
        <img src="/images/google.svg" alt="google logo" />
        <h1 className={`${ebGaramond.className} font-medium text-[32px] text-[#434343]`}>
          Google Reviews
        </h1>
      </div>

      <div className="flex justify-center items-center mt-4 gap-4">
        <p className='text-[16px] font-normal'>4.5 Stars</p>
        <p className='text-[16px] font-normal'>★★★★★</p>
        <p className='text-[16px] font-normal'>45 Reviews</p>
      </div>

    </div>
  )
}

export default ReviewPage