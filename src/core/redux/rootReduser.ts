import { combineReducers } from '@reduxjs/toolkit'
import authReduser from '../../modules/authorization/authorizationSlice'

export const rootReduser = combineReducers({
   auth: authReduser,
})
