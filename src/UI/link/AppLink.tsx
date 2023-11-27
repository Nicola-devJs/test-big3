import React from 'react'
import { StyledAppLink } from './StyledAppLink'

interface AppLinkProps {
   path: string
   children: string
}

export const AppLink: React.FC<AppLinkProps> = ({ children, path }) => {
   return <StyledAppLink to={path}>{children}</StyledAppLink>
}
