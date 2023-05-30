
import { Link } from 'react-router-dom';
import styled from 'styled-components';


export const Container = styled.div`
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  overflow-y: auto; /* Adiciona scroll vertical apenas quando necessário */
  background: linear-gradient(45deg, #ff3933 0%, #ff4838 50%,  #ff884a 100%);
`

export const LoginBox = styled.div`
margin-top: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: linear-gradient(45deg, #000 0%, #000 25%, #000 50%,  #000 100%);
  border-radius: 10px;
`;

export const LoginBoxH2 = styled.h2`
  margin: 0 0 30px;
  padding: 0;
  color: #fff;
  text-align: center;
`;

export const LoginBoxForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const UserBox = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 30px;
`;

export const UserBoxInput = styled.input`
  position: relative;
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
`;

export const UserBoxLabel = styled.label`
  position: relative;
  left: 0;
  top: -60px;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  transition: 0.5s;
`;

export const ButtonForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5px;
`;

export const ButtonFormA = styled(Link)`
  padding: 10px 100px;
  color: #fff;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  letter-spacing: 4px;
  border: 1px solid #fff;
  margin: auto;

  &:hover {
    background: #fff;
    color: rgb(32, 32, 32);
    border-radius: 5px;
    box-shadow: 0 0 5px #fff;
  }
`;

export const Register = styled.div`
  font-size: 14px;
  text-decoration: none;
  color: rgb(139, 139, 139);
  margin: auto;
  width: 60%;
  text-align: center;
  padding: 12px;
`;

export const A = styled(Link)`
margin: auto;
color: #fff;
text-decoration-line: underline;
`;
