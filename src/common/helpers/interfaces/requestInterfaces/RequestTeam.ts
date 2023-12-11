export interface ITeamAdd {
   name: string
   foundationYear: number
   division: string
   conference: string
   imageUrl: string
}

export interface ITeamUpdate extends ITeamAdd {
   id: number
}
