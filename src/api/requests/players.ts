import axios, { AxiosResponse } from 'axios'
import { IGetPlayersParamsQuery, IPlayersResponse } from '../dto/IPlayers'

export default class PlayersService {
   static async getPlayers(
      paramsPlayers: IGetPlayersParamsQuery
   ): Promise<AxiosResponse<IPlayersResponse>> {
      return await axios.get(
         'http://dev.trainee.dex-it.ru/api/Player/GetPlayers',
         {
            params: {
               _Name: paramsPlayers.name,
               _TeamIds: paramsPlayers.teamIds,
               _Page: paramsPlayers.page,
               _PageSize: paramsPlayers.pageSize,
            },
         }
      )
   }
}
