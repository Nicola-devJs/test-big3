import React from 'react'
import { Main } from '../../components/styled/main/Main'
import {
   MainPagination,
   MainToolbar,
   MainContent,
} from '../../components/styled/main/StyledMain'
import { ToolbarWrapper } from './StyledPlayers'
import { Search } from '../../UI/search/Search'
import AppSelect from '../../UI/select/AppSelect'
import { Button } from '../../UI/button/Button'

export const Players = () => {
   return (
      <Main>
         <MainToolbar $justify="space-between">
            <ToolbarWrapper $align="center">
               <Search width="364px" />
               <AppSelect
                  name="select-players"
                  multi
                  options={[
                     { value: 'select-1', label: 'select 1' },
                     { value: 'select-2', label: 'select 2' },
                     { value: 'select-3', label: 'select 3' },
                     { value: 'select-4', label: 'select 4' },
                     { value: 'select-5', label: 'select 5' },
                     { value: 'select-6', label: 'select 6' },
                     { value: 'select-7', label: 'select 7' },
                     { value: 'select-4', label: 'select 4' },
                  ]}
               />
            </ToolbarWrapper>
            <Button $icon="+">Add</Button>
         </MainToolbar>
         <MainContent>Players</MainContent>
         <MainPagination>Pagination</MainPagination>
      </Main>
   )
}
