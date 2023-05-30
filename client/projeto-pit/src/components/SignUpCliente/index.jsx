import React, { useState } from 'react';
import {
  LoginBox,
  LoginBoxH2,
  LoginBoxForm,
  UserBox,
  UserBoxInput,
  UserBoxLabel,
  ButtonForm,
  ButtonFormA,
  Register,
  A,
  Container,
} from './SignUpClienteElements';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';



export default function registerCliente() {
  const navigate = useNavigate()
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    dateOfBirth: '',
    address: '',
    phone: '',
  });

  const registerUser = async (e) => {
      e.preventDefault() 
      const {name, email, password, dateOfBirth, address, phone} = data
      try {
        const {data} = await axios.post('/signupcliente', {
          name , email, password, dateOfBirth, address, phone
        })
        if(data.error){
          toast.error(data.error)
        }else{
          setData({})
          toast.success('Register successful.!')
          navigate('/signincliente')
        }
      } catch (error) {
        console.log(error)
      }
  };

  return (
    <Container>
      <LoginBox>
        <LoginBoxH2>Cadastre-se</LoginBoxH2>
        <LoginBoxForm onSubmit={registerUser}>
          <UserBox>
            <UserBoxInput
              type="text"
              placeholder="Email"
              autocomplete="on"
              value={data.email}
              onChange={(e) => setData({...data, email: e.target.value })}
            />
            <UserBoxLabel>E-mail</UserBoxLabel>
          </UserBox>
          <UserBox>
            <UserBoxInput
              type="password"
              autocomplete="current-password"
              placeholder="Senha"
              value={data.password}
              onChange={(e) => setData({...data, password: e.target.value })}
            />
            <UserBoxLabel htmlFor="password">Senha</UserBoxLabel>
          </UserBox>
          <UserBox>
            <UserBoxInput
              type="text"
              autocomplete="on"
              placeholder="Nome"
              value={data.name}
              onChange={(e) => setData({...data, name: e.target.value })}
            />
            <UserBoxLabel>Nome</UserBoxLabel>
          </UserBox>
          <UserBox>
            <UserBoxInput
              type="text"
              autocomplete="on"
              placeholder="Data de Nascimento"
              value={data.dateOfBirth}
              onChange={(e) =>
                setData({...data, dateOfBirth: e.target.value })
              }
            />
            <UserBoxLabel>Data de Nascimento</UserBoxLabel>
          </UserBox>
          <UserBox>
            <UserBoxInput
              type="text"
              autocomplete="on"
              placeholder="Endereço"
              value={data.address}
              onChange={(e) => setData({...data, address: e.target.value })}
            />
            <UserBoxLabel>Endereço</UserBoxLabel>
          </UserBox>
          <UserBox>
            <UserBoxInput
              type="text"
              autocomplete="on"
              placeholder="Telefone"
              value={data.phone}
              onChange={(e) => setData({...data, phone: e.target.value })}
            />
            <UserBoxLabel>Telefone</UserBoxLabel>
          </UserBox>

          <ButtonForm>
            <ButtonFormA type="submit" to="/signin" onClick={registerUser}>
              Cadastrar
            </ButtonFormA>
            <Register>
              Já possui uma conta?
              <A to="/signinpath">Login</A>
            </Register>
          </ButtonForm>
        </LoginBoxForm>
      </LoginBox>
    </Container>
  );
};

