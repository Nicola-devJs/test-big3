export const capitalizeWorld = (world: string): string => {
   return world.charAt(0).toUpperCase() + world.slice(1)
}

export const getNameRootPage = (path: string): string => {
   const pattern = /[^\/]+/

   const result = path.match(pattern)
   return result ? result[0] : path
}

export const singularWorld = (str: string, cases?: 'u' | 'l'): string => {
   if (str.endsWith('s')) {
      const newStr = str.slice(0, str.length - 1)

      return cases === 'u'
         ? newStr.toUpperCase()
         : cases === 'l'
         ? newStr.toLowerCase()
         : newStr
   }

   return str
}
