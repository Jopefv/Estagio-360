import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import SignUpCliente from '../components/SignUpCliente'
import Sidebar from '../components/Sidebar'

const SignupclientePage = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () =>{
    setIsOpen(!isOpen);
  }
  return (
    <>

      <Sidebar isOpen={isOpen} toggle={toggle} /> 
      <Navbar/>
      <SignUpCliente/>
    </>
  )
}

export default SignupclientePage
