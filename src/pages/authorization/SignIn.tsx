import React from 'react'
import {
   StyledAuth,
   AuthContent,
   AuthTitle,
   AuthImg,
   AuthImgContainer,
   AuthIsMember,
} from './components/styled/StyledAuthorization'
import { AppLink } from '../../UI/link/AppLink'
import { RoutesNamePath } from '../Routes'
import { AuthorizationForm } from './components/form/AuthorizationForm'
import { useAppSelector } from '../../core/redux/hooks'

export const SignIn: React.FC = () => {
   const { error } = useAppSelector((state) => state.auth)
   return (
      <StyledAuth $error={error}>
         <AuthContent $direction="column" $justify="center" $align="flex-start">
            <AuthTitle>Sign In</AuthTitle>
            <AuthorizationForm />
            <AuthIsMember>
               Not a member yet?{' '}
               {<AppLink path={RoutesNamePath.SIGNUP}>Sign up</AppLink>}
            </AuthIsMember>
         </AuthContent>
         <AuthImgContainer $justify="center" $align="center">
            <AuthImg $auth />
         </AuthImgContainer>
      </StyledAuth>
   )
}
