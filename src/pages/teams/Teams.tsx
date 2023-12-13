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
import { TeamCards } from './components/cards/TeamCards'
import { teamSlice } from '../../modules/teams/teamSlice'
import { OPTIONS_NUMBER_PAGES } from '../../common/constants/numberPages'
import { useDebounce } from '../../common/hooks/debounce'
import { ViewContent } from '../../components/viewContent/ViewContent'
import { OnChangeValue } from 'react-select'

export const Teams = () => {
   const { teamsSearchQuery } = teamSlice.actions
   const { body, error, loading, sortedTeam } = useAppSelector(
      (state) => state.team
   )
   const dispatch = useAppDispatch()
   const navigate = useNavigate()

   const [valueSearch, setValueSearch] = useState<string>('')
   const debounceCallback = useDebounce(callbackSearchQuery, 500)

   useEffect(() => {
      dispatch(fetchingTeamsAction({ page: body.page, pageSize: body.size }))
   }, [dispatch])

   function callbackSearchQuery(valueSearch: string) {
      dispatch(teamsSearchQuery(valueSearch))
   }

   const searchByNamesHandler = (event: ChangeEvent<HTMLInputElement>) => {
      setValueSearch(event.target.value)
      debounceCallback(event.target.value)
   }

   const changePageHandler = (pageNumber: number) => {
      dispatch(fetchingTeamsAction({ page: pageNumber, pageSize: body.size }))
   }

   const changePerPageHandler = (
      option: OnChangeValue<IOptionItem, boolean>
   ) => {
      option = option as IOptionItem
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
               onChange={searchByNamesHandler}
            />
            <Button $icon="+" onClick={() => navigate(RoutesNamePath.ADDITEM)}>
               Add
            </Button>
         </MainToolbar>
         <MainContent>
            <ViewContent loading={loading} error={error} list={sortedTeam}>
               <TeamCards list={sortedTeam} />
            </ViewContent>
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
               onChange={changePerPageHandler}
            />
         </MainPagination>
      </Main>
   )
}
