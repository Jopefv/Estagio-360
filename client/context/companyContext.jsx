import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const CompanyContext = createContext({});

export function CompanyContextProvider({ children }) {
  const [company, setCompany] = useState(null);
  useEffect(() => {
    if (!company) {
      axios.get('/perfiluser').then(({ data }) => {
        setCompany(data);
      });
    }
  }, []);

  return (
    <CompanyContext.Provider value={{ company, setCompany}}>
      {children}
    </CompanyContext.Provider>
  );
}
