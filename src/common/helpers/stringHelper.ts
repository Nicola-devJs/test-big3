export const capitalizeWorld = (world: string): string => {
   return world.charAt(0).toUpperCase() + world.slice(1)
}

export const getNameRootPage = (path: string): string => {
   const subStr =
      path.lastIndexOf('/') === 0 ? path.length : path.lastIndexOf('/')
   return path.slice(path.indexOf('/') + 1, subStr)
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
