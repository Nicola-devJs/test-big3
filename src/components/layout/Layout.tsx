import React from 'react'
import { Header } from '../header/Header'
import { Sidebar } from '../sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import { RequiredAuth } from '../../hoc/RequiredAuth'
import { StyledLayout, LayoutWrapperMain } from './StyledLayout'
export const Layout: React.FC = () => {
   return (
      <StyledLayout $direction="column">
         <Header />
         <LayoutWrapperMain>
            <Sidebar />
            <RequiredAuth>
               <Outlet />
            </RequiredAuth>
         </LayoutWrapperMain>
      </StyledLayout>
   )
}
