import React, { ChangeEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
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
import { Empty } from '../../components/empty/Empty'
import { RoutesNamePath } from '../Routes'
import { useAppDispatch, useAppSelector } from '../../core/redux/hooks'
import { Loading } from '../../components/loading/Loading'
import { PlayerCards } from './components/cards/PlayerCards'
import { fetchingPlayersAction } from '../../modules/players/playerThunk'
import TeamsService from '../../api/requests/teams'
import { ITeamItem } from '../../api/dto/ITeams'
import { OPTIONS_NUMBER_PAGES } from '../../common/constants/numberPages'
import { playerSlice } from '../../modules/players/playerSlice'
import { IPlayerItem } from '../../api/dto/IPlayers'

export const Players = () => {
   const { playersSearchQuery, sortedPlayersByTeams } = playerSlice.actions
   const { body, error, loading, sortedPlayers } = useAppSelector(
      (state) => state.player
   )
   const dispatch = useAppDispatch()
   const navigate = useNavigate()
   const [valueSearch, setValueSearch] = useState<string>('')

   useEffect(() => {
      dispatch(fetchingPlayersAction({ page: body.page, pageSize: body.size }))
   }, [])

   const filterByNamesHandler = (event: ChangeEvent<HTMLInputElement>) => {
      setValueSearch(event.target.value)
      dispatch(playersSearchQuery(event.target.value))
   }

   const promiseOptionsTeamsName = async (
      _: any,
      callback: (options: IOptionItem[]) => void
   ) => {
      try {
         const response = await TeamsService.getTeams({ page: 1, pageSize: 24 })

         const options = response.data.map((team) => ({
            value: team.id,
            label: team.name,
         }))
         callback(options)

         return options
      } catch (e) {
         return []
      }
   }

   const changePageHandler = (pageNumber: number) => {
      dispatch(fetchingPlayersAction({ page: pageNumber, pageSize: body.size }))
   }

   const changePerPageHandler = (option: IOptionItem) => {
      dispatch(
         fetchingPlayersAction({
            page: body.page,
            pageSize: option.value as number,
         })
      )
   }

   const filterPlayersByTeams = (options: IOptionItem[]) => {
      dispatch(sortedPlayersByTeams(options[options.length - 1]))
   }

   return (
      <Main>
         <MainToolbar $justify="space-between" $align="center">
            <ToolbarWrapper $align="center">
               <Search
                  width="364px"
                  value={valueSearch}
                  onChange={filterByNamesHandler}
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
            {loading ? (
               <Loading />
            ) : sortedPlayers.length ? (
               <PlayerCards list={sortedPlayers} />
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
               onChange={changePerPageHandler}
            />
         </MainPagination>
      </Main>
   )
}
