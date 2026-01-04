import React from 'react'

const YellowButton = ({text}) => {
  return (
    <div>
      <button className=' flex bg-yellow-50 w-33.75 h-12 px-3 py-6 rounded-lg font-medium text-richblack-900 text-[16px]/6 items-center justify-center shadow-xl/20 shadow-amber-200' >

        {text}
      </button>
    </div>
  )
}

export default YellowButton
