import React from 'react';
import { MdBoy } from 'react-icons/md';
import { FaBriefcase } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { PricingContainer, PricingContainerCard, PricingContainerCardInfo, PricingContainerFeatures, PricingContainerFeaturesItem, PricingHeading, PricingSection, PricingWrapper, Icon, Button} from './SubscribeElements.jsx';



function Pricing() {
  
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Escolha o tipo de cadastro
          </PricingHeading>
          <PricingContainer>
            <PricingContainerCard to='/sign-up'>
              <PricingContainerCardInfo>
                <Icon>
                  <MdBoy />
                </Icon>
                <PricingContainerFeatures>Cadastro Pessoal</PricingContainerFeatures>
                <PricingContainerFeatures>
                  Aluno/Estudante
                  </PricingContainerFeatures>
                <PricingContainerFeatures>
                  
                  </PricingContainerFeatures>
                <PricingContainerFeatures>
                  <PricingContainerFeaturesItem>
                   
                    </PricingContainerFeaturesItem>
                </PricingContainerFeatures>
                <Button to='/signupcliente'>
                  Cadastrar
                </Button >
              </PricingContainerCardInfo>
            </PricingContainerCard>

            <PricingContainerCard >
              <PricingContainerCardInfo>
                <Icon>
                  <FaBriefcase />
                </Icon>
                <PricingContainerFeatures>Cadastro Empresarial</PricingContainerFeatures>
                <PricingContainerFeatures>
                  Empresa/Empresario
                  </PricingContainerFeatures>
                <PricingContainerFeatures>
                  
                  </PricingContainerFeatures>
                <PricingContainerFeatures>
                  <PricingContainerFeaturesItem>
                   
                    </PricingContainerFeaturesItem>
                </PricingContainerFeatures>
                <Button to='/signupempresa'>
                  Cadastrar
                </Button >
              </PricingContainerCardInfo>
            </PricingContainerCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;