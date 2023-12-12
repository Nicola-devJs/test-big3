import { IAddPlayer } from '../../../common/helpers/interfaces/requestInterfaces/RequestPlayer'
import { IAddItemPlayer } from './interfaces/IPlayer'

export const gatDataFormPlayer = (data: IAddItemPlayer): IAddPlayer => {
   const { position, team, ...otherData } = data
   const newData: IAddPlayer = {
      position: position.value as string,
      team: team.value as number,
      ...otherData,
   }
   return newData
}
