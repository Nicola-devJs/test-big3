import React, { ChangeEvent, useEffect, useState } from 'react'
import {
   Control,
   FieldValues,
   FormState,
   Path,
   useController,
} from 'react-hook-form'
import { LoadPhoto } from '../../../../UI/loadPhoto/LoadPhoto'

interface FormAddLoadPhotoProps<T extends FieldValues> {
   name: Path<T>
   formState?: FormState<T>
   control?: Control<T>
}

export function FormAddLoadPhoto<T extends FieldValues>({
   name,
   formState,
   control,
   ...props
}: FormAddLoadPhotoProps<T>) {
   const [files, setFiles] = useState<FileList | null>(null)

   const {
      field: { onChange, value },
   } = useController({
      name,
      control,
      rules: { required: 'Required' },
   })

   useEffect(() => {
      const reader = new FileReader()
      if (!files) return
      reader.addEventListener('load', reanderUrlImg)

      files[0] && reader.readAsDataURL(files[0])

      return () => {
         reader.removeEventListener('load', reanderUrlImg)
      }
   }, [files])

   function reanderUrlImg(ev: ProgressEvent<FileReader>) {
      if (ev.target) {
         onChange(ev.target.result as string)
      }
   }

   const errorLabel = formState ? formState.errors[name]?.message : ''

   const changePhotoHandler = (e: ChangeEvent<HTMLInputElement>) => {
      setFiles(e.target.files)
   }

   return (
      <>
         {control && (
            <LoadPhoto
               onChange={changePhotoHandler}
               value={value}
               errorLabel={errorLabel as string}
               {...props}
            />
         )}
      </>
   )
}
