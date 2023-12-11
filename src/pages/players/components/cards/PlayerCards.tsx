import React from 'react'
import { IPlayerItem } from '../../../../api/dto/IPlayers'
import { CardsWrapper } from '../../../../components/card/StyledCards'
import { Card } from '../../../../components/card/Card'

interface PlayerCardsProps {
   list: IPlayerItem[]
}

export const PlayerCards: React.FC<PlayerCardsProps> = ({ list }) => {
   return (
      <CardsWrapper>
         {list.map((item) => (
            <Card
               key={item.id}
               id={item.id}
               urlImg={item.avatarUrl}
               title={item.name}
               subTitle={item.position}
               titleSelected={item.number}
            />
         ))}
      </CardsWrapper>
   )
}
