import { combineReducers } from '@reduxjs/toolkit'
import authReduser from '../../modules/authorization/authorizationSlice'
import teamReducer from '../../modules/teams/teamSlice'
import playerReducer from '../../modules/players/playerSlice'

export const rootReduser = combineReducers({
   auth: authReduser,
   team: teamReducer,
   player: playerReducer,
})
