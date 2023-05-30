import svgImg1 from '../../assets/svg5.svg';
import svgImg2 from '../../assets/svg4.svg';
import svgImg3 from '../../assets/svg3.svg';

import { Link } from 'react-router-dom';

export const homeObjOne = {
  id: 'about',
  lightBg: false,
  lightText: true,
  lighttextDesc: true,
  topLine: ' ',
  headline: 'Conheça os nossos desenvolvedores ',
  description:
    ' Vizualize aqui os envolvidos nesse projeto que esta trazendo para voce, estudante ou empresario oportunidade novas.',
  buttonLabel: 'Veja Aqui',
  imgStart: false,
  img: svgImg1,
  alt: 'car',
  dark: true,
  primary: true,
  darkText: false,
};

export const homeObjTwo = {
  id: 'discover',
  lightBg: true,
  lightText: false,
  lighttextDesc: false,
  topLine: '',
  headline: 'Entrevistas e dúvidas',
  description:
    ' Consulte sua empresa e agende entrevistas com os candidatos a suas vagas de forma eficiente.',
  buttonLabel: 'Veja mais',
  imgStart: true,
  img: svgImg2,
  alt: 'Piggybanck',
  dark: true,
  primary: true,
  darkText: true,
};

export const homeObjThree = {
  id: 'signup',
  lightBg: true,
  lightText: false,
  lighttextDesc: false,
  topLine: '',
  headline: 'Cadastre A Sua Empresa',
  description:
    'Esta procurando um funcionario? Cadastre aqui a sua empresa e receba oportunidades que podem alavancar seu comercio.',
  buttonLabel: <Link to="/signup">Cadastre-se</Link>,
  imgStart: false,
  img: svgImg3,
  alt: 'car',
  dark: true,
  primary: true,
  darkText: true,
};
