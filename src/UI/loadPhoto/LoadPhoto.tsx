import React, { useEffect, useState } from 'react'
import { StyledLoadPhoto, typeSrsFile } from './StyledLoadPhoto'
import { InputLabel } from '../inputLabel/InputLabel'

interface LoadPhotoProps {
   errorLabel?: string
}

type RefNode = HTMLInputElement

export const LoadPhoto = React.forwardRef<RefNode, LoadPhotoProps>(
   ({ errorLabel, ...props }, ref) => {
      const [file, setFile] = useState<File>()
      const [srcFile, setSrcFile] = useState<typeSrsFile>(null)
      const loadPhotoHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
         if (e.target.files) setFile(e.target.files[0])
      }

      useEffect(() => {
         const reader = new FileReader()
         if (!file) return
         reader.addEventListener('load', reanderUrlImg)

         file && reader.readAsDataURL(file)

         return () => {
            reader.removeEventListener('load', reanderUrlImg)
         }
      }, [file])

      function reanderUrlImg(ev: ProgressEvent<FileReader>) {
         if (ev.target) {
            setSrcFile(ev.target.result)
         }
      }

      return (
         <InputLabel errorLabel={errorLabel} id="load">
            <input
               {...props}
               ref={ref}
               type="file"
               style={{ display: 'none' }}
               accept=".png, .jpg, .jpeg, .svg"
               onChange={loadPhotoHandler}
            />
            <StyledLoadPhoto
               $justify="center"
               $align="center"
               $urlPhoto={srcFile}
            />
         </InputLabel>
      )
   }
)
