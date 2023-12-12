import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IAuthUserResponse } from '../../api/dto/IAuthorization'
import { authUserAction, registrUserAction } from './authorizationThunk'

interface IItitalState {
   auth: boolean
   user: IAuthUserResponse
   error: string | undefined
   loading: boolean
}

const initialState = {
   auth: false,
   user: {
      name: '',
      avatarUrl: null,
      token: '',
   },
   error: undefined,
   loading: false,
} as IItitalState

export const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      authLogin: (state, action: PayloadAction<IAuthUserResponse>) => {
         state.auth = true
         state.user = action.payload
      },
      authLogout: (state) => {
         state.auth = false
         state.user = initialState.user
      },
      clearError: (state) => {
         state.error = ''
      },
   },
   extraReducers(builder) {
      builder
         .addCase(authUserAction.pending, (state) => {
            state.loading = true
         })
         .addCase(authUserAction.fulfilled, (state, action) => {
            state.auth = true
            state.loading = false
            state.user = action.payload
         })
         .addCase(authUserAction.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
         })
         .addCase(registrUserAction.pending, (state) => {
            state.loading = true
         })
         .addCase(registrUserAction.fulfilled, (state, action) => {
            state.auth = true
            state.loading = false
            state.user = action.payload
         })
         .addCase(registrUserAction.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
         })
   },
})

export default authSlice.reducer
