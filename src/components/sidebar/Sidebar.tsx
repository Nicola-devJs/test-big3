import React from 'react'
import {
   StyledSidebar,
   SidebarNavbar,
   SidebarMenuList,
   SidebarMenuItem,
   SidebarLogout,
} from './StyledSidebar'
import { RoutesNamePath } from '../../pages/Routes'
import { useAppDispatch } from '../../core/redux/hooks'
import { authSlice } from '../../modules/authorization/authorizationSlice'
export const Sidebar = () => {
   const dispatch = useAppDispatch()

   function signOutHandler() {
      dispatch(authSlice.actions.authLogout())
      localStorage.removeItem('user')
   }

   return (
      <StyledSidebar>
         <SidebarNavbar
            $direction="column"
            $justify="space-between"
            $align="center"
         >
            <SidebarMenuList $direction="column">
               <SidebarMenuItem to={RoutesNamePath.TEAMS} className="icon-team">
                  Teams
               </SidebarMenuItem>
               <SidebarMenuItem
                  to={RoutesNamePath.PLAYERS}
                  className="icon-player"
               >
                  Players
               </SidebarMenuItem>
            </SidebarMenuList>
            <SidebarLogout
               to={RoutesNamePath.SIGNIN}
               className="icon-logout"
               onClick={signOutHandler}
            >
               Sign out
            </SidebarLogout>
         </SidebarNavbar>
      </StyledSidebar>
   )
}
