import React, { ChangeEvent, useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Main } from '../../components/styled/main/Main'
import {
   MainPagination,
   MainToolbar,
   MainContent,
} from '../../components/styled/main/StyledMain'
import { Button } from '../../UI/button/Button'
import { Search } from '../../UI/search/Search'
import { AppPagination } from '../../UI/paginate/AppPagination'
import { AppSelect, IOptionItem } from '../../UI/select/AppSelect'
import { RoutesNamePath } from '../Routes'
import { useAppDispatch, useAppSelector } from '../../core/redux/hooks'
import { fetchingTeamsAction } from '../../modules/teams/teamThunk'
import { Loading } from '../../components/loading/Loading'
import { TeamCards } from './components/cards/TeamCards'
import { Empty } from '../../components/empty/Empty'
import { teamSlice } from '../../modules/teams/teamSlice'
import { OPTIONS_NUMBER_PAGES } from '../../common/constants/numberPages'

export const Teams = () => {
   const { teamsSearchQuery } = teamSlice.actions
   const { body, error, loading, sortedTeam } = useAppSelector(
      (state) => state.team
   )
   const dispatch = useAppDispatch()
   const navigate = useNavigate()

   const [valueSearch, setValueSearch] = useState<string>('')
   const selectPerPage = useRef(null)

   useEffect(() => {
      dispatch(fetchingTeamsAction({ page: body.page, pageSize: body.size }))
   }, [dispatch])

   const filterByNamesHandler = (event: ChangeEvent<HTMLInputElement>) => {
      setValueSearch(event.target.value)
      dispatch(teamsSearchQuery(event.target.value))
   }

   const changePageHandler = (pageNumber: number) => {
      dispatch(fetchingTeamsAction({ page: pageNumber, pageSize: body.size }))
   }

   const changePerPageHandler = (option: IOptionItem) => {
      dispatch(
         fetchingTeamsAction({
            page: body.page,
            pageSize: option.value as number,
         })
      )
   }

   return (
      <Main>
         <MainToolbar $justify="space-between" $align="center">
            <Search
               width="364px"
               value={valueSearch}
               onChange={filterByNamesHandler}
            />
            <Button $icon="+" onClick={() => navigate(RoutesNamePath.ADDITEM)}>
               Add
            </Button>
         </MainToolbar>
         <MainContent>
            {loading ? (
               <Loading />
            ) : sortedTeam.length ? (
               <TeamCards list={sortedTeam} />
            ) : (
               <Empty />
            )}
         </MainContent>
         <MainPagination>
            <AppPagination
               itemsPerPage={body.size}
               items={body.data}
               onChange={changePageHandler}
            />
            <AppSelect
               width="88px"
               name="items-per-page-select"
               options={OPTIONS_NUMBER_PAGES}
               selectedValue={OPTIONS_NUMBER_PAGES[0]}
               ref={selectPerPage}
               onChange={changePerPageHandler}
            />
         </MainPagination>
      </Main>
   )
}
