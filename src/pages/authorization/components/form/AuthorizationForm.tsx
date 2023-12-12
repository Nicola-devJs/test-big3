import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { StyledAuthorizationForm } from './styled/StyledAuthorizationForm'
import { Input } from '../../../../UI/input/Input'
import { Button } from '../../../../UI/button/Button'
import { authUserAction } from '../../../../modules/authorization/authorizationThunk'
import { useAppDispatch, useAppSelector } from '../../../../core/redux/hooks'
import { authSlice } from '../../../../modules/authorization/authorizationSlice'
import { RoutesNamePath } from '../../../Routes'

interface IAuthForm {
   login: string
   password: string
}

export const AuthorizationForm: React.FC = () => {
   const { loading, auth } = useAppSelector((state) => state.auth)
   const dispatch = useAppDispatch()
   const navigate = useNavigate()

   const {
      handleSubmit,
      register,
      formState: { errors },
      reset,
   } = useForm<IAuthForm>({ mode: 'onChange' })

   function submitHandler(data: IAuthForm) {
      dispatch(authUserAction(data))
   }

   useEffect(() => {
      if (auth) {
         reset()
         navigate(RoutesNamePath.TEAMS)
      }
      return () => {
         dispatch(authSlice.actions.clearError())
      }
   }, [auth])

   return (
      <StyledAuthorizationForm onSubmit={handleSubmit(submitHandler)}>
         <Input
            {...register('login', {
               required: 'Required',
               minLength: { value: 5, message: 'Less that 5 characters' },
            })}
            type="text"
            label="login"
            errorLabel={errors.login && errors.login.message}
         />
         <Input
            {...register('password', { required: 'Required' })}
            type="password"
            label="password"
            errorLabel={errors.password && errors.password.message}
         />
         <Button width="100%" $loading={loading}>
            Sign In
         </Button>
      </StyledAuthorizationForm>
   )
}
