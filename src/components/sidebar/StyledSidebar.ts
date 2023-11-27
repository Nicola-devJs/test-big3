import { css, styled } from 'styled-components'
import { StyledFlex } from '../styled/flex/StyledFlex'
import { NavLink } from 'react-router-dom'

export const StyledSidebar = styled.aside(
   (props) => `
      width: ${props.theme.sizeBlock.widthSidebar};
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
      }
   `
)

export const SidebarNavbar = styled(StyledFlex)((props) => ({
   padding: '32px',
   height: '100%',
}))

export const SidebarMenuList = styled(StyledFlex)((props) => ({}))

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
