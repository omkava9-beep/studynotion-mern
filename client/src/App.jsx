
import './App.css'
import { Route , Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/Signup'
import Navbar from './commponents/common/Navbar'

function App() {
  
  return (
    <div className=' text-white min-h-screen bg-richblack-900 justify-center'>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<SignUp />}></Route>
          
        </Routes>
    </div>
  )
}

export default App
