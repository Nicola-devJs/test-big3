import React from 'react'
import { StyledEmpty, EmptyBody } from './StyledEmpty'
import { ErrorContent } from '../errorContent/ErrorContent'
import emptyTeams from '../../assets/images/emptyTeams.png'
import emptyPlayers from '../../assets/images/emptyPlayers.png'

interface EmptyProps {
   typeEmptyList: 'teams' | 'players'
}

const emptyImages = {
   teams: emptyTeams,
   players: emptyPlayers,
}

const typeSizeImg = {
   teams: {
      w: 380,
      h: 260,
   },
   players: {
      w: 320,
      h: 320,
   },
}

export const Empty: React.FC<EmptyProps> = ({ typeEmptyList }) => {
   return (
      <StyledEmpty $justify="center" $align="center">
         <EmptyBody>
            <ErrorContent
               img={emptyImages[typeEmptyList]}
               $sizeImg={typeSizeImg[typeEmptyList]}
               text={`Add new ${typeEmptyList} to continue`}
               title="Empty here"
            />
         </EmptyBody>
      </StyledEmpty>
   )
}
