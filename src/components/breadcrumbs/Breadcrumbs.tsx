import React from 'react'
import { StyledBreadcrumbs, StyledBreadcrumbsProps } from './StyledBreadcrumbs'
import { useLocation } from 'react-router-dom'
import {
   capitalizeWorld,
   getNameRootPage,
   singularWorld,
} from '../../utils/stringHelper'

interface BreadcrumbsProps extends StyledBreadcrumbsProps {
   prefixParam?: string
   children?: React.ReactNode
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
   prefixParam,
   children,
   ...props
}) => {
   const location = useLocation()

   const nameRootPage = getNameRootPage(location.pathname)
   const rootPage = capitalizeWorld(nameRootPage)
   const sinpularNamePage = singularWorld(rootPage, 'l')
   return (
      <StyledBreadcrumbs $justify="space-between" $align="center" {...props}>
         <p>
            {rootPage}
            <span> / </span>
            {prefixParam} {sinpularNamePage}
         </p>
         {children}
      </StyledBreadcrumbs>
   )
}
