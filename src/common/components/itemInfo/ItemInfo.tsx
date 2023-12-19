import React from 'react'
import { useLocation } from 'react-router-dom'
import {
   StyledItemInfo,
   ItemInfoContent,
   ItemInfoImg,
   ItemInfoTitle,
   ItemInfoList,
   ItemInfoListItem,
} from './StyledItemInfo'
import { getNameRootPage } from '../../helpers/stringHelper'

export type optionsType = Array<{ label: string; value: string | number }>

interface ItemInfoProps {
   urlImg: string
   title: string
   titleSelected?: number
   options: optionsType
}

export const ItemInfo: React.FC<ItemInfoProps> = ({
   urlImg,
   title,
   titleSelected,
   options,
}) => {
   const location = useLocation()

   return (
      <StyledItemInfo>
         <ItemInfoImg
            $justify="center"
            $whatPage={getNameRootPage(location.pathname)}
         >
            <img src={urlImg} alt="img" />
         </ItemInfoImg>
         <ItemInfoContent>
            <ItemInfoTitle>
               {title} {titleSelected ? <span>#{titleSelected}</span> : ''}
            </ItemInfoTitle>
            <ItemInfoList as={'ul'} $justify="space-between">
               {options.map((item) => (
                  <ItemInfoListItem key={item.label}>
                     <p>{item.label}</p>
                     <span>{item.value}</span>
                  </ItemInfoListItem>
               ))}
            </ItemInfoList>
         </ItemInfoContent>
      </StyledItemInfo>
   )
}
