import React from 'react'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems,
        FooterLinkTitle, FooterLink, WebsiteRights } from './FooterElements';
import {animateScroll as scroll} from 'react-scroll'


const handleClick1 = () => {
    window.location.href='https://facebook.com';
  }
  const handleClick2 = () => {
    window.location.href='https://instagram.com';
  }

  const toggleHome = () => {
    scroll.scrollToTop();
}

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>

            <FooterLinksWrapper>
            <FooterLinkItems>
                    <FooterLinkTitle>Navigacija</FooterLinkTitle>
                        <FooterLink to='home' onClick={toggleHome}>Pradžia</FooterLink>
                        <FooterLink to='about'>Apie</FooterLink>
                        <FooterLink to='goal'>Mūsų tikslas</FooterLink>
                        <FooterLink to='partners'>Partneriai</FooterLink>
                </FooterLinkItems>
            </FooterLinksWrapper>

            <FooterLinksWrapper>
                <FooterLinkItems>
                    <FooterLinkTitle>Socialinė žiniasklaida</FooterLinkTitle>
                        <FooterLink onClick={handleClick1}>Facebook</FooterLink>
                        <FooterLink onClick={handleClick2}>Instagram</FooterLink>
                </FooterLinkItems>
            </FooterLinksWrapper>
            
        </FooterLinksContainer>
        <WebsiteRights>Recyclathon © {new Date().getFullYear()}</WebsiteRights>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
