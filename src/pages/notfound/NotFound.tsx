import React from 'react'
import {
   StyledNotFound,
   NotFoundImg,
   NotFoundTitle,
   NotFoundText,
} from './StyledNotFound'
import notfound from '../../assets/images/404.png'

export const NotFound = () => {
   return (
      <StyledNotFound $direction="column" $justify="center" $align="center">
         <NotFoundImg>
            <img src={notfound} alt="404" />
         </NotFoundImg>
         <NotFoundTitle>Page not found</NotFoundTitle>
         <NotFoundText>
            Sorry, we can’t find what you’re looking for
         </NotFoundText>
      </StyledNotFound>
   )
}
