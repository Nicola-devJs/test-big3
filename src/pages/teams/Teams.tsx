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
import { AppPagination } from '../../UI/paginate/AppPagination'
import AppSelect from '../../UI/select/AppSelect'

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
         <MainPagination>
            <AppPagination itemsPerPage={6} />
            <AppSelect
               width="88px"
               name="items-per-page-select"
               options={[
                  { value: '6', label: '6' },
                  { value: '12', label: '12' },
                  { value: '24', label: '24' },
               ]}
               selectedValue={{ value: '6', label: '6' }}
            />
         </MainPagination>
      </Main>
   )
}
