import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import {
   IGetPlayer,
   IPlayerItem,
   IPlayersResponse,
} from '../../api/dto/IPlayers'
import { IFetchingRejected } from '../../common/helpers/interfaces/requestInterfaces/RequestBase'
import {
   addPlayerAction,
   deletePlayerAction,
   fetchingPlayersAction,
   getPlayerAction,
} from './playerThunk'
import { IOptionItem } from '../../UI/select/AppSelect'

interface IPlayersState {
   body: IPlayersResponse
   currentPlayer: IGetPlayer
   sortedPlayers: IPlayerItem[]
   loading: boolean
   error: IFetchingRejected | undefined
}

const initialState: IPlayersState = {
   body: { count: 0, data: [], page: 1, size: 6 },
   currentPlayer: {} as IGetPlayer,
   sortedPlayers: [],
   loading: false,
   error: undefined,
}

export const playerSlice = createSlice({
   name: 'player',
   initialState,
   reducers: {
      playersSearchQuery: (state, action: PayloadAction<string>) => {
         if (action.payload) {
            state.sortedPlayers = state.body.data.filter((player) =>
               player.name.toLowerCase().includes(action.payload.toLowerCase())
            )
         } else {
            state.sortedPlayers = state.body.data
         }
      },
      sortedPlayersByTeams: (state, action: PayloadAction<IOptionItem>) => {
         if (action.payload) {
            state.sortedPlayers = state.body.data.filter(
               (player) => action.payload.value === player.team
            )
            console.log(state.sortedPlayers)
         } else {
            state.sortedPlayers = state.body.data
         }
      },
   },
   extraReducers(builder) {
      builder
         .addCase(fetchingPlayersAction.pending, (state) => {
            state.loading = true
         })
         .addCase(fetchingPlayersAction.fulfilled, (state, action) => {
            state.loading = false
            state.body = action.payload
            state.sortedPlayers = action.payload.data
         })
         .addCase(fetchingPlayersAction.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
         })
         .addCase(addPlayerAction.pending, (state) => {
            state.loading = true
         })
         .addCase(addPlayerAction.fulfilled, (state, action) => {
            state.loading = false
            state.body.data.push(action.payload)
         })
         .addCase(getPlayerAction.pending, (state) => {
            state.loading = true
         })
         .addCase(getPlayerAction.fulfilled, (state, action) => {
            state.loading = false
            state.currentPlayer = action.payload
         })
         .addCase(deletePlayerAction.pending, (state) => {
            state.loading = true
         })
         .addCase(deletePlayerAction.fulfilled, (state, action) => {
            state.loading = false
            state.body.data.filter((player) => player.id !== action.payload.id)
         })
   },
})

export default playerSlice.reducer
