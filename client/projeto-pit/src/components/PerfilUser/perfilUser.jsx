import React /* { useState, useEffect }*/ from 'react';
//import axios from 'axios';
//import { Container, ContainerResponseH1, ContainerResponseH2, ContainerResponseP } from "./perfilElements";
import { useContext } from 'react'
import { UserContext } from '../../../../context/userContext'
import { CompanyContext } from '../../../../context/companyContext'

export default function Perfil() {
  const {user} = useContext(UserContext)
  const {company} = useContext(CompanyContext)
  return(
    <><h1>DashBoard</h1><>
      {!!user && (<h2>Hi {user.name}!</h2>)}
      {!!company && (<h2>Welcome {company.name}!</h2>)}
    </></>
    

  )
}
  


