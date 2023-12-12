import React from 'react'
import {
   FieldValues,
   FormState,
   Path,
   RegisterOptions,
   UseFormRegister,
} from 'react-hook-form'
import { Input, typeInput } from '../../../../UI/input/Input'

interface FormAddInputProps<T extends FieldValues> {
   name: Path<T>
   register?: UseFormRegister<T>
   formState?: FormState<T>
   label: string
   type?: typeInput
   control?: any
   options?: RegisterOptions<T>
}

export function FormAddInput<T extends FieldValues>({
   name,
   register,
   formState,
   control,
   options,
   ...props
}: FormAddInputProps<T>) {
   const errorLabel = formState ? formState.errors[name]?.message : ''
   return (
      <>
         {register && (
            <Input
               {...register(name, { required: 'Required', ...options })}
               errorLabel={errorLabel as string}
               {...props}
            />
         )}
      </>
   )
}
