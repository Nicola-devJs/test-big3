import React from 'react'
import { StyledHeader, HeaderLogo, HeaderMobileMenu } from './StyledHeader'
import logo from '../../assets/images/logo.png'
import MediaQuery from 'react-responsive'
import { Profile } from '../profile/Profile'

interface HeaderProps {
   toggleMenuHandel: () => void
}

export const Header: React.FC<HeaderProps> = ({ toggleMenuHandel }) => {
   return (
      <StyledHeader $justify="space-between" $align="center">
         <MediaQuery maxWidth={768}>
            <HeaderMobileMenu onClick={toggleMenuHandel}>
               <span></span>
            </HeaderMobileMenu>
         </MediaQuery>
         <HeaderLogo src={logo} alt="logo" />
         <MediaQuery minWidth={769}>
            <Profile />
         </MediaQuery>
      </StyledHeader>
   )
}
