import React from 'react'

const HighlightedText = ({text}) => {
  return (
    <div>
        {" "}
      <span className='font-semibold bg-linear-to-bl from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] bg-clip-text text-[36px] text-transparent'>
         { text}
      </span>
    </div>
  )
}

export default HighlightedText
