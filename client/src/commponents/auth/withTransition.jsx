import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const withTransition = (OriginalComponent) => {
  // 1. Accept 'props' here
  return (props) => {
    const overlayRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
      const tl = gsap.timeline();

      tl.to(overlayRef.current, {
        scaleY: 0,
        transformOrigin: "top",
        duration: 0.5,
        ease: "power4.inOut"
      });

      tl.fromTo(contentRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
        "-=0.4"
      );

      return () => {
        tl.kill();
      };
    }, []);

    return (
      <>
        <div 
          ref={overlayRef} 
          className="fixed top-0 left-0 w-full h-screen bg-[#161D29] z-9999"
        />

        <div ref={contentRef} className="w-full min-h-screen">
          {/* 2. Spread the props here so Login/Signup receives them */}
          <OriginalComponent {...props} />
        </div>
      </>
    );
  };
};

export default withTransition;