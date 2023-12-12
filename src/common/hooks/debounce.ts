import { useCallback, useRef } from 'react'

export function useDebounce(callback: (...args: any) => void, delay: number) {
   const timer = useRef<any>()

   const debounceFunction = useCallback(
      (...args: any[]) => {
         if (timer.current) {
            clearTimeout(timer.current)
         }

         timer.current = setTimeout(() => {
            callback(...args)
         }, delay)
      },
      [callback, delay]
   )

   return debounceFunction
}
