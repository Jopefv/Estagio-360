import React, {useState} from 'react'
import LoginPaths from '../components/SignInPaths/SignPath'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const LoginPath = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () =>{
    setIsOpen(!isOpen);
  }

  return (
    <>

      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar />
      <LoginPaths />
    </>
  )
}

export default LoginPath
