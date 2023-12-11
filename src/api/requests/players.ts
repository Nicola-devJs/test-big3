import {
   IGetPlayer,
   IGetPlayersParamsQuery,
   IPlayerItem,
   IPlayersResponse,
} from '../dto/IPlayers'
import { get, post, remove } from '../baseRequest'
import { getStorage } from '../../common/helpers/localStorageHelper'
import { IAuthUserResponse } from '../dto/IAuthorization'
import { IAddPlayer } from '../../common/helpers/interfaces/requestInterfaces/RequestPlayer'

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
      teamIds = [],
   }: IGetPlayersParamsQuery): Promise<IPlayersResponse> {
      // %5B456%5D
      // %5B123%2C%20120%5D
      // %5B456%2C%20652%5D
      // %5B456%2C%20652%2C%20132%5D
      const teamsIdsForat =
         teamIds.map((id) => `%5B${id}`).join('%2C%20') + '%5D'
      return await get(
         `Player/GetPlayers?Page=${page}&PageSize=${pageSize}&teamsIds=${teamsIdsForat}`,
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

   static async getPositions(): Promise<Array<string>> {
      return await get(`Player/GetPositions`, PlayerService.token)
   }
}
