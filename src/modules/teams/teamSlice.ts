import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ITeamsResponse, ITeamItem } from '../../api/dto/ITeams'
import {
   fetchingTeamsAction,
   fetchGetTeamAction,
   deleteTeamAction,
   addTeamAction,
} from './teamThunk'
import { IFetchingRejected } from '../../common/helpers/interfaces/requestInterfaces/RequestBase'

interface ITeamsState {
   body: ITeamsResponse
   currentTeam: ITeamItem
   sortedTeam: ITeamItem[]
   loading: boolean
   error: IFetchingRejected | undefined
}

const initialState = {
   body: { count: 0, data: [] as ITeamItem[], page: 1, size: 6 },
   currentTeam: {} as ITeamItem,
   sortedTeam: [],
   loading: false,
   error: undefined,
} as ITeamsState

export const teamSlice = createSlice({
   name: 'team',
   initialState,
   reducers: {
      teamsSearchQuery: (state, action: PayloadAction<string>) => {
         if (action.payload) {
            state.sortedTeam = state.body.data.filter((team) =>
               team.name.toLowerCase().includes(action.payload.toLowerCase())
            )
         } else {
            state.sortedTeam = state.body.data
         }
      },
   },
   extraReducers(builder) {
      builder
         .addCase(fetchingTeamsAction.pending, (state) => {
            state.loading = true
         })
         .addCase(fetchingTeamsAction.fulfilled, (state, action) => {
            state.loading = false
            state.body = action.payload
            state.sortedTeam = action.payload.data
            state.error = undefined
         })
         .addCase(fetchingTeamsAction.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
         })
         .addCase(fetchGetTeamAction.pending, (state) => {
            state.loading = true
         })
         .addCase(fetchGetTeamAction.fulfilled, (state, action) => {
            state.loading = false
            state.currentTeam = action.payload
         })
         .addCase(addTeamAction.pending, (state) => {
            state.loading = true
         })
         .addCase(addTeamAction.fulfilled, (state, action) => {
            state.loading = false
            state.body.data.push(action.payload)
         })
         .addCase(deleteTeamAction.pending, (state) => {
            state.loading = true
         })
         .addCase(deleteTeamAction.fulfilled, (state, action) => {
            state.loading = false
            state.body.data.filter((team) => team.id !== action.payload.id)
         })
   },
})

export default teamSlice.reducer