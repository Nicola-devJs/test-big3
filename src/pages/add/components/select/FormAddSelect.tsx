import React from 'react'
import {
   Control,
   Controller,
   FieldValues,
   FormState,
   Path,
} from 'react-hook-form'
import {
   AppSelect,
   IOptionItem,
   loadOptionsType,
} from '../../../../UI/select/AppSelect'

interface FormAddSelectProps<T extends FieldValues> {
   name: Path<T>
   control?: Control<T>
   formState?: FormState<T>
   label: string
   loadOptions: loadOptionsType
}

export function FormAddSelect<T extends FieldValues>({
   name,
   control,
   formState,
   label,
   ...props
}: FormAddSelectProps<T>) {
   const errorLabel = formState ? formState.errors[name]?.message : ''
   return (
      <Controller
         name={name}
         control={control as Control<T>}
         rules={{ required: 'Required' }}
         render={({ field }) => (
            <AppSelect
               {...field}
               {...props}
               width="100%"
               label={label}
               errorLabel={errorLabel as string}
               isClearable={true}
               $form
            />
         )}
      />
   )
}
