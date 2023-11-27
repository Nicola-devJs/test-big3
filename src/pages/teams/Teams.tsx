import React, { useEffect } from 'react'
import { Main } from '../../components/styled/main/Main'
import {
   MainPagination,
   MainToolbar,
   MainContent,
} from '../../components/styled/main/StyledMain'
import { Button } from '../../UI/button/Button'
import { Cards } from '../../components/cards/Cards'
import { Search } from '../../UI/search/Search'

export const Teams = () => {
   return (
      <Main>
         <MainToolbar $justify="space-between">
            <Search width="364px" />
            <Button $icon="+">Add</Button>
         </MainToolbar>
         <MainContent>
            <Cards />
         </MainContent>
         <MainPagination>Pagination</MainPagination>
      </Main>
   )
}
