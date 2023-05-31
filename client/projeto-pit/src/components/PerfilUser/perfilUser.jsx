import React /* { useState, useEffect }*/ from 'react';
//import axios from 'axios';
//import { Container, ContainerResponseH1, ContainerResponseH2, ContainerResponseP } from "./perfilElements";
import { useContext } from 'react';
import { UserContext } from '../../../../context/userContext';

export default function Perfil() {
  const { user } = useContext(UserContext);
  return (
    <>
      <h1>DashBoard</h1>
      <>{!!user && <h2>Hi {user.name}!</h2>}</>
    </>
  );
}
