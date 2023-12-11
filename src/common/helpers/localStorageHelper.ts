export const getStorage = <T>(key: string): T | null => {
   const data = localStorage.getItem(key)
   if (!data) {
      return null
   }
   return JSON.parse(data)
}

export const setStorage = (key: string, data: object): void => {
   const dataStorage = localStorage.getItem(key)
   if (dataStorage) {
      const changeToObject = JSON.parse(dataStorage)
      localStorage.setItem(key, JSON.stringify({ ...changeToObject, ...data }))
   } else {
      localStorage.setItem(key, JSON.stringify(data))
   }
}
