import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Breadcrumbs } from '../../common/components/breadcrumbs/Breadcrumbs'
import { Main } from '../../common/components/styled/main/Main'
import {
   FormAddWrapperFields,
   FormAddContainerFields,
} from './components/form/StyledFormAdd'
import { FormAdd } from './components/form/FormAdd'
import { FormAddInput } from './components/input/FormAddInput'
import { FormAddSelect } from './components/select/FormAddSelect'
import { FormAddLoadPhoto } from './components/loadPhoto/FormAddLoadPhoto'
import { useAppDispatch, useAppSelector } from '../../core/redux/hooks'
import {
   addPlayerAction,
   updatePlayerAction,
} from '../../modules/players/playerThunk'
import { RoutesNamePath } from '../Routes'
import {
   promiseOptionsPlayerPositions,
   promiseOptionsTeamsName,
} from '../../common/helpers/promiseLoadOptions'
import { IAddItemPlayer, IUpdateItemPlayer } from './helpers/interfaces/IPlayer'
import { IGetPlayer } from '../../api/dto/IPlayers'
import { gatDataFormPlayer } from './helpers/playerDataSubmit'
import { getLimiterDate } from './helpers/getLimiterDate'
import { FormError } from './components/error/FormError'
import { initialDate } from '../../common/helpers/formatDate'

export const PlayerAction = () => {
   const dispatch = useAppDispatch()
   const { loading, error } = useAppSelector((state) => state.player)
   const navigate = useNavigate()
   const location = useLocation()
   const isEdit = location.pathname.includes('edit')

   const getDefaultValues = (isEdit: boolean) => {
      if (!isEdit) return
      const { position, teamName, team, birthday, ...data }: IGetPlayer =
         location.state

      return {
         position: { value: position, label: position },
         team: { value: team, label: teamName },
         birthday: initialDate(birthday),
         ...data,
      } as IUpdateItemPlayer
   }
   const defaultValuesByUpdatePlayers = getDefaultValues(isEdit)

   const submitAddItemHandler = (data: IAddItemPlayer) => {
      const newData = gatDataFormPlayer(data)

      dispatch(addPlayerAction(newData)).then((response) => {
         if (!response.type.includes('rejected')) {
            navigate(RoutesNamePath.PLAYERS)
         }
      })
   }

   function submitEditPlayerHandler(data: IAddItemPlayer) {
      const resData = gatDataFormPlayer(data)

      const id = defaultValuesByUpdatePlayers?.id as number
      const newData = { ...resData, id }

      dispatch(updatePlayerAction(newData)).then((response) => {
         if (!response.type.includes('rejected')) {
            navigate(RoutesNamePath.PLAYERS)
         }
      })
   }

   const submitFormHandler = isEdit
      ? submitEditPlayerHandler
      : submitAddItemHandler

   return (
      <Main>
         <Breadcrumbs
            prefixParam={!isEdit ? 'Add new' : ''}
            currentPage={
               isEdit ? `Edit player ${defaultValuesByUpdatePlayers?.name}` : ''
            }
         />
         <FormAdd
            handler={submitFormHandler}
            isLoading={loading}
            defaultValues={defaultValuesByUpdatePlayers}
         >
            <FormAddLoadPhoto name="avatarUrl" />
            <FormAddWrapperFields>
               <FormAddInput
                  name="name"
                  label="Name"
                  options={{
                     required: false,
                     minLength: { value: 5, message: 'Less that 5 characters' },
                  }}
               />
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
                     options={{
                        min: {
                           value: 180,
                           message: 'Basketball player is too short',
                        },
                        max: {
                           value: 270,
                           message: 'Basketball player is too tall',
                        },
                     }}
                  />
                  <FormAddInput
                     name="weight"
                     label="weight (kg)"
                     type="number"
                     options={{
                        min: {
                           value: 50,
                           message: `Basketball player's weight is too low`,
                        },
                        max: {
                           value: 150,
                           message: `Basketball player is too overweight`,
                        },
                     }}
                  />
               </FormAddContainerFields>
               <FormAddContainerFields>
                  <FormAddInput
                     name="birthday"
                     label="birthday"
                     type="date"
                     options={{
                        min: {
                           value: getLimiterDate(30),
                           message: 'Too old to be a basketball player',
                        },
                        max: {
                           value: getLimiterDate(18),
                           message: 'Too young to be a basketball player',
                        },
                     }}
                  />
                  <FormAddInput
                     name="number"
                     label="number"
                     type="text"
                     options={{
                        onChange(event) {
                           let inputValue = event.target.value
                           let sanitizedValue = inputValue.replace(
                              /[^-\d]/g,
                              ''
                           )
                           event.target.value = sanitizedValue
                        },
                        validate: {
                           isPositiveNumber: (value) => {
                              if (value === '-') return
                              return (
                                 Number.parseInt(value) > 0 ||
                                 'The number cannot be negative'
                              )
                           },
                        },
                     }}
                  />
               </FormAddContainerFields>
            </FormAddWrapperFields>
         </FormAdd>
         <>
            {error ? (
               <FormError status={error.status} text={error.statusText} />
            ) : (
               ''
            )}
         </>
      </Main>
   )
}
