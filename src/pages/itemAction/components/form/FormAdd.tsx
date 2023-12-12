import React from 'react'
import { useNavigate } from 'react-router-dom'
import { DefaultValues, FieldValues, useForm } from 'react-hook-form'
import { StyledFormAdd, FormAddContainerButtons } from './StyledFormAdd'
import { Button } from '../../../../UI/button/Button'
import { getChildrenForForm } from '../../helpers/getChildrenForForm'

interface FormAddProps<T> {
   handler: (data: T) => void
   children: React.ReactElement[] | React.ReactElement
   isLoading: boolean
   defaultValues?: DefaultValues<T>
}

export function FormAdd<T extends FieldValues>({
   children,
   handler,
   isLoading,
   defaultValues,
}: FormAddProps<T>) {
   const { handleSubmit, register, formState, control } = useForm<T>({
      mode: 'onChange',
      defaultValues,
   })
   const navigate = useNavigate()

   return (
      <StyledFormAdd onSubmit={handleSubmit(handler)}>
         {getChildrenForForm(children, register, formState, control)}

         <FormAddContainerButtons $justify="space-between" $align="center">
            <Button type="button" $secondary onClick={() => navigate(-1)}>
               Cancel
            </Button>
            <Button type="submit" $loading={isLoading}>
               Save
            </Button>
         </FormAddContainerButtons>
      </StyledFormAdd>
   )
}
