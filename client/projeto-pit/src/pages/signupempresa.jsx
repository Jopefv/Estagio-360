import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import SignUpEmpresa from '../components/SignUpEmpresa'
import Sidebar from '../components/Sidebar'

const SignupempresaPage = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () =>{
    setIsOpen(!isOpen);
  }

  return (
    <>


      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar/>
      <SignUpEmpresa/>
    </>
  )
}

export default SignupempresaPage