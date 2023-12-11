import { IAuthUserResponse } from '../dto/IAuthorization'
import {
   IAuthUser,
   IRegistrUser,
} from '../../common/helpers/interfaces/requestInterfaces/RequestAuth'
import { post } from '../baseRequest'

export default class AuthService {
   static async signIn(data: IAuthUser): Promise<IAuthUserResponse> {
      return await post('Auth/SignIn', data)
   }

   static async signUp(data: IRegistrUser): Promise<IAuthUserResponse> {
      return await post('Auth/SignUp', data)
   }
}
