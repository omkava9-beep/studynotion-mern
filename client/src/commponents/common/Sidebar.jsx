import React, { useState } from 'react'

import { sidebarLinks } from '../../data/dashboard-links'
import { VscSignOut } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import SidebarLink from './SidebarLink'
import { useNavigate } from 'react-router-dom'
import { VscSettingsGear, VscSignOut as VscSignOutIcon } from "react-icons/vsc"
import { deleteToken } from '../../redux/slices/authReducer'

const Sidebar = () => {

    const {user, loading: profileLoading} = useSelector((state) => state.profile);
    const {loading: authLoading} = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [confirmationModal, setConfirmationModal] = useState(null);

    if(profileLoading || authLoading) {
        return (
            <div className='grid h-[calc(100vh-3.5rem)] min-w-[220px] items-center border-r border-r-richblack-700 bg-richblack-800'>
                <div className='spinner'></div>
            </div>
        )
    }

  return (
    <div className='flex min-w-[220px] flex-col border-r border-r-richblack-700
    h-[calc(100vh-3.5rem)] bg-richblack-800 py-10'>

        <div className='flex flex-col'>
            {
                sidebarLinks.map((link) => {
                    if(link.type && user?.accountType !== link.type) return null;
                    return (
                        <SidebarLink key={link.id}  link={link} iconName={link.icon} />
                    )
                })
            }
        </div>

        <div className='mx-auto mt-6 mb-6 h-px w-10/12 bg-richblack-600'></div>

        <div className='flex flex-col'>
            <SidebarLink 
                link={{name:"Settings", path:"dashboard/settings"}}
                iconName="VscSettingsGear"
            />

            <button 
                onClick={ () => setConfirmationModal({
                    text1: "Are You Sure ?",
                    text2: "You will be logged out of your Account",
                    btn1Text: "Logout",
                    btn2Text:"Cancel",
                    btn1Handler: () => {
                        dispatch(deleteToken());
                        localStorage.removeItem("token");
                        localStorage.removeItem("user");
                        navigate("/login");
                    },
                    btn2Handler: () => setConfirmationModal(null),
                })}
                className='text-sm font-medium text-richblack-300'
                >

                <div className='flex items-center gap-x-2 px-8 py-2'>
                    <VscSignOutIcon className='text-lg' />
                    <span>Logout</span>
                </div>

            </button>

        </div>

        {/* Confirmation Modal should be rendered here if it exists */}
        {/* Placeholder for now as I need to find/create a Modal component */}
        {confirmationModal && (
            <div className='fixed inset-0 z-1000 mt-0! grid place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm'>
                <div className='w-11/12 max-w-[350px] rounded-lg border border-richblack-400 bg-richblack-800 p-6'>
                    <p className='text-2xl font-semibold text-richblack-5'>{confirmationModal.text1}</p>
                    <p className='mt-3 mb-5 leading-6 text-richblack-200'>{confirmationModal.text2}</p>
                    <div className='flex items-center gap-x-4'>
                        <button 
                            className='cursor-pointer rounded-md bg-yellow-50 py-[8px] px-[20px] font-semibold text-richblack-900'
                            onClick={confirmationModal.btn1Handler}
                        >
                            {confirmationModal.btn1Text}
                        </button>
                        <button 
                            className='cursor-pointer rounded-md bg-richblack-200 py-[8px] px-[20px] font-semibold text-richblack-900'
                            onClick={confirmationModal.btn2Handler}
                        >
                            {confirmationModal.btn2Text}
                        </button>
                    </div>
                </div>
            </div>
        )}

    </div>
  )
}

export default Sidebar
