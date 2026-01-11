import React from 'react'
import loginImg from '../assets/Images/login.webp'
import Template from '../commponents/auth/Template'
import withTransition from '../commponents/auth/withTransition' 

const Login = () => {
  return (
    <Template
      title="Welcome Back"
      des1="Build skills for today, tomorrow, and beyond."
      des2="Education to future-proof your career."
      imgmain={loginImg}
      formtype="login"
    />
  )
}

export default withTransition(Login)