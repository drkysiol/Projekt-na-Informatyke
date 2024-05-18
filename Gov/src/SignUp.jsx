import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Components/Navbar/Navbar'
import './App.css'
import SignUpForm from './Components/SignUpForm/SignUpForm'

function SignUp() {

  return (
    <>
        <div className='SignUp'>
          <Navbar/>
          <SignUpForm/>
        </div>
    </>
  )
}

export default SignUp
