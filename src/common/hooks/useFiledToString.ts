import { useState, useEffect } from 'react'

export const useFiledToString = (files: FileList | null): string => {
   const [srcFile, setSrcFile] = useState<string>()

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
         setSrcFile(ev.target.result as string)
      }
   }

   return srcFile as string
}
