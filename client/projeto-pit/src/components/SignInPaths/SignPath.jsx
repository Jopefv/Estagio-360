import React from 'react';
import { MdBoy } from 'react-icons/md';
import { FaBriefcase } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { PricingContainer, PricingContainerCard, PricingContainerCardInfo, PricingContainerFeatures, PricingContainerFeaturesItem, PricingHeading, PricingSection, PricingWrapper, Icon, Button} from './SubscribeElements.jsx';



function LoginPaths() {
  
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Escolha como quer Logar
          </PricingHeading>
          <PricingContainer>
            <PricingContainerCard to='/sign-up'>
              <PricingContainerCardInfo>
                <Icon>
                  <MdBoy />
                </Icon>
                <PricingContainerFeatures>Login Pessoal</PricingContainerFeatures>
                <PricingContainerFeatures>
                  Para Alunos/Estudantes
                  </PricingContainerFeatures>
                <PricingContainerFeatures>
                  
                  </PricingContainerFeatures>
                <PricingContainerFeatures>
                  <PricingContainerFeaturesItem>
                   
                    </PricingContainerFeaturesItem>
                </PricingContainerFeatures>
                <Button to='/signincliente'>
                  Logar
                </Button >
              </PricingContainerCardInfo>
            </PricingContainerCard>

            <PricingContainerCard >
              <PricingContainerCardInfo>
                <Icon>
                  <FaBriefcase />
                </Icon>
                <PricingContainerFeatures>Login Empresarial</PricingContainerFeatures>
                <PricingContainerFeatures>
                 Para Empresas/Empresarios
                  </PricingContainerFeatures>
                <PricingContainerFeatures>
                  
                  </PricingContainerFeatures>
                <PricingContainerFeatures>
                  <PricingContainerFeaturesItem>
                   
                    </PricingContainerFeaturesItem>
                </PricingContainerFeatures>
                <Button to='/signinempresa'>
                  Logar
                </Button >
              </PricingContainerCardInfo>
            </PricingContainerCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default LoginPaths;