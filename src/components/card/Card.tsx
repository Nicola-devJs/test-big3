import React from 'react'
import { CardItem, CardBody, CardImg, CardInfo } from './StyledCards'
import { useLocation, useNavigate } from 'react-router-dom'
import { getNameRootPage } from '../../common/helpers/stringHelper'

interface CardsProps {
   id: number
   urlImg: string
   title: string
   titleSelected?: number
   subTitle: string
}

export const Card: React.FC<CardsProps> = ({
   id,
   urlImg,
   title,
   titleSelected,
   subTitle,
}) => {
   const navigate = useNavigate()
   const location = useLocation()

   return (
      <CardItem
         key={id}
         onClick={() => navigate(`${location.pathname}/${id}`, { state: id })}
      >
         <CardBody $direction="column">
            <CardImg
               $justify="center"
               $whatPage={getNameRootPage(location.pathname)}
            >
               <img src={urlImg} alt="card-img" />
            </CardImg>
            <CardInfo>
               <h4>
                  {title} {titleSelected ? <span>#{titleSelected}</span> : ''}
               </h4>
               <p>{subTitle}</p>
            </CardInfo>
         </CardBody>
      </CardItem>
   )
}
