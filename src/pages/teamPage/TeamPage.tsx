import React from 'react'
import { Breadcrumbs } from '../../components/breadcrumbs/Breadcrumbs'
import { ItemInfo } from '../../components/itemInfo/ItemInfo'
import {
   ItemInfoTools,
   ItemInfoToolsItem,
} from '../../components/itemInfo/StyledItemInfo'
import { Main } from '../../components/styled/main/Main'
import { Roster } from './components/roster/Roster'

export const TeamPage: React.FC = () => {
   return (
      <Main>
         <Breadcrumbs $border prefixParam="">
            <ItemInfoTools>
               <ItemInfoToolsItem className="icon-edit" />
               <ItemInfoToolsItem className="icon-delete" $red />
            </ItemInfoTools>
         </Breadcrumbs>
         <ItemInfo />
         <Roster />
      </Main>
   )
}
