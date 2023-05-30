import React, { useState } from 'react';
import {
  Container,
  FormWrap,
  FormContent,
  Form,
  FormButton,
  Img,
  ImgContainer,
  Register,
  A,
  UserBox,
  UserBoxInput,
  UserBoxLabel
} from './SigninElements';
import logo from '../../assets/logo.png';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function Login(){
  const navigate = useNavigate()
  const [data, setData] = useState({
    email:'',
    password:''
  })
  
    const loginUser = async (e) =>{
      e.preventDefault()
      const {email, password} = data
      try {
        const {data} = await axios.post('/signincliente', {
          email, 
          password
        })
        if(data.error){
          toast.error(data.error)
        }else{
          setData({})
          toast.success('Login realized with success. Welcome!')
          navigate('/perfiluser')
        }
      } catch (error) {
        
      }
    }

    
  
    return (
      <>
        <Container>
          <FormWrap>
            <FormContent>
              <Form onSubmit={loginUser} >  
                <ImgContainer to="/">
                  <Img src={logo} alt="Imagem" className="image" />
                </ImgContainer>
                <UserBox>
              <UserBoxInput type="text" autocomplete="on"  placeholder="Email" value={data.email} onChange={(e) => setData({...data, email: e.target.value})}/>
              <UserBoxLabel htmlFor="email">E-mail</UserBoxLabel>
            </UserBox>
            <UserBox>
              <UserBoxInput type="password" autocomplete="current-password" placeholder="Senha"  value={data.password} onChange={(e) => setData({...data, password: e.target.value})}/>
              <UserBoxLabel htmlFor="password">Senha</UserBoxLabel>
            </UserBox>
                <FormButton type="submit" onClick={Login}>Continue</FormButton>
                <Register>
                  Não possui conta? <A to="/signup">Cadastre-se</A>
                </Register>
                <Register>
                  Esqueceu sua senha?
                </Register>
              </Form>
            </FormContent>
          </FormWrap>
        </Container>
      </>
    );
  
}





