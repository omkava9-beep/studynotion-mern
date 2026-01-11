import React from 'react'

const DarkButton = ({children}) => {
  return (
    <div>
      <button className='flex  bg-richblack-800 px-4 py-3 sm:py-4 rounded-lg text-[16px]/6 items-center justify-center text-richblack-5v shadow-xl/20  shadow-richblack-50 hover:bg-richblack-700 transition-all duration-200 '>
        {children}
      </button>
    </div>
  )
}

export default DarkButton
