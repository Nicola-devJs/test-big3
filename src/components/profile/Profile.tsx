import React from 'react'
import { StyledProfile, ProfileName, ProfileAvatar } from './StyledProfile'
import { useAppSelector } from '../../core/redux/hooks'

interface ProfileProps {
   fontSize?: number
   sizeAvatar?: number
   direction?: 'row-reverse' | 'row'
   gap?: string
}

export const Profile: React.FC<ProfileProps> = ({
   fontSize,
   sizeAvatar,
   direction = 'row',
   gap,
}) => {
   const { user } = useAppSelector((state) => state.auth)

   return (
      <StyledProfile $align="center" $direction={direction} $gap={gap}>
         <ProfileName $fz={fontSize}>{user.name}</ProfileName>
         <ProfileAvatar $size={sizeAvatar} $avatar={user.avatarUrl} />
      </StyledProfile>
   )
}
