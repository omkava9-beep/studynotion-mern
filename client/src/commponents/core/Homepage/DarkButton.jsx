import React from 'react'

const DarkButton = ({text}) => {
  return (
    <div>
      <button className='flex bg-richblack-800 w-37.25 h-12 px-3 py-6 rounded-lg text-[16px]/6 items-center justify-center text-richblack-5v shadow-xl/20  shadow-richblack-50'>
        {text}
      </button>
    </div>
  )
}

export default DarkButton
