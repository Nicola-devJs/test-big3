import React from 'react'
import {
   StyledHeader,
   HeaderLogo,
   HeaderProfile,
   HeaderProfileAvatar,
   HeaderProfileName,
} from './StyledHeader'
import logo from '../../assets/images/logo.png'
import { useAppSelector } from '../../core/redux/hooks'

export const Header = () => {
   const { user } = useAppSelector((state) => state.auth)
   return (
      <StyledHeader $justify="space-between" $align="center">
         <HeaderLogo src={logo} alt="logo" />
         <HeaderProfile $align="center">
            <HeaderProfileName>{user.name}</HeaderProfileName>
            <HeaderProfileAvatar $avatar={user.avatarUrl} />
         </HeaderProfile>
      </StyledHeader>
   )
}
