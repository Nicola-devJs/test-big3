import React from 'react'
import {
   StyledRoster,
   RosterRow,
   RosterHead,
   RosterBody,
   RosterPlayerCell,
} from './StyledRoster'

import imgPlayer from '../../../../assets/images/player.png'

export const Roster = () => {
   return (
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
            <RosterRow>
               <td>10</td>
               <td>
                  <RosterPlayerCell>
                     <img src={imgPlayer} alt="img" />
                     <div>
                        <p>Bol Bol</p>
                        <span>Centerforward</span>
                     </div>
                  </RosterPlayerCell>
               </td>
               <td>218 cm</td>
               <td>100 kg</td>
               <td>21</td>
            </RosterRow>
         </RosterBody>
      </StyledRoster>
   )
}
