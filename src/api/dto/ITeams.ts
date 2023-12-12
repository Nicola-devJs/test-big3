export interface ITeamItem {
   name: string
   foundationYear: number
   division: string
   conference: string
   imageUrl: string
   id: number
}

export interface ITeamsResponse {
   data: ITeamItem[]
   count: number
   page: number
   size: number
}

export interface IGetTeamsParamsQuery {
   page?: number
   pageSize?: number
}
