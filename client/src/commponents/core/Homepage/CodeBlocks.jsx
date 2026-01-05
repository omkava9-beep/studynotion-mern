import React from "react";
import YellowButton from "./YellowButton";
import DarkButton from "./DarkButton";
import HighlightedText from "./HighlightedText";
import { TypeAnimation } from "react-type-animation";

const CodeBlocks = ({
  position,
  heading1,
  heading2,
  highlightedText,

  subheading,
  button1,
  button2,
  codeblock,
  backgroundGradient = "bg-gradient-to-br from-[#8A2BE2] via-[#FFA500] to-[#F8F8FF]",
  codeColor = "text-yellow-100",
}) => {
  return (
    <div
      className={`relative flex ${position} my-20 gap-10 
      justify-between items-start min-h-[380px] max-w-[1500px]`}
    >
      {/* LEFT SECTION */}
      <div className="flex flex-col w-[50%] gap-8 flex-shrink-0">
        <h2 className="text-4xl font-semibold">
          {heading1}<HighlightedText text={highlightedText}></HighlightedText>{heading2}
        </h2>

        <p className="text-richblack-300 font-bold text-[16px]">
          {subheading}
        </p>

        <div className="flex gap-7 mt-7">
          <YellowButton>{button1}</YellowButton>
          <DarkButton>{button2}</DarkButton>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="relative w-[50%] flex justify-center flex-shrink-0">
        
        {/* BACKGROUND GLOW */}
        <div
          className={`absolute top-1/4  right-4/12
          w-[372.95px] h-[257.05px] rounded-full
          opacity-20 blur-[68px]
          ${backgroundGradient}`}
        />

        {/* GLASS CODE CARD */}
        <div
          className="relative z-10 w-full max-w-[520px] h-[300px]
          rounded-xl overflow-hidden
          bg-white/10 backdrop-blur-lg
          border border-white/10
          shadow-xl shadow-black/30"
        >
          <div className="flex h-full">
            
            {/* LINE NUMBERS */}
            <div className="w-[8%] text-richblack-300 font-inter font-bold text-center py-4 border-r border-white/10">
              {Array.from({ length: 11 }).map((_, i) => (
                <p key={i}>{i + 1}</p>
              ))}
            </div>

            {/* CODE AREA */}
            <div className="relative w-[92%] px-4 py-4 font-mono font-bold leading-6 overflow-hidden">
              
              {/* INVISIBLE PLACEHOLDER */}
              <pre className="opacity-0 select-none">
                {codeblock}
              </pre>

              {/* TYPING TEXT */}
              <div className={`absolute inset-0 ${codeColor} pt-3.5 pl-3.5`}>
                <TypeAnimation
                  sequence={[codeblock, 2500, ""]}
                  repeat={Infinity}
                  cursor={true}
                  speed={70}
                  style={{
                    whiteSpace: "pre-line",
                    display: "block",
                  }}
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeBlocks;
