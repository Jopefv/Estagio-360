import React, {useState} from 'react'
import Signin from '../components/SigninEmpresa/SigninEmpresa'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const SigninPage = () => {
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

export default SigninPage
