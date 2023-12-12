export interface IAddTeam {
   name: string
   foundationYear: number
   division: string
   conference: string
   imageUrl: string
}

export interface IUpdateTeam extends IAddTeam {
   id: number
}
