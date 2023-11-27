import axios, { AxiosResponse } from 'axios'
import { IGetTeamsParamsQuery, ITeamsResponse } from '../dto/ITeams'

export default class TeamsService {
   static async getTeams(
      paramsTeams: IGetTeamsParamsQuery
   ): Promise<AxiosResponse<ITeamsResponse>> {
      return await axios.get('http://dev.trainee.dex-it.ru/api/Team/GetTeams', {
         params: {
            _Name: paramsTeams.name,
            _Page: paramsTeams.page,
            _PageSize: paramsTeams.pageSize,
         },
      })
   }
}
