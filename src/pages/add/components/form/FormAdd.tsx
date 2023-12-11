import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FieldValues, useForm } from 'react-hook-form'
import { StyledFormAdd, FormAddContainerButtons } from './StyledFormAdd'
import { Button } from '../../../../UI/button/Button'
import { getChildrenForForm } from '../../helpers/getChildrenForForm'
import { useAppSelector } from '../../../../core/redux/hooks'

interface FormAddProps<T> {
   handler: (data: T) => void
   children: React.ReactElement[] | React.ReactElement
}

export function FormAdd<T extends FieldValues>({
   children,
   handler,
}: FormAddProps<T>) {
   const { handleSubmit, register, formState, control } = useForm<T>({
      mode: 'onChange',
   })
   const navigate = useNavigate()
   const { loading } = useAppSelector((state) => state.team)

   return (
      <StyledFormAdd onSubmit={handleSubmit(handler)}>
         {getChildrenForForm(children, register, formState, control)}

         <FormAddContainerButtons $justify="space-between" $align="center">
            <Button type="button" $secondary onClick={() => navigate(-1)}>
               Cancel
            </Button>
            <Button type="submit" $loading={loading}>
               Save
            </Button>
         </FormAddContainerButtons>
      </StyledFormAdd>
   )
}
