import React from 'react'
import { Link } from 'react-router-dom'
import HighlightedText from '../commponents/core/Homepage/HighlightedText'
import { FaArrowRight } from "react-icons/fa";
import YellowButton from '../commponents/core/Homepage/YellowButton';
import DarkButton from '../commponents/core/Homepage/DarkButton';
import boxoffice from '../assets/Images/boxoffice.png';
import Banner from '../assets/Images/banner.mp4';

const Home = () => {
  return (
    <div className='w-full flex justify-center h-full'>
        <div className='w-11/12 flex justify-center'>
            {/* section1 */}
            <div className='flex flex-col gap-10 justify-center w-full items-center'>
                <div className=' flex flex-col items-center gap-9.5 max-w-228.25 text-center'>
                    <Link to="/signup" className='  '>
                    <div className=' font-inter text-[16px] flex justify-center mt-12 text-richblack-200 bg-richblack-800 w-58.75 h-11  rounded-[500px] hover:bg-richblack-700 transition-all duration-300 border-b-[0.5px]'>
                        <div className='flex px-1.5 py-4.5  items-center gap-2.5'>Become an Instructor <div><FaArrowRight /></div></div>
                    </div>
                    </Link>
            
                    <div className='flex flex-col items-center gap-6'>
                        <div className='text-[36px] flex gap-2 font-medium'>
                            <span>Empower Your Future with</span>
                            
                            <HighlightedText text="Coding Skills"></HighlightedText>
                        </div>
                        <span className='text-richblack-200 text-[16px] text-center '>With our online coding courses, you can learn at your own pace, from   anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors.</span>
                    </div>
                    <div className=' flex max-w-77 h-12 gap-6'>
                        <YellowButton text="Learn more">
                        </YellowButton>
                        <DarkButton text="Book a Demo">
                        </DarkButton>
                    </div>

                </div>
                <div className=' mb-16 shadow-2xl/55 shadow-[#F5F5F5] rounded-2xl' >
                    <video src={Banner} muted loop autoPlay width={1100} className=' z-10 rounded-2xl'> </video>
                </div>


            </div>
            

            {/* section2 */}


            {/* section3 */}


            {/* footer */}

        </div>
      
    </div>
  )
}

export default Home
