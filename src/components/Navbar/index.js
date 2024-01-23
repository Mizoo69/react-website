import React, {useState, useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, Navlogo, MobileIcon, NavMenu, NavItem, NavLinks} from './NavbarElements'
import {animateScroll as scroll} from 'react-scroll'

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)
    const changeNav = () => {
        if(window.scrollY >= 80){
            setScrollNav(true)
        }
        else{
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
    <Nav scrollNav={scrollNav}>
        <NavbarContainer>
            <Navlogo to='home' onClick={toggleHome}>Recyclathon</Navlogo>
            <MobileIcon onClick={toggle}>
                <FaBars />
            </MobileIcon>
            <NavMenu>
                <NavItem>
                    <NavLinks to='about' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Apie</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to='goal' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Mūsų tikslas</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to='partners' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Partneriai</NavLinks>
                </NavItem>
            </NavMenu>
        </NavbarContainer>
    </Nav>
    </>
  )
}

export default Navbar
