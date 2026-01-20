import React from 'react'
import { useSelector } from 'react-redux'
import ChangeProfilePicture from './settings/ChangeProfilePicture'

const Settings = () => {
    const {user} = useSelector((state)=>state.profile);

  return (
    <div className='flex flex-col gap-10'>
        <h1 className="mb-14 text-3xl font-medium text-richblack-5">
            Edit Profile
        </h1>

        {/* Change Profile Picture */}
        <ChangeProfilePicture />

        {/* Other Settings Sections (Placeholder for now) */}
        <div className='flex flex-col gap-6 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12'>
            <h2 className='text-lg font-semibold text-richblack-5'>Personal Information</h2>
            <p className='text-richblack-400'>Currently under development...</p>
        </div>
    </div>
  )
}

export default Settings