import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { Layout } from '../components/layout/Layout'
import { Players } from './players/Players'
import { Teams } from './teams/Teams'
import { SignIn } from './authorization/SignIn'
import { SignUp } from './authorization/SignUp'
import { getStorage } from '../utils/localStorageHelper'
import { useAppDispatch } from '../core/redux/hooks'
import { authSlice } from '../modules/authorization/authorizationSlice'
import { IAuthUserResponse } from '../api/dto/IAuthorization'
import { NotFound } from './notfound/NotFound'
import { AddItem } from './add/AddItem'
import { PlayerPage } from './playerPage/PlayerPage'
import { TeamPage } from './teamPage/TeamPage'

export enum RoutesNamePath {
   MAIN = '/',
   TEAMS = '/teams',
   ADDITEM = 'add',
   PLAYERS = '/players',
   SIGNIN = '/signin',
   SIGNUP = '/signup',
   NOTFOUND = '*',
}

const AppRouter = () => {
   const dispatch = useAppDispatch()
   const navigate = useNavigate()
   useEffect(() => {
      const user: IAuthUserResponse | null = getStorage('user')
      if (user) {
         dispatch(authSlice.actions.authLogin(user))
         navigate(RoutesNamePath.TEAMS)
      }
   }, [])

   return (
      <Routes>
         <Route path={RoutesNamePath.MAIN} element={<Layout />}>
            <Route path={RoutesNamePath.TEAMS} element={<Teams />} />
            <Route
               path={`${RoutesNamePath.TEAMS}/${RoutesNamePath.ADDITEM}`}
               element={<AddItem />}
            />
            <Route path={RoutesNamePath.PLAYERS} element={<Players />} />
            <Route
               path={`${RoutesNamePath.PLAYERS}/${RoutesNamePath.ADDITEM}`}
               element={<AddItem />}
            />
            <Route
               path={`${RoutesNamePath.PLAYERS}/:id`}
               element={<PlayerPage />}
            />
            <Route
               path={`${RoutesNamePath.TEAMS}/:id`}
               element={<TeamPage />}
            />
         </Route>
         <Route path={RoutesNamePath.SIGNIN} element={<SignIn />} />
         <Route path={RoutesNamePath.SIGNUP} element={<SignUp />} />
         <Route path={RoutesNamePath.NOTFOUND} element={<NotFound />} />
      </Routes>
   )
}

export default AppRouter
