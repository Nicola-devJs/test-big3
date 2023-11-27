import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { StyledAuthorizationForm } from './styled/StyledAuthorizationForm'
import { Input } from '../../../../UI/input/Input'
import { Button } from '../../../../UI/button/Button'
import { Checkbox } from '../../../../UI/checkbox/Checkbox'
import { useAppDispatch, useAppSelector } from '../../../../core/redux/hooks'
import { registrUserAction } from '../../../../modules/authorization/authorizationThunk'
import { authSlice } from '../../../../modules/authorization/authorizationSlice'
import { RoutesNamePath } from '../../../Routes'

interface IRegistrForm {
   userName: string
   login: string
   password: string
   passwordAgain: string
   check: boolean
}

export const RegistrationForm: React.FC = () => {
   const { isLoading, auth } = useAppSelector((state) => state.auth)
   const dispatch = useAppDispatch()
   const navigate = useNavigate()
   const {
      handleSubmit,
      register,
      formState: { errors },
      reset,
   } = useForm<IRegistrForm>({ mode: 'onBlur' })

   function submitHandler(data: IRegistrForm) {
      const newUser = {
         userName: data.userName,
         login: data.login,
         password: data.password,
      }
      dispatch(registrUserAction(newUser))
   }

   useEffect(() => {
      if (auth) {
         navigate(RoutesNamePath.TEAMS)
         reset()
      }
      return () => {
         dispatch(authSlice.actions.authLoginError(''))
      }
   }, [auth])

   return (
      <StyledAuthorizationForm onSubmit={handleSubmit(submitHandler)}>
         <Input
            {...register('userName', {
               required: 'Required',
               minLength: { value: 5, message: 'Less that 5 characters' },
            })}
            type="text"
            label="name"
            errorLabel={errors.userName && errors.userName.message}
         />
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
         <Input
            {...register('passwordAgain', {
               required: 'Required',
               validate: (fieldValue, valueForm) =>
                  fieldValue === valueForm.password ||
                  'Password does not match',
            })}
            type="password"
            label="Enter your password again"
            errorLabel={errors.passwordAgain && errors.passwordAgain.message}
         />
         <Checkbox
            {...register('check', {
               required: 'You must be accept the agreement',
            })}
            label="I accept the agreement"
            errorLabel={errors.check && errors.check.message}
         />
         <Button width="100%" $loading={isLoading}>
            Sign Up
         </Button>
      </StyledAuthorizationForm>
   )
}
