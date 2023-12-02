import React from 'react'
import MediaQuery from 'react-responsive'
import {
   StyledSidebar,
   SidebarNavbar,
   SidebarMenuList,
   SidebarMenuItem,
   SidebarLogout,
   StyledSidebarProps,
   SidebarWrapperProfile,
} from './StyledSidebar'
import { RoutesNamePath } from '../../pages/Routes'
import { useAppDispatch } from '../../core/redux/hooks'
import { authSlice } from '../../modules/authorization/authorizationSlice'
import { Profile } from '../profile/Profile'

interface SidebarProps extends StyledSidebarProps {
   closeMobileMenu: () => void
}

export const Sidebar: React.FC<SidebarProps> = ({
   $visibleMenu,
   closeMobileMenu,
}) => {
   const dispatch = useAppDispatch()

   function signOutHandler() {
      closeMobileMenu()
      dispatch(authSlice.actions.authLogout())
      localStorage.removeItem('user')
   }

   return (
      <StyledSidebar $visibleMenu={$visibleMenu}>
         <SidebarNavbar
            $direction="column"
            $justify="space-between"
            $align="center"
         >
            <MediaQuery maxWidth={768}>
               <SidebarWrapperProfile>
                  <Profile
                     sizeAvatar={48}
                     fontSize={15}
                     direction="row-reverse"
                     gap="8px"
                  />
               </SidebarWrapperProfile>
            </MediaQuery>
            <SidebarMenuList $direction="column">
               <SidebarMenuItem
                  to={RoutesNamePath.TEAMS}
                  className="icon-team"
                  onClick={closeMobileMenu}
               >
                  Teams
               </SidebarMenuItem>
               <SidebarMenuItem
                  to={RoutesNamePath.PLAYERS}
                  className="icon-player"
                  onClick={closeMobileMenu}
               >
                  Players
               </SidebarMenuItem>
            </SidebarMenuList>
            <SidebarLogout
               to={RoutesNamePath.SIGNIN}
               className="icon-logout"
               onClick={signOutHandler}
               replace={true}
            >
               Sign out
            </SidebarLogout>
         </SidebarNavbar>
      </StyledSidebar>
   )
}
