export const getLimiterDate = (limitYears: number): string => {
   const date = new Date(new Date().getFullYear() - limitYears, 0, 1)
      .toISOString()
      .slice(0, 10)

   return date
}
