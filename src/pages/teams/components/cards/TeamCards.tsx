import React from 'react'
import { ITeamItem } from '../../../../api/dto/ITeams'
import { CardsWrapper } from '../../../../common/components/card/StyledCards'
import { Card } from '../../../../common/components/card/Card'

interface TeamCardsProps {
   list: ITeamItem[]
}

export const TeamCards: React.FC<TeamCardsProps> = ({ list }) => {
   return (
      <CardsWrapper>
         {list.map((item) => (
            <Card
               key={item.id}
               id={item.id}
               urlImg={item.imageUrl}
               title={item.name}
               subTitle={`Year of foundation: ${item.foundationYear}`}
            />
         ))}
      </CardsWrapper>
   )
}
