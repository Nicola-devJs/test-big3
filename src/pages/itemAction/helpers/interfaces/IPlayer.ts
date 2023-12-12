import { IOptionItem } from '../../../../UI/select/AppSelect'

export interface IAddItemPlayer {
   avatarUrl: string
   name: string
   position: IOptionItem
   team: IOptionItem
   height: number
   weight: number
   birthday: string
   number: number
}

export interface IUpdateItemPlayer extends IAddItemPlayer {
   id: number
}
