import React from 'react'
import { StyledMain, MainBody } from './StyledMain'

interface MainProps {
   children: React.ReactNode | React.ReactElement
}

export const Main: React.FC<MainProps> = ({ children }) => {
   return (
      <StyledMain as="main">
         <MainBody $direction="column">{children}</MainBody>
      </StyledMain>
   )
}
