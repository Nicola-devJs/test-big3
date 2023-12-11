import { styled } from 'styled-components'
import { StyledFlex } from '../../components/styled/flex/StyledFlex'
import loadPhotoIcon from '../../assets/images/load-photo.png'

export const StyledLoadPhoto = styled(StyledFlex)<{ $urlPhoto: string }>(
   (props) => `
   width: 336px;
   height: 261px;
      border-radius: 10px;
      background: ${props.theme.colors.g.lightGray} url(${props.$urlPhoto}) no-repeat;
      opacity: 0.5;
      background-size: contain;
      background-position: bottom;
      

      &:after {
         content: '';
         flex: 0 1 75px;
         height: 75px;
         background: url(${loadPhotoIcon}) no-repeat;
         background-size: contain;
         background-position: center;
      }

   `
)
