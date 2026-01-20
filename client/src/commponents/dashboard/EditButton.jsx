import React from 'react'
import { FaEdit } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const EditButton = () => {
  const navigate = useNavigate();
  return (
    <div>
        <button 
          onClick={() => navigate("/dashboard/settings")}
          className='bg-yellow-50 text-richblack-900 px-4 py-2 rounded-lg flex items-center gap-2 hover:scale-95 transition-all duration-200'
        >
          Edit <FaEdit className='text-richblack-900'/>
        </button>
    </div>
  )
}

export default EditButton