import React from 'react'
import HighlightedText from '../Homepage/HighlightedText'

const Quote = () => {
  return (
    <div className=" text-xl sm:text-2xl md:text-3xl font-semibold mx-auto py-5 pb-20 text-center text-richblack-100">
        We are passionate about revolutionizing the way we learn. Our
        innovative platform
        <HighlightedText text={" Combines technology"} />,{" "}
        <span className="bg-linear-to-b from-[#FF512F] to-[#F09819] text-transparent bg-clip-text font-bold">
            {" "}
            Expertise
            {" "}
        </span>
        and community to create an
        <span className="bg-linear-to-b from-[#E65C00] to-[#F9D423] text-transparent bg-clip-text font-bold">
            {" "}
            Unparalleled educational experience.
        </span>
    </div>
  )
}

export default Quote
