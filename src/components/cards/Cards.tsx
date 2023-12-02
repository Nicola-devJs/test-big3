import React from 'react'
import {
   CardsWrapper,
   CardItem,
   CardBody,
   CardImg,
   CardInfo,
} from './StyledCards'
import playerImg from '../../assets/images/player.png'

interface CardsProps {
   onClick: () => void
}

export const Cards: React.FC<CardsProps> = (props) => {
   return (
      <CardsWrapper>
         <CardItem {...props}>
            <CardBody $direction="column">
               <CardImg $justify="center" $align="flex-end">
                  <img src={playerImg} alt="card-img" />
               </CardImg>
               <CardInfo>
                  <h4>
                     Troy Daniels <span>#30</span>
                  </h4>
                  <p>Denver Nuggets</p>
               </CardInfo>
            </CardBody>
         </CardItem>
      </CardsWrapper>
   )
}
