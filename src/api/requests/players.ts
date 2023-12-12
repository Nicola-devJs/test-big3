import {
   IGetPlayer,
   IGetPlayersParamsQuery,
   IPlayerItem,
   IPlayersResponse,
} from '../dto/IPlayers'
import { get, post, put, remove } from '../baseRequest'
import { getStorage } from '../../common/helpers/localStorageHelper'
import { IAuthUserResponse } from '../dto/IAuthorization'
import {
   IAddPlayer,
   IUpdatePlayer,
} from '../../common/helpers/interfaces/requestInterfaces/RequestPlayer'

export default class PlayerService {
   private static get token() {
      const { token } = getStorage<IAuthUserResponse>(
         'user'
      ) as IAuthUserResponse
      return token
   }

   static async getPlayers({
      page = 1,
      pageSize = 6,
      teamId,
   }: IGetPlayersParamsQuery): Promise<IPlayersResponse> {
      const paramCurrentTeam = teamId ? `TeamIds=${teamId}` : ''

      return await get(
         `Player/GetPlayers?Page=${page}&PageSize=${pageSize}&${paramCurrentTeam}`,
         PlayerService.token
      )
   }

   static async getPlayer(id: number): Promise<IGetPlayer> {
      return await get(`Player/Get?id=${id}`, PlayerService.token)
   }

   static async addPlayer(newPlayer: IAddPlayer): Promise<IPlayerItem> {
      return await post(`Player/Add`, newPlayer, PlayerService.token)
   }

   static async deletePlayer(id: number): Promise<IPlayerItem> {
      return await remove(`Player/Delete?id=${id}`, PlayerService.token)
   }

   static async updatePlayer(
      updatePlayer: IUpdatePlayer
   ): Promise<IPlayerItem> {
      return await put(`Player/Update`, updatePlayer, PlayerService.token)
   }

   static async getPositions(): Promise<Array<string>> {
      return await get(`Player/GetPositions`, PlayerService.token)
   }
}
