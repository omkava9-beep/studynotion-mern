import React, { useState, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { setToken } from '../../redux/slices/authReducer'
import { setUser } from '../../redux/slices/profileReducer'
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { toast } from 'react-hot-toast'
import { gsap } from 'gsap'

const LoginForm = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({ email: "", password: "" })
    const [showPassword, setShowPassword] = useState(false)
    const formRef = useRef(null)

    useEffect(() => {
        gsap.fromTo(formRef.current.children, 
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "back.out(1.7)" }
        )
    }, [])

    function changeHandler(event) {
        setFormData(prev => ({ ...prev, [event.target.name]: event.target.value }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(setToken("mock-jwt-token"))
        dispatch(setUser({ ...formData, image: `https://api.dicebear.com/5.x/initials/svg?seed=${formData.email}` }))
        console.log(formData)
        toast.success("Logged In")
        navigate('/dashboard')
    }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className='flex flex-col w-full gap-y-4 mt-6'>
        <label className='w-full'>
            <p className='text-[0.875rem] text-[#F1F2FF] mb-1 leading-5.5'>
                Email Address <sup className='text-pink-200'>*</sup>
            </p>
            <input 
                required
                type="email" 
                name='email'
                value={formData.email}
                onChange={changeHandler}
                placeholder='Enter email address'
                className='bg-[#161D29] rounded-lg text-[#F1F2FF] w-full p-3 border-b border-[#AFB2BF] focus:outline-none focus:border-yellow-400 transition-colors duration-200'
            />
        </label>

        <label className='w-full relative'>
            <p className='text-[0.875rem] text-[#F1F2FF] mb-1 leading-5.5'>
                Password <sup className='text-pink-200'>*</sup>
            </p>
            <input 
                required
                type={showPassword ? 'text' : 'password'} 
                name='password'
                value={formData.password}
                onChange={changeHandler}
                placeholder='Enter Password'
                className='bg-[#161D29] rounded-lg text-[#F1F2FF] w-full p-3 border-b border-[#AFB2BF] focus:outline-none focus:border-yellow-400 transition-colors duration-200'
            />
            <span 
                onClick={() => setShowPassword(prev => !prev)} 
                className='absolute right-3 top-[38px] cursor-pointer text-[#AFB2BF] hover:text-white transition-colors duration-200'
            >
                {showPassword ? <AiOutlineEyeInvisible fontSize={24}/> : <AiOutlineEye fontSize={24}/>}
            </span>
            
            <Link to='#'>
                <p className='text-xs mt-1 text-[#47A5C5] hover:text-[#5eb7d6] ml-auto w-max transition-colors duration-200'>
                    Forgot Password?
                </p>
            </Link>
        </label>

        <button 
            type="submit"
            className='bg-[#FFD60A] rounded-lg font-bold text-[#000814] px-3 py-2 mt-6 hover:bg-[#ffe668] hover:scale-95 transition-all duration-200 shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)]'
        >
            Login
        </button>
    </form>
  )
}

export default LoginForm