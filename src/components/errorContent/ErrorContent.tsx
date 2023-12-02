import React from 'react'
import {
   ErrorImg,
   ErrorImgProps,
   ErrorText,
   ErrorTitle,
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
      <>
         <ErrorImg $sizeImg={$sizeImg}>
            <img src={img} alt="404" />
         </ErrorImg>
         <ErrorTitle>{title}</ErrorTitle>
         <ErrorText>{text}</ErrorText>
      </>
   )
}
