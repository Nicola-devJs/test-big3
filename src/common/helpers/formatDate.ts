export const getAge = (birthday: string): string => {
   const now = new Date()
   const dob = new Date(birthday)
   const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
   const dobnow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate())
   let age
   age = today.getFullYear() - dob.getFullYear()

   if (today < dobnow) {
      age = age - 1
   }
   return age.toString()
}

export const initialDate = (stringLocationDate: string): string => {
   const date = new Date(stringLocationDate)
   let month: number | string = date.getMonth() + 1
   let day: number | string = date.getDate()
   month = month < 10 ? '0' + month : month
   day = day < 10 ? '0' + day : day

   return `${date.getFullYear()}-${month}-${day}`
}
