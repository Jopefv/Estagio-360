import React, { useState } from 'react'
import { LoginBox, LoginBoxH2, LoginBoxForm, UserBox, UserBoxInput, UserBoxLabel, ButtonForm, ButtonFormA, Register, A, Container } from './SignUpEmpresaElements'
import axios from 'axios'
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';




export default function registerBoss() {
  const navigate = useNavigate()
  const [data, setData] = useState({
    namecom: '',
    emailcom:'',
    passwordcom:'',
    cnpj:'',
    addresscom:'', 
    phonecom:''
  })
 
const registerCompany = async (e) => {
  e.preventDefault();
  const {namecom , emailcom, passwordcom, cnpj, addresscom, phonecom} = data
  try {
    const {data} = await axios.post('/signupempresa', {
      namecom , emailcom, passwordcom, cnpj, addresscom, phonecom
    })
    if(data.error){
      toast.error(data.error)
    }else{
      setData({})
      toast.success('Register successful.!')
      navigate('/signinempresa')
    }
  } catch (error) {
   console.log(error) 
  }
}


  return (
<Container>
      <LoginBox>
        <LoginBoxH2>Cadastre-se</LoginBoxH2>
        <LoginBoxForm  onSubmit={registerCompany}>
          <UserBox>
            <UserBoxInput type="text" autocomplete="on" placeholder="E-mail Empresa" value={data.emailcom} onChange={(e) => setData({...data, emailcom: e.target.value})}/>
            <UserBoxLabel>E-mail Empresa</UserBoxLabel>
          </UserBox>
          <UserBox>
            <UserBoxInput type="password" autocomplete="current-password" placeholder="Senha"  value={data.passwordcom} onChange={(e) => setData({...data, passwordcom: e.target.value})}/>
            <UserBoxLabel >Senha</UserBoxLabel>
          </UserBox>
          <UserBox>
            <UserBoxInput type="text" autocomplete="on" placeholder="Nome da Empresa" value={data.namecom} onChange={(e) => setData({...data, namecom: e.target.value})} />
            <UserBoxLabel>Nome Empresa</UserBoxLabel>
          </UserBox>
          <UserBox>
            <UserBoxInput type="text" autocomplete="on" placeholder="Cnpj"  value={data.cnpj} onChange={(e) => setData({...data, cnpj: e.target.value})}/>
            <UserBoxLabel>Cnpj</UserBoxLabel>
          </UserBox>
          <UserBox>
            <UserBoxInput type="text" autocomplete="on" placeholder="Endereço"  value={data.addresscom} onChange={(e) => setData({...data, addresscom: e.target.value})}/>
            <UserBoxLabel>Endereço</UserBoxLabel>
          </UserBox>
          <UserBox>
            <UserBoxInput type="text" autocomplete="on" placeholder="Telefone da empresa"  value={data.phonecom} onChange={(e) => setData({...data, phonecom: e.target.value})}/>
            <UserBoxLabel>Telefone da Empresa</UserBoxLabel>
          </UserBox>

          <ButtonForm>
            <ButtonFormA type="submit" to="/signin" onClick={registerCompany}>Cadastrar</ButtonFormA>
            <Register>
              Já possui uma conta?
              <A to="/signinpath">Login</A>
            </Register>
          </ButtonForm>
        </LoginBoxForm>
      </LoginBox>
    </Container>
  )
}



