import React from 'react'
import { IPlayerItem } from '../../../../api/dto/IPlayers'
import { CardsWrapper } from '../../../../common/components/card/StyledCards'
import { Card } from '../../../../common/components/card/Card'
import { useAppSelector } from '../../../../core/redux/hooks'

interface PlayerCardsProps {
   list: IPlayerItem[]
}

export const PlayerCards: React.FC<PlayerCardsProps> = ({ list }) => {
   const { body } = useAppSelector((state) => state.team)
   const teamsKit = new Map()
   body.data.forEach((team) => teamsKit.set(team.id, team.name))

   return (
      <CardsWrapper>
         {list.map((item) => (
            <Card
               key={item.id}
               id={item.id}
               urlImg={item.avatarUrl}
               title={item.name}
               subTitle={teamsKit.get(item.team)}
               titleSelected={item.number}
            />
         ))}
      </CardsWrapper>
   )
}
