import { IRequestBaseBody } from '../common/helpers/interfaces/requestInterfaces/RequestBase'
import { RequestGenericType } from '../common/helpers/types/types'

// @ts-ignore
const base = process.env.REACT_APP_API

const request = async (
   url: string,
   data: IRequestBaseBody,
   token: string | undefined
) => {
   const headersForToken = token
      ? {
           Authorization: `Bearer ${token}`,
        }
      : {}
   const headerForMultiPart =
      typeof data.body === 'string'
         ? {
              'Content-Type': 'application/json;charset=utf-8',
           }
         : {}
   const response = await fetch(url, {
      ...data,
      // @ts-ignore
      headers: {
         ...headersForToken,
         ...headerForMultiPart,
      },
   })
   if (response.ok) {
      if (response.headers.get('Content-Length') === '0') {
         return true
      }
      const typeResponse = response.headers.get('Content-Type')
      let result
      if (typeResponse === 'application/text') {
         result = await response.text()
         return result
      }
      result = await response.json()
      return result
   }

   // eslint-disable-next-line no-throw-literal
   throw { isCustomError: true, status: response.status }
}

export const get = (url: string, token?: string) =>
   request(`${base}${url}`, { method: 'GET' }, token)

export function post<T extends RequestGenericType>(
   url: string,
   body: T,
   token?: string
) {
   const bodyToString = JSON.stringify(body)
   return request(
      `${base}${url}`,
      { method: 'POST', body: bodyToString },
      token
   )
}

export const remove = (url: string, token: string) =>
   request(`${base}${url}`, { method: 'DELETE' }, token)

export function put<T extends RequestGenericType>(
   url: string,
   body: T,
   token: string
) {
   const bodyToString = JSON.stringify(body)
   return request(`${base}${url}`, { method: 'PUT', body: bodyToString }, token)
}
