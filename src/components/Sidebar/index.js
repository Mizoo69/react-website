import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink } from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
            <SidebarLink to='about' onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-80}>Apie</SidebarLink>
            <SidebarLink to='goal' onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-80}>Mūsų tikslas</SidebarLink>
            <SidebarLink to='partners' onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-80}>Partneriai</SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
