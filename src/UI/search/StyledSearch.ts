import { styled } from 'styled-components'

export interface StyledSearchProps {
   width: string
}

export const SearchWrapper = styled.div<StyledSearchProps>(
   (props) => `
   flex: 0 1 ${props.width};
   height: 40px;
   position: relative;

   &:before {
      font-size: 16px;
      position: absolute;
      right: 12px;
      top: 12px;
   }
`
)

export const StyledSearch = styled.input(
   (props) => `
   width: 100%;
   height: 100%;
   border-radius: 4px;
   border: 0.5px solid ${props.theme.colors.g.lighestGray};
   background: #FFF;
   padding: 8px 34px 8px 12px;
   font-size: 14px;
   color: ${props.theme.colors.g.darkGray};
   
   &::placeholder {
      color: ${props.theme.colors.g.gray};
   }

   &:focus {
      outline: none;
   }
`
)
