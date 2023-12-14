import React, { ChangeEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { OnChangeValue } from 'react-select'
import { Main } from '../../components/styled/main/Main'
import {
   MainPagination,
   MainToolbar,
   MainContent,
} from '../../components/styled/main/StyledMain'
import { ToolbarWrapper } from './components/styled/StyledPlayers'
import { Search } from '../../UI/search/Search'
import { AppSelect, IOptionItem } from '../../UI/select/AppSelect'
import { Button } from '../../UI/button/Button'
import { AppPagination } from '../../UI/paginate/AppPagination'
import { RoutesNamePath } from '../Routes'
import { useAppDispatch, useAppSelector } from '../../core/redux/hooks'
import { PlayerCards } from './components/cards/PlayerCards'
import { fetchingPlayersAction } from '../../modules/players/playerThunk'
import { OPTIONS_NUMBER_PAGES } from '../../common/constants/numberPages'
import { playerSlice } from '../../modules/players/playerSlice'
import { promiseOptionsTeamsName } from '../../common/helpers/promiseLoadOptions'
import { useDebounce } from '../../common/hooks/debounce'
import { ViewContent } from '../../components/viewContent/ViewContent'

export const Players = () => {
   const { playersSearchQuery, sortedPlayersByTeams } = playerSlice.actions
   const { body, error, loading, sortedPlayers } = useAppSelector(
      (state) => state.player
   )
   const dispatch = useAppDispatch()
   const navigate = useNavigate()
   const [valueSearch, setValueSearch] = useState<string>('')
   const debounceCallback = useDebounce(callbackSearchQuery, 500)

   useEffect(() => {
      dispatch(fetchingPlayersAction({ page: body.page, pageSize: body.size }))
   }, [])

   function callbackSearchQuery(valueSearch: string) {
      dispatch(playersSearchQuery(valueSearch))
   }

   const searchByNamesHandler = (event: ChangeEvent<HTMLInputElement>) => {
      setValueSearch(event.target.value)
      debounceCallback(event.target.value)
   }

   const changePageHandler = (pageNumber: number) => {
      dispatch(fetchingPlayersAction({ page: pageNumber, pageSize: body.size }))
   }

   const changePerPageHandler = (
      option: OnChangeValue<IOptionItem, boolean>
   ) => {
      option = option as IOptionItem
      dispatch(
         fetchingPlayersAction({
            page: body.page,
            pageSize: option.value as number,
         })
      )
   }

   const filterPlayersByTeams = (
      options: OnChangeValue<IOptionItem, boolean>
   ) => {
      if (Array.isArray(options)) {
         const valueIdTeams = options.map(
            (option) => option.value
         ) as Array<number>
         dispatch(sortedPlayersByTeams(valueIdTeams))
      }
   }

   return (
      <Main>
         <MainToolbar $justify="space-between" $align="center">
            <ToolbarWrapper $align="center">
               <Search
                  width="364px"
                  value={valueSearch}
                  onChange={searchByNamesHandler}
               />
               <AppSelect
                  width="364px"
                  name="select-players"
                  multi
                  isCloseMenuOnSelect={false}
                  loadOptions={promiseOptionsTeamsName}
                  onChange={filterPlayersByTeams}
               />
            </ToolbarWrapper>
            <Button $icon="+" onClick={() => navigate(RoutesNamePath.ADDITEM)}>
               Add
            </Button>
         </MainToolbar>
         <MainContent>
            <ViewContent list={sortedPlayers} loading={loading} error={error}>
               <PlayerCards list={sortedPlayers} />
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
