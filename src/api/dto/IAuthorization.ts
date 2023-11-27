export interface IAuthUser {
   login: string
   password: string
}

export interface IRegistrUser extends IAuthUser {
   userName: string
}

export interface IAuthUserResponse {
   name: string
   avatarUrl: null
   token: string
}
