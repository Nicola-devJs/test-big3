import React, { useEffect } from 'react'
import { Breadcrumbs } from '../../common/components/breadcrumbs/Breadcrumbs'
import {
   ItemInfo,
   optionsType,
} from '../../common/components/itemInfo/ItemInfo'
import {
   ItemInfoTools,
   ItemInfoToolsItem,
} from '../../common/components/itemInfo/StyledItemInfo'
import { Main } from '../../common/components/styled/main/Main'
import { Roster } from './components/roster/Roster'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../core/redux/hooks'
import {
   deleteTeamAction,
   fetchGetTeamAction,
} from '../../modules/teams/teamThunk'
import { RoutesNamePath } from '../Routes'
import { ViewContent } from '../../common/components/viewContent/ViewContent'

export const TeamPage: React.FC = () => {
   const navigate = useNavigate()
   const dispatch = useAppDispatch()
   const { currentTeam, loading, error } = useAppSelector((state) => state.team)

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

   const editTeamHandler = () => {
      navigate(
         `${RoutesNamePath.TEAMS}/${currentTeam.id}/${RoutesNamePath.EDITITEM}`,
         { state: currentTeam }
      )
   }

   return (
      <Main>
         <Breadcrumbs $border currentPage={currentTeam.name}>
            <ItemInfoTools>
               <ItemInfoToolsItem
                  className="icon-edit"
                  onClick={editTeamHandler}
               />
               <ItemInfoToolsItem
                  className="icon-delete"
                  $red
                  onClick={deleteTeamHandler}
               />
            </ItemInfoTools>
         </Breadcrumbs>

         <ViewContent loading={loading} error={error}>
            <ItemInfo
               urlImg={currentTeam.imageUrl}
               title={currentTeam.name}
               options={optionsCurrentTeam}
            />
         </ViewContent>

         <Roster teamId={idTeam} />
      </Main>
   )
}
