import styled from 'styled-components'
import { StyledFlex } from '../styled/flex/StyledFlex'
import defaultAvatar from '../../../assets/images/profile.png'

export interface StyledProfileAvatarProps {
   $avatar: string | null
   $size: number | undefined
}

export const StyledProfile = styled(StyledFlex)<{ $gap?: string }>(
   (props) => `
      gap: ${props.$gap ? props.$gap : '16px'};
`
)

export const ProfileName = styled.span<{ $fz: number | undefined }>(
   (props) => ({
      fontSize: props.$fz || 14,
      color: props.theme.colors.g.darkGray,
   })
)

export const ProfileAvatar = styled.div<StyledProfileAvatarProps>((props) => ({
   width: props.$size || 36,
   height: props.$size || 36,
   borderRadius: '50%',
   background: `url(${props.$avatar ?? defaultAvatar}) no-repeat`,
   backgroundSize: 'cover',
}))
