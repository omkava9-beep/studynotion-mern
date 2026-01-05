import React from "react";
import { Link } from "react-router-dom";
import HighlightedText from "../commponents/core/Homepage/HighlightedText";
import { FaArrowRight } from "react-icons/fa";
import YellowButton from "../commponents/core/Homepage/YellowButton";
import DarkButton from "../commponents/core/Homepage/DarkButton";
import Banner from "../assets/Images/banner.mp4";
import CodeBlocks from "../commponents/core/Homepage/CodeBlocks";
import bghome from '../assets/Images/bghome.svg'
const Home = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col w-11/12  w-full">
        <div className="flex flex-col items-center gap-12 ">

          <Link to="/signup">
            <div
              className="mt-12 flex items-center gap-2 px-6 h-11
              text-richblack-200 bg-richblack-800 rounded-full
              hover:bg-richblack-700 transition-all duration-300 border-b"
            >
              <span className="text-[16px] font-inter">
                Become an Instructor
              </span>
              <FaArrowRight />
            </div>
          </Link>
          {/* Heading */}
          <div className="flex flex-col items-center gap-6 max-w-[850px] text-center">
            <h1 className="text-[36px] font-medium flex gap-2">
              <span>Empower Your Future with</span>
              <HighlightedText text="Coding Skills" />
            </h1>

            <p className="text-richblack-200 text-[16px]">
              With our online coding courses, you can learn at your own pace,
              from anywhere in the world, and get access to hands-on projects,
              quizzes, and personalized feedback from instructors.
            </p>
          </div>
          <div className="flex gap-6">
            <YellowButton>Learn more</YellowButton>
            <DarkButton>Book a Demo</DarkButton>
          </div>
          <div className="mb-20 rounded-2xl backdrop-blur-lg bg-white/10">
            <video
              src={Banner}
              muted
              loop
              autoPlay
              className="rounded-2xl shadow-2xl shadow-richblue-500/50 w-[1250px]"
            />
          </div>
        </div>

        <div className="flex flex-col items-center">
            <CodeBlocks
            position="flex-row"
            heading1="Unlock your  "
            heading2=" with our online courses"
            highlightedText = " coding potential"
            subheading="Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            button1="Try it Yourself"
            button2="Learn more"
            codeblock={`<!DOCTYPE html>\n<html>\nhead><title>Example</\ntitle><linkrel="stylesheet"href="styles.css">\n/head>\n<body>\nh1><ahref="/">Header</a>\n/h1>\nnav><ahref="one/">One</a><ahref="two/">Two</\na><ahref="three/">Three</a>\n/nav>`}
          />
          <CodeBlocks
            position="flex-row-reverse"
            heading1="Start "
            heading2=""
            highlightedText = " Coding in seconds"
            subheading="Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
            button1="Continue Lesson"
            button2="Learn more"
            codeblock={`<!DOCTYPE html>\n<html>\nhead><title>Example</\ntitle><linkrel="stylesheet"href="styles.css">\n/head>\n<body>\nh1><ahref="/">Header</a>\n/h1>\nnav><ahref="one/">One</a><ahref="two/">Two</\na><ahref="three/">Three</a>\n/nav>`}
          />

          
        </div>

        {/* section2 */}
        <div className=" flex bg-pure-greys-5 w-[100%] text-shadow-richblack-700">
            <div className="homepage_bg h-83.25 w-[100%]">
                <img src={bghome} alt="" content="cover" className=" object-fill"/>



            </div>
            





        </div>
        {/* section3 */}
        {/* footer */}

      </div>
    </div>
  );
};

export default Home;
