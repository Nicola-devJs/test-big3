import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {
   ItemInfo,
   optionsType,
} from '../../common/components/itemInfo/ItemInfo'
import { Main } from '../../common/components/styled/main/Main'
import { Breadcrumbs } from '../../common/components/breadcrumbs/Breadcrumbs'
import {
   ItemInfoTools,
   ItemInfoToolsItem,
} from '../../common/components/itemInfo/StyledItemInfo'
import { useAppDispatch, useAppSelector } from '../../core/redux/hooks'
import {
   deletePlayerAction,
   getPlayerAction,
} from '../../modules/players/playerThunk'
import { getAge } from '../../common/helpers/formatDate'
import { RoutesNamePath } from '../Routes'
import { ViewContent } from '../../common/components/viewContent/ViewContent'

export const PlayerPage: React.FC = () => {
   const { loading, currentPlayer, error } = useAppSelector(
      (state) => state.player
   )
   const dispatch = useAppDispatch()
   const location = useLocation()
   const navigate = useNavigate()

   const playerId = location.state as number

   useEffect(() => {
      dispatch(getPlayerAction(playerId))
   }, [])

   const options: optionsType = [
      { label: 'Position', value: currentPlayer.position },
      { label: 'Team', value: currentPlayer.teamName },
      { label: 'Height', value: `${currentPlayer.height} cm` },
      { label: 'Weight', value: `${currentPlayer.weight} kg` },
      { label: 'Age', value: getAge(currentPlayer.birthday) },
   ]

   const deletePlayerHandler = () => {
      // eslint-disable-next-line no-restricted-globals
      const response = confirm('Вы действительно хотите удалить игрока ?')
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      response
         ? dispatch(deletePlayerAction(currentPlayer.id)).then(() =>
              navigate(-1)
           )
         : null
   }

   const editPlayerHandler = () => {
      navigate(
         `${RoutesNamePath.PLAYERS}/${currentPlayer.id}/${RoutesNamePath.EDITITEM}`,
         { state: currentPlayer }
      )
   }

   return (
      <Main>
         <Breadcrumbs $border currentPage={currentPlayer.name}>
            <ItemInfoTools>
               <ItemInfoToolsItem
                  className="icon-edit"
                  onClick={editPlayerHandler}
               />
               <ItemInfoToolsItem
                  className="icon-delete"
                  $red
                  onClick={deletePlayerHandler}
               />
            </ItemInfoTools>
         </Breadcrumbs>
         <ViewContent error={error} loading={loading}>
            <ItemInfo
               urlImg={currentPlayer.avatarUrl}
               title={currentPlayer.name}
               titleSelected={currentPlayer.number}
               options={options}
            />
         </ViewContent>
      </Main>
   )
}
