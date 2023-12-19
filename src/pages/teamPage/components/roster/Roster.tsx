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
import { getAge } from '../../../../common/helpers/formatDate'
import { ViewContent } from '../../../../common/components/viewContent/ViewContent'

interface RosterProps {
   teamId: number
}

export const Roster: React.FC<RosterProps> = ({ teamId }) => {
   const dispatch = useAppDispatch()
   const { loading, body, error } = useAppSelector((state) => state.player)

   useEffect(() => {
      dispatch(fetchingPlayersAction({ teamId }))
   }, [])

   return (
      <>
         <ViewContent loading={loading} error={error}>
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
         </ViewContent>
      </>
   )
}
