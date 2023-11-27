import React from 'react'
import { Navigate } from 'react-router-dom'
import { RoutesNamePath } from '../pages/Routes'
import { useAppSelector } from '../core/redux/hooks'

interface RequiredAuthProps {
   children: React.ReactElement | React.ReactNode
}

export const RequiredAuth: React.FC<RequiredAuthProps> = ({ children }) => {
   const { auth } = useAppSelector((state) => state.auth)

   if (!auth) {
      return <Navigate to={RoutesNamePath.SIGNIN} />
   }

   return <>{children}</>
}
