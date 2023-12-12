export interface IRequestBaseBody {
   method: 'GET' | 'POST' | 'PUT' | 'DELETE'
   body?: string
}

export interface IFetchingRejected {
   isCustomError: boolean
   status: number
   statusText: string
}
