import { AppDispatch } from '../../core/redux/store'
import { authSlice } from './authorizationSlice'
import AuthService from '../../api/requests/authorization'
import { setStorage } from '../../common/helpers/localStorageHelper'
import {
   IAuthUser,
   IRegistrUser,
} from '../../common/helpers/interfaces/requestInterfaces/RequestAuth'

export const authUserAction =
   (user: IAuthUser) => async (dispath: AppDispatch) => {
      try {
         dispath(authSlice.actions.authLoginLoading())
         const data = await AuthService.signIn(user)
         dispath(authSlice.actions.authLogin(data))
         setStorage('user', { ...data })
      } catch (e) {
         dispath(
            authSlice.actions.authLoginError(
               'User with the specified username / password was not found.'
            )
         )
      }
   }

export const registrUserAction =
   (user: IRegistrUser) => async (dispath: AppDispatch) => {
      try {
         dispath(authSlice.actions.authLoginLoading())
         const data = await AuthService.signUp(user)
         dispath(authSlice.actions.authLogin(data))
         setStorage('user', { ...data })
      } catch (e) {
         dispath(authSlice.actions.authLoginError('Failed to register user'))
      }
   }
