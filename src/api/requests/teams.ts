import {
   IAddTeam,
   IUpdateTeam,
} from '../../common/helpers/interfaces/requestInterfaces/RequestTeam'
import { getStorage } from '../../common/helpers/localStorageHelper'
import { get, remove, post, put } from '../baseRequest'
import { IAuthUserResponse } from '../dto/IAuthorization'
import { IGetTeamsParamsQuery, ITeamsResponse, ITeamItem } from '../dto/ITeams'

export default class TeamsService {
   private static get token() {
      const { token } = getStorage<IAuthUserResponse>(
         'user'
      ) as IAuthUserResponse
      return token
   }

   static async getTeams({
      page = 1,
      pageSize = 6,
   }: IGetTeamsParamsQuery): Promise<ITeamsResponse> {
      return await get(
         `Team/GetTeams?Page=${page}&PageSize=${pageSize}`,
         TeamsService.token
      )
   }

   static async getTeam(id: number): Promise<ITeamItem> {
      return await get(`Team/Get?id=${id}`, TeamsService.token)
   }

   static async addTeam(newTeam: IAddTeam): Promise<ITeamItem> {
      return await post(`Team/Add`, newTeam, TeamsService.token)
   }

   static async deleteTeam(id: number): Promise<ITeamItem> {
      return await remove(`Team/Delete?id=${id}`, TeamsService.token)
   }

   static async updateTeam(updateTeam: IUpdateTeam): Promise<ITeamItem> {
      return await put(`Team/Update`, updateTeam, TeamsService.token)
   }
}
