import React from 'react'
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
import { useNavigate } from 'react-router-dom'
import { RoutesNamePath } from '../Routes'
import { Empty } from '../../components/empty/Empty'

export const Teams = () => {
   const navigate = useNavigate()

   return (
      <Main>
         <MainToolbar $justify="space-between" $align="center">
            <Search width="364px" />
            <Button $icon="+" onClick={() => navigate(RoutesNamePath.ADDITEM)}>
               Add
            </Button>
         </MainToolbar>
         <MainContent>
            <Cards onClick={() => navigate(`${RoutesNamePath.TEAMS}/${3}`)} />
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
