import React from 'react'

const LoadingSkeleton = () => {
  return (
    <div className='flex flex-col animate-pulse'>
         <div className='h-[300px] xs:h-[260px] xxs:h-[250px] xs:w-[180px] w-[200px] sm:w-[190px] md:w-[220px] bg-slate-200 rounded-md'></div>  
    </div>
  )
}

export default LoadingSkeleton