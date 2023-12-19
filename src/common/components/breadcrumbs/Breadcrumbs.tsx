import React from 'react'
import { StyledBreadcrumbs, StyledBreadcrumbsProps } from './StyledBreadcrumbs'
import { useLocation } from 'react-router-dom'
import {
   capitalizeWorld,
   getNameRootPage,
   singularWorld,
} from '../../helpers/stringHelper'

interface BreadcrumbsProps extends StyledBreadcrumbsProps {
   prefixParam?: string
   currentPage?: string
   children?: React.ReactNode
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
   prefixParam,
   children,
   currentPage,
   ...props
}) => {
   const location = useLocation()

   const rootPage = capitalizeWorld(getNameRootPage(location.pathname))
   const sinpularNamePage = singularWorld(rootPage, 'l')
   const isCurrentPage = currentPage
      ? currentPage
      : prefixParam + ' ' + sinpularNamePage
   return (
      <StyledBreadcrumbs $justify="space-between" $align="center" {...props}>
         <p>
            {rootPage}
            <span> / </span>
            {isCurrentPage}
         </p>
         {children}
      </StyledBreadcrumbs>
   )
}
