import React from 'react'
import { Breadcrumbs } from '../../components/breadcrumbs/Breadcrumbs'
import { Main } from '../../components/styled/main/Main'
import { IOptionItem } from '../../UI/select/AppSelect'
import {
   FormAddWrapperFields,
   FormAddContainerFields,
} from './components/form/StyledFormAdd'
import { FormAdd } from './components/form/FormAdd'
import { FormAddInput } from './components/input/FormAddInput'
import { FormAddSelect } from './components/select/FormAddSelect'
import { FormAddLoadPhoto } from './components/loadPhoto/FormAddLoadPhoto'
import TeamsService from '../../api/requests/teams'
import PlayerService from '../../api/requests/players'
import { useAppDispatch, useAppSelector } from '../../core/redux/hooks'
import { addPlayerAction } from '../../modules/players/playerThunk'
import { IAddPlayer } from '../../common/helpers/interfaces/requestInterfaces/RequestPlayer'
import { Loading } from '../../components/loading/Loading'
import { useNavigate } from 'react-router-dom'
import { RoutesNamePath } from '../Routes'

interface IAddItemPlayer {
   avatarUrl: string
   name: string
   position: IOptionItem
   team: IOptionItem
   height: number
   weight: number
   birthday: string
   number: number
}

export const AddPlayer = () => {
   const dispatch = useAppDispatch()
   const { loading } = useAppSelector((state) => state.player)
   const navigate = useNavigate()
   function submitAddItemHandler(data: IAddItemPlayer) {
      const { position, team, ...otherData } = data
      const newData: IAddPlayer = {
         position: position.value as string,
         team: team.value as number,
         ...otherData,
      }

      dispatch(addPlayerAction(newData)).then(() =>
         navigate(RoutesNamePath.PLAYERS)
      )
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

   const promiseOptionsPlayerPositions = async (
      _: any,
      callback: (options: IOptionItem[]) => void
   ) => {
      try {
         const data = await PlayerService.getPositions()

         const options = data.map((pos) => ({
            value: pos,
            label: pos,
         }))
         callback(options)

         return options
      } catch (e) {
         return []
      }
   }

   return (
      <Main>
         <Breadcrumbs prefixParam="Add new" />
         <FormAdd handler={submitAddItemHandler}>
            <FormAddLoadPhoto name="avatarUrl" />
            <FormAddWrapperFields>
               <FormAddInput name="name" label="Name" />
               <FormAddSelect
                  name="position"
                  label="position"
                  loadOptions={promiseOptionsPlayerPositions}
               />
               <FormAddSelect
                  name="team"
                  label="team"
                  loadOptions={promiseOptionsTeamsName}
               />
               <FormAddContainerFields>
                  <FormAddInput
                     name="height"
                     label="height (cm)"
                     type="number"
                  />
                  <FormAddInput
                     name="weight"
                     label="weight (kg)"
                     type="number"
                  />
               </FormAddContainerFields>
               <FormAddContainerFields>
                  <FormAddInput name="birthday" label="birthday" type="date" />
                  <FormAddInput name="number" label="number" type="number" />
               </FormAddContainerFields>
            </FormAddWrapperFields>
         </FormAdd>
         {loading && <Loading />}
      </Main>
   )
}
