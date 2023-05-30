
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from '../src/pages/index'
import SigninCliente from './pages/signincliente'
import SigninEmpresa from './pages/signinempresa'
import LoginPath from './pages/signinpath'
import SignupPage from './pages/signup'
import SignUpClientePage from './pages/signupcliente'
import SignUpEmpresaPage from './pages/signupempresa'
import PerfilUserPage from './pages/perfiluser'
import axios from 'axios';
import { Toaster } from 'react-hot-toast'
import { UserContextProvider } from '../../context/userContext'
import { CompanyContextProvider } from '../../context/companyContext'

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true



function App() {

  return (
    
    <>
    <CompanyContextProvider>
    <UserContextProvider>
    <Toaster position='bottom-left' toastOptions={{duration: 2000}}/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signinpath' element={<LoginPath/>} exact />
      <Route path='/signincliente' element={<SigninCliente/>} exact />
      <Route path='/signinempresa' element={<SigninEmpresa/>} exact />
      <Route path='/signup' element={<SignupPage/>} exact/>
      <Route path='/signupcliente' element={<SignUpClientePage/>} exact/>
      <Route path='/signupempresa' element={<SignUpEmpresaPage/>} exact/>
      <Route path='/perfiluser' element={<PerfilUserPage/>} exact/>
     </Routes>
     </UserContextProvider>
     </CompanyContextProvider>
    </>
  )
}

export default App
