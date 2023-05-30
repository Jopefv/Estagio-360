import React from 'react'
import Icon1 from '../../assets/svg-1.svg'
import Icon2 from '../../assets/svg-2.svg'
import Icon3 from '../../assets/svg3.svg'
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServiceElements'

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Our services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1}/>
          <ServicesH2>Locais de oferta </ServicesH2>
          <ServicesP>Aqui você poderá acessar e visualizar diversas ofertas disponíveis perto de sua casa, na sua região e em por todo o país.</ServicesP>
        </ServicesCard>
        <ServicesCard>
        <ServicesIcon src={Icon2}/>
          <ServicesH2>Entrevistas e dúvidas</ServicesH2>
          <ServicesP>Consulte sua empresa e agende entrevistas com os candidatos a suas vagas de forma eficiente.</ServicesP>
        </ServicesCard>
        <ServicesCard >
          <ServicesIcon src={Icon3}/>
          <ServicesH2>Facilidade de Busca</ServicesH2>
          <ServicesP> Nosso projeto disponibiliza uma busca voltada a filtragem, no qual lhe auxiliará na busca pelo seu estágio de forma adaptada e congruente.</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services