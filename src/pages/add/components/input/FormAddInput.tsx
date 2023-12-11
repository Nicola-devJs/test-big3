import React from 'react'
import { FieldValues, FormState, Path, UseFormRegister } from 'react-hook-form'
import { Input, typeInput } from '../../../../UI/input/Input'

interface FormAddInputProps<T extends FieldValues> {
   name: Path<T>
   register?: UseFormRegister<T>
   formState?: FormState<T>
   label: string
   type?: typeInput
   control?: any
}

export function FormAddInput<T extends FieldValues>({
   name,
   register,
   formState,
   control,
   ...props
}: FormAddInputProps<T>) {
   const errorLabel = formState ? formState.errors[name]?.message : ''
   return (
      <>
         {register && (
            <Input
               {...register(name, { required: 'Required' })}
               errorLabel={errorLabel as string}
               {...props}
            />
         )}
      </>
   )
}
