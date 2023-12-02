import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm, Controller } from 'react-hook-form'
import { Main } from '../../components/styled/main/Main'
import { Breadcrumbs } from '../../components/breadcrumbs/Breadcrumbs'
import {
   StyledAddItem,
   AddItemFormWrapperFields,
   AddItemFormContainerButtons,
   AddItemFormContainerFields,
} from './StyledAddItem'
import { LoadPhoto } from '../../UI/loadPhoto/LoadPhoto'
import { Input } from '../../UI/input/Input'
import { Button } from '../../UI/button/Button'
import AppSelect from '../../UI/select/AppSelect'

interface IOption {
   value: string
   label: string
}

interface IAddItemPlayer {
   photo: FileList
   name: string
   position: IOption
   team: IOption
   height: number
   weight: number
   birthday: Date
   number: number
}

export const AddItem = () => {
   const {
      handleSubmit,
      register,
      formState: { errors },
      control,
   } = useForm<IAddItemPlayer>({
      mode: 'onBlur',
   })
   const navigate = useNavigate()

   const submitAddItemHandler = (data: IAddItemPlayer) => {
      console.log(data)
   }

   return (
      <Main>
         <Breadcrumbs prefixParam="Add new" />
         <StyledAddItem
            as={'form'}
            onSubmit={handleSubmit(submitAddItemHandler)}
            $align="flex-start"
         >
            <LoadPhoto
               {...register('photo', {
                  required: 'Upload photo',
               })}
               errorLabel={errors.photo && errors.photo.message}
            />
            <AddItemFormWrapperFields>
               <Input
                  {...register('name', { required: 'Required' })}
                  label="Name"
                  errorLabel={errors.name && errors.name.message}
               />
               <Controller
                  name="position"
                  control={control}
                  rules={{ required: 'Required' }}
                  render={({ field }) => (
                     <AppSelect
                        {...field}
                        options={[{ value: '1', label: '1' }]}
                        width="100%"
                        label="position"
                        errorLabel={errors.position && errors.position.message}
                        isClearable={true}
                        $form
                     />
                  )}
               />
               <Controller
                  name="team"
                  control={control}
                  rules={{ required: 'Required' }}
                  render={({ field }) => (
                     <AppSelect
                        {...field}
                        options={[{ value: '1', label: '1' }]}
                        width="100%"
                        label="team"
                        errorLabel={errors.team && errors.team.message}
                        isClearable={true}
                        $form
                     />
                  )}
               />
               <AddItemFormContainerFields>
                  <Input
                     {...register('height', { required: 'Required' })}
                     label="height (cm)"
                     errorLabel={errors.height && errors.height.message}
                     type="number"
                  />
                  <Input
                     {...register('weight', { required: 'Required' })}
                     label="weight (kg)"
                     errorLabel={errors.weight && errors.weight.message}
                     type="number"
                  />
               </AddItemFormContainerFields>
               <AddItemFormContainerFields>
                  <Input
                     {...register('birthday', { required: 'Required' })}
                     label="birthday"
                     errorLabel={errors.birthday && errors.birthday.message}
                     type="date"
                  />
                  <Input
                     {...register('number', { required: 'Required' })}
                     label="number"
                     errorLabel={errors.number && errors.number.message}
                     type="number"
                  />
               </AddItemFormContainerFields>
               <AddItemFormContainerButtons
                  $justify="space-between"
                  $align="center"
               >
                  <Button type="button" $secondary onClick={() => navigate(-1)}>
                     Cancel
                  </Button>
                  <Button type="submit">Save</Button>
               </AddItemFormContainerButtons>
            </AddItemFormWrapperFields>
         </StyledAddItem>
      </Main>
   )
}
