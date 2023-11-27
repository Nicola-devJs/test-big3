import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IAuthUserResponse } from '../../api/dto/IAuthorization'

interface IItitalState {
   auth: boolean
   user: IAuthUserResponse
   error: string
   isLoading: boolean
}

const initialState = {
   auth: false,
   user: {
      name: '',
      avatarUrl: null,
      token: '',
   },
   error: '',
   isLoading: false,
} as IItitalState

export const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      authLogin: (state, action: PayloadAction<IAuthUserResponse>) => {
         state.auth = true
         state.user = action.payload
         state.error = ''
         state.isLoading = false
      },
      authLoginLoading: (state) => {
         state.isLoading = true
      },
      authLoginError: (state, action: PayloadAction<string>) => {
         state.error = action.payload
         state.isLoading = false
      },
      authLogout: (state) => {
         state.auth = false
         state.user = initialState.user
      },
   },
})

export default authSlice.reducer
