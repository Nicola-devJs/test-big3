import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Breadcrumbs } from '../../common/components/breadcrumbs/Breadcrumbs'
import { Main } from '../../common/components/styled/main/Main'
import { FormAdd } from './components/form/FormAdd'
import { FormAddInput } from './components/input/FormAddInput'
import { FormAddWrapperFields } from './components/form/StyledFormAdd'
import { FormAddLoadPhoto } from './components/loadPhoto/FormAddLoadPhoto'
import { useAppDispatch, useAppSelector } from '../../core/redux/hooks'
import { addTeamAction, updateTeamAction } from '../../modules/teams/teamThunk'
import {
   IAddTeam,
   IUpdateTeam,
} from '../../common/helpers/interfaces/requestInterfaces/RequestTeam'
import { ITeamItem } from '../../api/dto/ITeams'
import { RoutesNamePath } from '../Routes'
import { FormError } from './components/error/FormError'

export const TeamAction = () => {
   const { loading, error } = useAppSelector((state) => state.team)
   const location = useLocation()
   const dispatch = useAppDispatch()
   const navigate = useNavigate()
   const isEdit = location.pathname.includes('edit')

   const defaultValuesByUpdateTeam: ITeamItem = isEdit ? location.state : null

   const submitAddTeamHandler = (data: IAddTeam) => {
      dispatch(addTeamAction(data)).then((response) => {
         if (!response.type.includes('rejected')) {
            navigate(RoutesNamePath.TEAMS)
         }
      })
   }

   const submitEditTeamHandler = (data: IAddTeam) => {
      const updateDate: IUpdateTeam = {
         ...data,
         id: defaultValuesByUpdateTeam.id,
      }

      dispatch(updateTeamAction(updateDate)).then((response) => {
         if (!response.type.includes('rejected')) {
            navigate(RoutesNamePath.TEAMS)
         }
      })
   }

   const submitFormHandler = isEdit
      ? submitEditTeamHandler
      : submitAddTeamHandler

   return (
      <Main>
         <Breadcrumbs
            prefixParam={!isEdit ? 'Add new' : ''}
            currentPage={
               isEdit ? `Edit team ${defaultValuesByUpdateTeam.name}` : ''
            }
         />
         <FormAdd
            handler={submitFormHandler}
            isLoading={loading}
            defaultValues={defaultValuesByUpdateTeam}
         >
            <FormAddLoadPhoto name="imageUrl" />
            <FormAddWrapperFields>
               <FormAddInput
                  name="name"
                  label="Name"
                  options={{
                     minLength: { value: 5, message: 'Less that 5 characters' },
                  }}
               />
               <FormAddInput
                  name="division"
                  label="division"
                  options={{
                     minLength: { value: 5, message: 'Less that 5 characters' },
                  }}
               />
               <FormAddInput
                  name="conference"
                  label="conference"
                  options={{
                     minLength: { value: 5, message: 'Less that 5 characters' },
                  }}
               />
               <FormAddInput
                  name="foundationYear"
                  label="Year of foundation"
                  type="number"
                  options={{
                     min: {
                        value: 1898,
                        message: `The team can't have been created that long ago`,
                     },
                     max: {
                        value: new Date().getFullYear(),
                        message: `The team cannot be formed later than the present time`,
                     },
                  }}
               />
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
