import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Breadcrumbs } from '../../components/breadcrumbs/Breadcrumbs'
import { Main } from '../../components/styled/main/Main'
import { FormAdd } from './components/form/FormAdd'
import { FormAddInput } from './components/input/FormAddInput'
import { FormAddWrapperFields } from './components/form/StyledFormAdd'
import { FormAddLoadPhoto } from './components/loadPhoto/FormAddLoadPhoto'
import { useAppDispatch } from '../../core/redux/hooks'
import { addTeamAction } from '../../modules/teams/teamThunk'
import { ITeamAdd } from '../../common/helpers/interfaces/requestInterfaces/RequestTeam'
import { RoutesNamePath } from '../Routes'

export const AddTeam = () => {
   const dispatch = useAppDispatch()
   const navigate = useNavigate()

   function submitAddItemHandler(data: ITeamAdd) {
      dispatch(addTeamAction(data)).then(() => navigate(RoutesNamePath.TEAMS))
   }
   return (
      <Main>
         <Breadcrumbs prefixParam="Add new" />
         <FormAdd handler={submitAddItemHandler}>
            <FormAddLoadPhoto name="imageUrl" />
            <FormAddWrapperFields>
               <FormAddInput name="name" label="Name" />
               <FormAddInput name="division" label="division" />
               <FormAddInput name="conference" label="conference" />
               <FormAddInput
                  name="foundationYear"
                  label="Year of foundation"
                  type="number"
               />
            </FormAddWrapperFields>
         </FormAdd>
      </Main>
   )
}
