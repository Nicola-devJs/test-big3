import { css, styled } from 'styled-components'
import { StyledFlex } from '../../../../components/styled/flex/StyledFlex'
import pictureSignIn from '../../../../assets/images/signin.png'
import pictureSignUp from '../../../../assets/images/signup.png'

export const StyledAuth = styled(StyledFlex)<{ $error: string | undefined }>(
   (props) => css`
      width: 100%;
      height: 100vh;
      position: relative;
      ${props.$error &&
      css`
         &:after {
            content: '${props.$error}';
            color: #fff;
            background: ${props.theme.colors.r.lightRed};
            padding: 8px 16px;
            width: max-content;
            position: absolute;
            right: 36px;
            top: 36px;
            z-index: 100;
         }
      `}
   `
)

export const AuthContent = styled(StyledFlex)(
   (props) => `
   flex: 0 1 42%;
   background: #fff;
   padding: 20px ${(120 / 1440) * 100}%;

   @media(${props.theme.media.maxNotebook}) {
      flex: 0 1 50%;
      padding: 20px ${(60 / 1440) * 100}%;
   }

   @media(${props.theme.media.maxTablet}) {
      flex: 1 1 auto;
      align-items: center;
      padding: 24px;
   }
`
)

export const AuthTitle = styled.h2((props) => ({
   textTransform: 'capitalize',
   fontSize: 36,
   fontWeight: 350,
   marginBottom: 32,
   color: props.theme.colors.b.blue,
}))

export const AuthIsMember = styled.p((props) => ({
   textAlign: 'center',
   fontSize: 14,
   color: props.theme.colors.g.gray,
   width: '100%',
   marginTop: 24,
}))

export const AuthImgContainer = styled(StyledFlex)(
   (props) => `
   flex: 0 1 58%;
   background: #f5fbff;

   img {
      width: 660px;
      height: 0px;
      padding-bottom: ${(414 / 834) * 100}%;
      object-fit: cover;
      object-position: center;
   }

   @media(${props.theme.media.maxNotebook}) {
      flex: 0 1 50%;
   }

   @media(${props.theme.media.maxTablet}) {
      display: none;
   }
`
)

export const AuthImg = styled.div<{ $auth?: boolean }>((props) => ({
   flex: '0 1 660px',
   height: 0,
   paddingBottom: `${(414 / 834) * 100}%`,
   background: `url(${props.$auth ? pictureSignIn : pictureSignUp}) no-repeat`,
   backgroundSize: 'contain',
   backgroundPosition: 'center',
}))
