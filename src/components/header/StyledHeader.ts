import { styled } from 'styled-components'
import { StyledFlex } from '../styled/flex/StyledFlex'
import defaultAvatar from '../../assets/images/profile.png'

export const StyledHeader = styled(StyledFlex)(
   (props) => `
   width: 100%;
   height: ${props.theme.sizeBlock.heightHeader};
   background: #fff;
   box-shadow: 0px 1px 10px 0px rgba(209, 209, 209, 0.50);
   padding: 16px 51px;
   position: relative;
   z-index: 5;

   @media(${props.theme.media.maxTablet}) {
      justify-content: center;
      height: 62px;
   }
`
)

export const HeaderLogo = styled.img(
   (props) => `
   width: 191px;
   height: 48px;
   object-fit: contain;

   @media(${props.theme.media.maxTablet}) {
      width: 137px;
      height: 34px;
   }
`
)

export const HeaderProfile = styled(StyledFlex)(
   (props) => `
   @media(${props.theme.media.maxTablet}) {
      display: none;
   }
`
)

export const HeaderProfileName = styled.span((props) => ({
   fontSize: 14,
   color: props.theme.colors.g.darkGray,
   marginRight: 16,
}))

export const HeaderProfileAvatar = styled.div<{ $avatar: string | null }>(
   (props) => ({
      width: 36,
      height: 36,
      borderRadius: '50%',
      background: `url(${props.$avatar ?? defaultAvatar}) no-repeat`,
      backgroundSize: 'cover',
   })
)
