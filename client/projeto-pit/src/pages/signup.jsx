import React, {useState} from 'react'
import Pricing from '../components/Subscribe/Subscribe'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const SignupPage = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () =>{
    setIsOpen(!isOpen);
  }

  return (
    <>

      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar />
      <Pricing />
    </>
  )
}

export default SignupPage
