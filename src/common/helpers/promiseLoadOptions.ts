import { IOptionItem } from '../../UI/select/AppSelect'
import PlayerService from '../../api/requests/players'
import TeamsService from '../../api/requests/teams'

export const promiseOptionsTeamsName = async (
   _: any,
   callback: (options: IOptionItem[]) => void
) => {
   try {
      const response = await TeamsService.getTeams({})

      const options = response.data.map((team) => ({
         value: team.id,
         label: team.name,
      }))
      callback(options)

      return options
   } catch (e) {
      return []
   }
}

export const promiseOptionsPlayerPositions = async (
   _: any,
   callback: (options: IOptionItem[]) => void
) => {
   try {
      const data = await PlayerService.getPositions()

      const options = data.map((pos) => ({
         value: pos,
         label: pos,
      }))
      callback(options)

      return options
   } catch (e) {
      return []
   }
}
