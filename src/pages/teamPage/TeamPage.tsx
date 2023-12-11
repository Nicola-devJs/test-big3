import React, { useEffect } from 'react'
import { Breadcrumbs } from '../../components/breadcrumbs/Breadcrumbs'
import { ItemInfo, optionsType } from '../../components/itemInfo/ItemInfo'
import {
   ItemInfoTools,
   ItemInfoToolsItem,
} from '../../components/itemInfo/StyledItemInfo'
import { Main } from '../../components/styled/main/Main'
import { Roster } from './components/roster/Roster'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../core/redux/hooks'
import {
   deleteTeamAction,
   fetchGetTeamAction,
} from '../../modules/teams/teamThunk'
import { Loading } from '../../components/loading/Loading'

export const TeamPage: React.FC = () => {
   const navigate = useNavigate()
   const dispatch = useAppDispatch()
   const { currentTeam, loading } = useAppSelector((state) => state.team)

   const location = useLocation()
   const idTeam = location.state as number

   useEffect(() => {
      dispatch(fetchGetTeamAction(idTeam))
   }, [])

   const optionsCurrentTeam: optionsType = [
      { label: 'Year of foundation', value: currentTeam.foundationYear },
      { label: 'Division', value: currentTeam.division },
      { label: 'Conference', value: currentTeam.division },
   ]

   const deleteTeamHandler = () => {
      // eslint-disable-next-line no-restricted-globals
      const response = confirm('Вы действительно хотите удалить команду ?')
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      response
         ? dispatch(deleteTeamAction(currentTeam.id)).then(() => navigate(-1))
         : null
   }

   return (
      <Main>
         <Breadcrumbs $border currentPage={currentTeam.name}>
            <ItemInfoTools>
               <ItemInfoToolsItem className="icon-edit" />
               <ItemInfoToolsItem
                  className="icon-delete"
                  $red
                  onClick={deleteTeamHandler}
               />
            </ItemInfoTools>
         </Breadcrumbs>
         {loading ? (
            <Loading />
         ) : (
            <ItemInfo
               urlImg={currentTeam.imageUrl}
               title={currentTeam.name}
               options={optionsCurrentTeam}
            />
         )}

         <Roster teamId={idTeam} />
      </Main>
   )
}
