import React from 'react'
import { ItemInfo } from '../../components/itemInfo/ItemInfo'
import { Main } from '../../components/styled/main/Main'
import { Breadcrumbs } from '../../components/breadcrumbs/Breadcrumbs'
import {
   ItemInfoTools,
   ItemInfoToolsItem,
} from '../../components/itemInfo/StyledItemInfo'

export const PlayerPage: React.FC = () => {
   return (
      <Main>
         <Breadcrumbs $border prefixParam="">
            <ItemInfoTools>
               <ItemInfoToolsItem className="icon-edit" />
               <ItemInfoToolsItem className="icon-delete" $red />
            </ItemInfoTools>
         </Breadcrumbs>
         <ItemInfo />
      </Main>
   )
}
