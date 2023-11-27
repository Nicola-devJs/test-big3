import axios, { AxiosResponse } from 'axios'
import {
   IAuthUserResponse,
   IAuthUser,
   IRegistrUser,
} from '../dto/IAuthorization'

export default class AuthService {
   static async signIn(
      data: IAuthUser
   ): Promise<AxiosResponse<IAuthUserResponse>> {
      return await axios.post(
         'http://dev.trainee.dex-it.ru/api/Auth/SignIn',
         data
      )
   }

   static async signUp(
      data: IRegistrUser
   ): Promise<AxiosResponse<IAuthUserResponse>> {
      return await axios.post(
         'http://dev.trainee.dex-it.ru/api/Auth/SignUp',
         data
      )
   }
}
