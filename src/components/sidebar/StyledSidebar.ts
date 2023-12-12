import { css, styled } from 'styled-components'
import { StyledFlex } from '../styled/flex/StyledFlex'
import { NavLink } from 'react-router-dom'

export interface StyledSidebarProps {
   $visibleMenu: boolean
}

export const StyledSidebar = styled.aside<StyledSidebarProps>(
   (props) => `
      min-width: ${props.theme.sizeBlock.widthSidebar};
      background: #fff;
      

      @media(${props.theme.media.maxTablet}) {
         position: absolute;
         z-index: 10;
         top: 0;
         bottom: 0;
         left: 0;
         right: 0;
         width: 200px;
         transform: translateX(-250px);
         transition: transform .2s ease-in-out;

         ${props.$visibleMenu && 'transform: translateX(0px);'}
      }
   `
)

export const SidebarNavbar = styled(StyledFlex)(
   (props) => `
   padding: 32px;
   height: 100%;

   @media(${props.theme.media.maxTablet}) {
      padding: 24px 20px;
      align-items: flex-start;
      justify-content: stretch;
   }
`
)

export const SidebarMenuList = styled(StyledFlex)(
   (props) => `
   @media(${props.theme.media.maxTablet}) {
      flex: 1 1 auto;
   }
  
`
)

export const SidebarMenuItem = styled(NavLink)(
   (props) => css`
      display: flex;
      flex-direction: column;
      font-size: 12px;
      color: ${props.theme.colors.g.lightGray};
      align-items: center;
      line-height: 150%;
      width: max-content;

      &:before {
         font-size: 24px;
         color: ${props.theme.colors.g.lightGray};
      }

      &:not(:last-child) {
         margin-bottom: 36px;
      }

      &.active {
         color: ${props.theme.colors.r.red};
         &:before {
            color: ${props.theme.colors.r.red};
         }
      }

      @media (${props.theme.media.maxTablet}) {
         flex-direction: row;
         gap: 8px;
         font-size: 13px;
      }
   `
)

export const SidebarLogout = styled(SidebarMenuItem)(
   (props) => css`
      color: ${props.theme.colors.r.lighestRed};
      &:before {
         color: ${props.theme.colors.r.lighestRed};
      }
   `
)

export const SidebarWrapperProfile = styled.div(
   () => `
   margin: -4px -4px 40px -4px;

   &:after {
      content: '';
      position: absolute;
      top: 81px;
      left: 0;
      right: 0;
      width: 100%;
      height: 1px;
      background: #9C9C9C;

   }
`
)
