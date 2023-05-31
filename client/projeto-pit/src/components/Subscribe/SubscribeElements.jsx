import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import backgroundImage from '../../assets/wave.png'; // Importe sua imagem de background


export const PricingSection = styled.div`
      min-height: 100vh; // Alterado de height para min-height
  width: 100%;
  padding: 100px 0 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url(${backgroundImage});
  background-size: cover; // Adicionado para cobrir todo o espaço
`;

export const PricingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;

  @media screen and (max-width: 960px) {
    align-items: center;
  }
`;

export const PricingContainerCard = styled.a`
  background: linear-gradient(45deg, #000 0%, #000 25%, #000 50%, #000 100%);
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.7);
  width: 280px;
  height: 500px;
  text-decoration: none;
  border-radius: 4px;
  margin: 0 24px;

  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: #1c2237;
  }

  @media screen and (max-width: 960px) {
    width: 90%;
    margin: 24px;
  }
`;

export const PricingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin: 0 auto;
`;

export const PricingHeading = styled.h1`
  color: #fff;
  margin-bottom: 24px;
`;

export const PricingContainerCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  padding: 24px;
  align-items: center;
  color: #fff;

  h3 {
    margin-bottom: 5px;
    font-size: 24px;
  }

  h4 {
    font-size: 40px;
  }

  p {
    font-size: 14px;
    margin-bottom: 24px;
  }
`;

export const PricingContainerFeatures = styled.ul`
  font-size: 20px;
  margin: 16px 0 32px;
  list-style: none;
`;

export const PricingContainerFeaturesItem = styled.li`
  margin-bottom: 10px;
`;

export const Icon = styled.div`
  margin: 24px 0;
`;

export const ResponsiveContainer = styled.div`
  @media screen and (max-width: 960px) {
    ${PricingContainer} {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
    }

    ${PricingContainerCard}:nth-child(2) {
      transform: scale(1);
      background: #242424;
      margin: 24px auto;
    }

    ${PricingContainerCard}:hover {
      transform: none;
    }
  }
`;

export const Button = styled(LinkR)`
  background: #edac5a;
  width: 200px;
  text-align: center;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    background: #fff;
    color: #000;
    transition: 0.3s ease-in-out;
  }
`;