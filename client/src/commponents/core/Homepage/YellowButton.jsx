import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

const YellowButton = ({ children }) => {
  return (
    <button className="inline-flex items-center gap-2 bg-[#FFD60A] hover:bg-yellow-500 active:scale-95 px-6 py-3 rounded-lg font-semibold text-richblack-900 text-base transition-all duration-200 ease-in-out shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2 whitespace-nowrap">
      {children}
      <FaArrowRight className="text-base flex-shrink-0" />
    </button>
  )
}

export default YellowButton
