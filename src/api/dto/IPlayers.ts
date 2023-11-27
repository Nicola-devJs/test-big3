export interface IPlayerItem {
   name: string
   number: number
   position: string
   team: number
   birthday: string
   height: number
   weight: number
   avatarUrl: string
   id: number
}

export interface IPlayersResponse {
   data: IPlayerItem[]
   count: number
   page: number
   size: number
}

export interface IGetPlayersParamsQuery {
   name: string
   teamIds: number[]
   page: number
   pageSize: number
}
