import { createAsyncThunk } from '@reduxjs/toolkit'
import {
   IGetTeamsParamsQuery,
   ITeamItem,
   ITeamsResponse,
} from '../../api/dto/ITeams'
import TeamsService from '../../api/requests/teams'
import { IFetchingRejected } from '../../common/helpers/interfaces/requestInterfaces/RequestBase'
import { ITeamAdd } from '../../common/helpers/interfaces/requestInterfaces/RequestTeam'

export const fetchingTeamsAction = createAsyncThunk<
   ITeamsResponse,
   IGetTeamsParamsQuery,
   { rejectValue: IFetchingRejected }
>('team/fetchGetTeams', async (params, thunkAPI) => {
   try {
      return await TeamsService.getTeams(params)
   } catch (e) {
      return thunkAPI.rejectWithValue(e as IFetchingRejected)
   }
})

export const fetchGetTeamAction = createAsyncThunk<
   ITeamItem,
   number,
   { rejectValue: IFetchingRejected }
>('team/fetchGetTeam', async (id, thunkAPI) => {
   try {
      return await TeamsService.getTeam(id)
   } catch (e) {
      return thunkAPI.rejectWithValue(e as IFetchingRejected)
   }
})

export const deleteTeamAction = createAsyncThunk<
   ITeamItem,
   number,
   { rejectValue: IFetchingRejected }
>('team/deleteTeam', async (id, thunkAPI) => {
   try {
      return await TeamsService.deleteTeam(id)
   } catch (e) {
      return thunkAPI.rejectWithValue(e as IFetchingRejected)
   }
})

export const addTeamAction = createAsyncThunk<
   ITeamItem,
   ITeamAdd,
   { rejectValue: IFetchingRejected }
>('team/addTeam', async (newTeam, thunkAPI) => {
   try {
      return await TeamsService.addTeam(newTeam)
   } catch (e) {
      return thunkAPI.rejectWithValue(e as IFetchingRejected)
   }
})
