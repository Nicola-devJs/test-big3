import React from 'react'
import { StyledLoading, LoadingWrapper } from './StyledLoading'

export const Loading = () => {
   return (
      <LoadingWrapper $align="center" $justify="center">
         <StyledLoading />
      </LoadingWrapper>
   )
}
