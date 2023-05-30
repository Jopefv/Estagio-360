import React, {useState, useEffect} from 'react'
import { FaBars } from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavLinks, NavItem, NavBtn, NavBtnLink, Img, NavBtnLinkRoute } from './NavbarElements'
import { animateScroll as scroll } from 'react-scroll';
import logo from '../../assets/logo.png';

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false)
  const changeNav = () => {
    if(window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <>
    <IconContext.Provider value={{ color: '#fff'}}>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
        <Img src={logo} alt="Imagem" className="image" to='/' onClick={toggleHome}/>
          <NavLogo to='/' onClick={toggleHome}>Estagio360</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='about' smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                Sobre
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='discover' smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                Estagios
                </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='services' smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                Services
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks>
                <NavBtnLinkRoute to='/signup'smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                  Cadastre-se
                </NavBtnLinkRoute>
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/signinpath'>Login</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
    </>
  )
}

export default Navbar