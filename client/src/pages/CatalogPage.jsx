import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { apiConnector } from '../../services/apiConnector';
import { catagorypage } from '../../services/apis';
import { useLocation, useNavigate, useParams } from 'react-router-dom';



const CatalogPage = () => {
  const {user} = useSelector((state) => state.profile);
  const navigate = useNavigate();

  const {catalogId} = useParams();

  const [selectedCourses, setSelectedCourses] = useState([]);
  const [expectSelected, setExpectSelected] = useState([]);
  const [topsellings, setTopsellings] = useState([]);
  const [catagory, setCatagory] = useState("");
  const [description, setDescription] = useState("");

  useEffect(()=>{
    const fetchData = async()=>{
      const {data} = await apiConnector("GET", catagorypage.CATAGORY_PAGE_API+catalogId)
      
      setCatagory(data.catagory);
      setDescription(data.description);
      setSelectedCourses(data.data.selectedCourses);
      setExpectSelected(data.data.expectSelected);
      setTopsellings(data.data.topsellings);
      console.log("selectedCourses",data.data.selectedCourses)
      console.log("expectSelected",data.data.expectSelected)
      console.log("topsellings",data.data.topsellings)
      console.log("catagory",data.catagory)
    } 
    fetchData();
  },[catalogId])
  return (
    <div className="min-h-screen bg-richblack-900">
      {/* Hero Section */}
      <div className="w-full bg-richblack-800 border-b border-richblack-700">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-10 flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Left Content */}
          <div className="flex-1 flex flex-col gap-4">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-richblack-300">
              <span className="hover:text-richblack-50 cursor-pointer transition-colors">Home</span>
              <span className="text-richblack-500">/</span>
              <span className="hover:text-richblack-50 cursor-pointer transition-colors">Catalog</span>
              <span className="text-richblack-500">/</span>
              <span className="text-yellow-50 font-medium">{catagory}</span>
            </nav>

            {/* Category Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-richblack-5 leading-tight">
              {catagory}
            </h1>

            {/* Description */}
            <p className="text-richblack-200 text-base md:text-lg leading-relaxed max-w-2xl">
              {description}
            </p>
          </div>

          {/* Right Sidebar - Related Resources */}
          <div className="lg:w-[280px] shrink-0">
            <div className="bg-richblack-700 rounded-xl p-5 border border-richblack-600">
              <h3 className="text-lg font-semibold text-richblack-5 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-yellow-50"></span>
                Related Resources
              </h3>
              <ul className="flex flex-col gap-3">
                <li className="text-richblack-200 hover:text-yellow-50 cursor-pointer transition-colors flex items-center gap-2 text-sm">
                  <span className="text-yellow-50">📄</span> Python Documentation
                </li>
                <li className="text-richblack-200 hover:text-yellow-50 cursor-pointer transition-colors flex items-center gap-2 text-sm">
                  <span className="text-yellow-50">📄</span> Java Documentation
                </li>
                <li className="text-richblack-200 hover:text-yellow-50 cursor-pointer transition-colors flex items-center gap-2 text-sm">
                  <span className="text-yellow-50">📄</span> C++ Documentation
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default CatalogPage