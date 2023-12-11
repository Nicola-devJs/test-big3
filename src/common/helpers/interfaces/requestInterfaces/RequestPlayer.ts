export interface IAddPlayer {
   name: string
   number: number
   position: string
   team: number
   birthday: string
   height: number
   weight: number
   avatarUrl: string
}

export interface IUpdatePlayer extends IAddPlayer {
   id: number
}
