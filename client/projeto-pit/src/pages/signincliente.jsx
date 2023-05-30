import React, {useState} from 'react'
import Signin from '../components/SigninCliente/SigninCliente'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const SigninCliente = () => {
  const [isOpen, setIsOpen] = useState(false)
      
  const toggle = () =>{
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar/>
      <Signin/>
    </>
  )
}

export default SigninCliente
