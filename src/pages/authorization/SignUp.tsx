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
import { RegistrationForm } from './components/form/RegistrationForm'
import { useAppSelector } from '../../core/redux/hooks'

export const SignUp: React.FC = () => {
   const { error } = useAppSelector((state) => state.auth)
   return (
      <StyledAuth $error={error}>
         <AuthContent $direction="column" $justify="center" $align="flex-start">
            <AuthTitle>Sign Up</AuthTitle>
            <RegistrationForm />
            <AuthIsMember>
               Already a member?{' '}
               {<AppLink path={RoutesNamePath.SIGNIN}>Sign in</AppLink>}
            </AuthIsMember>
         </AuthContent>
         <AuthImgContainer $justify="center" $align="center">
            <AuthImg />
         </AuthImgContainer>
      </StyledAuth>
   )
}
