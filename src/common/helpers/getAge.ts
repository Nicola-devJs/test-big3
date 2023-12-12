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
