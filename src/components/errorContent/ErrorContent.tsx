import React from 'react'
import {
   ErrorImg,
   ErrorImgProps,
   ErrorText,
   ErrorTitle,
   ErrorBody,
   StyledError,
} from './StyledErrorContent'

interface ErrorContentProps extends ErrorImgProps {
   img: string
   title: string
   text: string
}

export const ErrorContent: React.FC<ErrorContentProps> = ({
   img,
   $sizeImg,
   text,
   title,
}) => {
   return (
      <StyledError $justify="center" $align="center">
         <ErrorBody>
            <ErrorImg $sizeImg={$sizeImg}>
               <img src={img} alt="404" />
            </ErrorImg>
            <ErrorTitle>{title}</ErrorTitle>
            <ErrorText>{text}</ErrorText>
         </ErrorBody>
      </StyledError>
   )
}
