import React from 'react'
import { IFetchingRejected } from '../../helpers/interfaces/requestInterfaces/RequestBase'
import { Loading } from '../loading/Loading'
import { Empty } from '../empty/Empty'
import { ErrorContent } from '../errorContent/ErrorContent'
import notfound from '../../../assets/images/404.png'

interface ViewContentProps {
   loading: boolean
   error: IFetchingRejected | undefined
   list?: Array<object>
   children: React.ReactNode
}

export const ViewContent = ({
   loading,
   error,
   list,
   children,
}: ViewContentProps) => {
   return (
      <>
         {loading ? (
            <Loading />
         ) : error ? (
            <ErrorContent
               $sizeImg={{ w: 380, h: 212 }}
               img={notfound}
               title={error.statusText}
               text="Sorry, we can’t find what you’re looking for"
            />
         ) : !list ? (
            <>{children}</>
         ) : list.length ? (
            <>{children}</>
         ) : (
            <Empty />
         )}
      </>
   )
}
