import { AppDispatch } from '../../core/redux/store'
import { authSlice } from './authorizationSlice'
import { IAuthUser, IRegistrUser } from '../../api/dto/IAuthorization'
import AuthService from '../../api/requests/authorization'
import { setStorage } from '../../utils/localStorageHelper'

export const authUserAction =
   (user: IAuthUser) => async (dispath: AppDispatch) => {
      try {
         dispath(authSlice.actions.authLoginLoading())
         const response = await AuthService.signIn(user)
         dispath(authSlice.actions.authLogin(response.data))
         setStorage('user', { ...response.data })
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
         const response = await AuthService.signUp(user)
         dispath(authSlice.actions.authLogin(response.data))
         setStorage('user', { ...response.data })
      } catch (e) {
         dispath(authSlice.actions.authLoginError('Failed to register user'))
      }
   }
