import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { Layout } from '../common/components/layout/Layout'
import { Players } from './players/Players'
import { Teams } from './teams/Teams'
import { SignIn } from './authorization/SignIn'
import { SignUp } from './authorization/SignUp'
import { getStorage } from '../common/helpers/localStorageHelper'
import { useAppDispatch } from '../core/redux/hooks'
import { IAuthUserResponse } from '../api/dto/IAuthorization'
import { NotFound } from './notfound/NotFound'
import { PlayerAction } from './itemAction/PlayerAction'
import { TeamAction } from './itemAction/TeamAction'
import { PlayerPage } from './playerPage/PlayerPage'
import { TeamPage } from './teamPage/TeamPage'
import { authSlice } from '../modules/authorization/authorizationSlice'

export enum RoutesNamePath {
   MAIN = '/',
   TEAMS = '/teams',
   ADDITEM = 'add',
   EDITITEM = 'edit',
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
               path={`${RoutesNamePath.TEAMS}/:id`}
               element={<TeamPage />}
            />
            <Route
               path={`${RoutesNamePath.TEAMS}/${RoutesNamePath.ADDITEM}`}
               element={<TeamAction />}
            />
            <Route
               path={`${RoutesNamePath.TEAMS}/:id/${RoutesNamePath.EDITITEM}`}
               element={<TeamAction />}
            />
            <Route path={RoutesNamePath.PLAYERS} element={<Players />} />
            <Route
               path={`${RoutesNamePath.PLAYERS}/:id`}
               element={<PlayerPage />}
            />
            <Route
               path={`${RoutesNamePath.PLAYERS}/${RoutesNamePath.ADDITEM}`}
               element={<PlayerAction />}
            />
            <Route
               path={`${RoutesNamePath.PLAYERS}/:id/${RoutesNamePath.EDITITEM}`}
               element={<PlayerAction />}
            />
         </Route>
         <Route path={RoutesNamePath.SIGNIN} element={<SignIn />} />
         <Route path={RoutesNamePath.SIGNUP} element={<SignUp />} />
         <Route path={RoutesNamePath.NOTFOUND} element={<NotFound />} />
      </Routes>
   )
}

export default AppRouter
