import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import MediaQuery from 'react-responsive'
import { Header } from '../header/Header'
import { Sidebar } from '../sidebar/Sidebar'
import { RequiredAuth } from '../../common/hoc/RequiredAuth'
import {
   StyledLayout,
   LayoutWrapperMain,
   OverlayToOpenMenu,
} from './StyledLayout'
export const Layout: React.FC = () => {
   const [isOpenMenu, setOpenMenu] = useState(false)

   const toggleMenuHandel = () => {
      setOpenMenu((prev) => !prev)
   }

   return (
      <StyledLayout $direction="column">
         <Header toggleMenuHandel={toggleMenuHandel} />
         <LayoutWrapperMain>
            <Sidebar
               $visibleMenu={isOpenMenu}
               closeMobileMenu={toggleMenuHandel}
            />
            <RequiredAuth>
               <Outlet />
            </RequiredAuth>
            <MediaQuery maxWidth={768}>
               <OverlayToOpenMenu
                  $activeMenu={isOpenMenu}
                  onClick={toggleMenuHandel}
               />
            </MediaQuery>
         </LayoutWrapperMain>
      </StyledLayout>
   )
}
