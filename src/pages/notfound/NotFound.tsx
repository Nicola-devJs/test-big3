import React from 'react'
import { StyledNotFound } from './StyledNotFound'
import notfound from '../../assets/images/404.png'
import { ErrorContent } from '../../common/components/errorContent/ErrorContent'

export const NotFound = () => {
   return (
      <StyledNotFound $direction="column" $justify="center" $align="center">
         <ErrorContent
            $sizeImg={{ w: 380, h: 212 }}
            img={notfound}
            title="Page not found"
            text="Sorry, we can’t find what you’re looking for"
         />
      </StyledNotFound>
   )
}
