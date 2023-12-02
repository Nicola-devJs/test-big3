import React from 'react'
import {
   StyledItemInfo,
   ItemInfoContent,
   ItemInfoImg,
   ItemInfoTitle,
   ItemInfoList,
   ItemInfoListItem,
} from './StyledItemInfo'
import photoItem from '../../assets/images/player.png'

export const ItemInfo: React.FC = () => {
   return (
      <StyledItemInfo>
         <ItemInfoImg>
            <img src={photoItem} alt="item img" />
         </ItemInfoImg>
         <ItemInfoContent>
            <ItemInfoTitle>
               Greg Whittington <span>#22</span>
            </ItemInfoTitle>
            <ItemInfoList as={'ul'} $justify="space-between">
               <ItemInfoListItem>
                  <p>Position</p>
                  <span>Forward</span>
               </ItemInfoListItem>
               <ItemInfoListItem>
                  <p>Position</p>
                  <span>Forward</span>
               </ItemInfoListItem>
               <ItemInfoListItem>
                  <p>Position</p>
                  <span>Forward</span>
               </ItemInfoListItem>
            </ItemInfoList>
         </ItemInfoContent>
      </StyledItemInfo>
   )
}
