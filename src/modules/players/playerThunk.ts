import { createAsyncThunk } from '@reduxjs/toolkit'
import {
   IGetPlayer,
   IGetPlayersParamsQuery,
   IPlayerItem,
   IPlayersResponse,
} from '../../api/dto/IPlayers'
import { IFetchingRejected } from '../../common/helpers/interfaces/requestInterfaces/RequestBase'
import PlayerService from '../../api/requests/players'
import { IAddPlayer } from '../../common/helpers/interfaces/requestInterfaces/RequestPlayer'

export const fetchingPlayersAction = createAsyncThunk<
   IPlayersResponse,
   IGetPlayersParamsQuery,
   { rejectValue: IFetchingRejected }
>('player/fetchGetTeams', async (params, thunkAPI) => {
   try {
      return await PlayerService.getPlayers(params)
   } catch (e) {
      return thunkAPI.rejectWithValue(e as IFetchingRejected)
   }
})

export const addPlayerAction = createAsyncThunk<
   IPlayerItem,
   IAddPlayer,
   { rejectValue: IFetchingRejected }
>('player/addPlayer', async (newPlayer, thunkAPI) => {
   try {
      return await PlayerService.addPlayer(newPlayer)
   } catch (e) {
      return thunkAPI.rejectWithValue(e as IFetchingRejected)
   }
})

export const getPlayerAction = createAsyncThunk<
   IGetPlayer,
   number,
   { rejectValue: IFetchingRejected }
>('player/getPlayer', async (id, thunkAPI) => {
   try {
      return await PlayerService.getPlayer(id)
   } catch (e) {
      return thunkAPI.rejectWithValue(e as IFetchingRejected)
   }
})

export const deletePlayerAction = createAsyncThunk<
   IPlayerItem,
   number,
   { rejectValue: IFetchingRejected }
>('player/deletePlayer', async (id, thunkAPI) => {
   try {
      return await PlayerService.deletePlayer(id)
   } catch (e) {
      return thunkAPI.rejectWithValue(e as IFetchingRejected)
   }
})
