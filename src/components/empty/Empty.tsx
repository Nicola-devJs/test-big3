import React from 'react'
import { StyledEmpty, EmptyBody } from './StyledEmpty'
import { ErrorContent } from '../errorContent/ErrorContent'
import emptyTeams from '../../assets/images/emptyTeams.png'
import emptyPlayers from '../../assets/images/emptyPlayers.png'
import { useLocation } from 'react-router-dom'

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

type typeEmptyListType = 'teams' | 'players'

export const Empty: React.FC = () => {
   const location = useLocation()
   const typeEmptyList = location.pathname.slice(1) as typeEmptyListType

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
