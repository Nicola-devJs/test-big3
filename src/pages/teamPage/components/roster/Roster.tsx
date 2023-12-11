import React, { useEffect } from 'react'
import {
   StyledRoster,
   RosterRow,
   RosterHead,
   RosterBody,
   RosterPlayerCell,
} from './StyledRoster'

import { useAppDispatch, useAppSelector } from '../../../../core/redux/hooks'
import { fetchingPlayersAction } from '../../../../modules/players/playerThunk'
import { Loading } from '../../../../components/loading/Loading'
import { getAge } from '../../../../common/helpers/getAge'

interface RosterProps {
   teamId: number
}

export const Roster: React.FC<RosterProps> = ({ teamId }) => {
   const dispatch = useAppDispatch()
   const { loading, body } = useAppSelector((state) => state.player)

   useEffect(() => {
      dispatch(fetchingPlayersAction({ teamIds: [teamId] }))
   }, [])

   return (
      <>
         {loading ? (
            <Loading />
         ) : (
            <StyledRoster>
               <RosterHead>
                  <RosterRow>
                     <th>Roster</th>
                  </RosterRow>
               </RosterHead>
               <RosterBody>
                  <RosterRow>
                     <td>#</td>
                     <td>Player</td>
                     <td>Height</td>
                     <td>Weight</td>
                     <td>Age</td>
                  </RosterRow>
                  {body.data.map((player) => (
                     <RosterRow key={player.id}>
                        <td>{player.number}</td>
                        <td>
                           <RosterPlayerCell>
                              <img src={player.avatarUrl} alt="img" />
                              <div>
                                 <p>{player.name}</p>
                                 <span>{player.position}</span>
                              </div>
                           </RosterPlayerCell>
                        </td>
                        <td>{player.height} cm</td>
                        <td>{player.weight} kg</td>
                        <td>{getAge(player.birthday)}</td>
                     </RosterRow>
                  ))}
               </RosterBody>
            </StyledRoster>
         )}
      </>
   )
}
