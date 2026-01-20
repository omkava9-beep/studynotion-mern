import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom';
import Sidebar from '../commponents/common/Sidebar';

const DashBoard = () => {

  const {loading: authLoading} = useSelector( (state) => state.auth );
  const {loading: profileLoading} = useSelector( (state) => state.profile );
  const {token : token} = useSelector( (state) => state.auth );
  const navigate = useNavigate();

  if(profileLoading || authLoading) {
    return (
        <div className='mt-10'>
            Loading...
        </div>
    )
  }


  return (
    !token? navigate("/login") : 
    <div className='relative flex h-[calc(100vh-3.5rem)] overflow-hidden'>
        <Sidebar />
        <div className='h-[calc(100vh-3.5rem)] flex-1 overflow-auto'>
            <div className='mx-auto w-11/12 max-w-[1000px] py-10'>
                <Outlet />
            </div>
        </div>
    </div>
  )
}

export default DashBoard