import AuthService from '../../api/requests/authorization'
import { setStorage } from '../../common/helpers/localStorageHelper'
import {
   IAuthUser,
   IRegistrUser,
} from '../../common/helpers/interfaces/requestInterfaces/RequestAuth'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { IAuthUserResponse } from '../../api/dto/IAuthorization'

export const authUserAction = createAsyncThunk<
   IAuthUserResponse,
   IAuthUser,
   { rejectValue: string }
>('auth/authorizationUser', async (loginUser, thunkAPI) => {
   try {
      const userData = await AuthService.signIn(loginUser)
      setStorage('user', { ...userData })
      return userData
   } catch (e) {
      return thunkAPI.rejectWithValue(
         'User with the specified username / password was not found.'
      )
   }
})

export const registrUserAction = createAsyncThunk<
   IAuthUserResponse,
   IRegistrUser,
   { rejectValue: string }
>('auth/registrationUser', async (loginUser, thunkAPI) => {
   try {
      const userData = await AuthService.signUp(loginUser)
      setStorage('user', { ...userData })
      return userData
   } catch (e) {
      return thunkAPI.rejectWithValue('Failed to register user')
   }
})
