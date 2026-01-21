import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Timeline = ({ logo, heading, subheading }) => {
  const container = useRef();

  useGSAP(
    () => {
      gsap.from(container.current, {
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 90%",
        },
      });
    },
    { scope: container }
  );

  return (
    <div className="flex items-start gap-3 sm:gap-4 w-full" ref={container}>
      
      {/* Icon */}
      <div className="rounded-full bg-white shadow-lg 
                      p-2 sm:p-3 
                      w-10 h-10 sm:w-12 sm:h-12 
                      flex items-center justify-center 
                      shrink-0">
        <img
          src={logo}
          alt="timeline icon"
          className="w-5 h-5 sm:w-6 sm:h-6"
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col">
        <span className="font-semibold text-richblack-800 
                         text-sm sm:text-base lg:text-lg">
          {heading}
        </span>
        <p className="text-richblack-700 
                      text-xs sm:text-sm 
                      leading-relaxed">
          {subheading}
        </p>
      </div>

    </div>
  );
};

export default Timeline;
