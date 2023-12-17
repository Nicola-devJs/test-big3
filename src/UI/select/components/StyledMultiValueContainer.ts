import { styled } from 'styled-components'

export const AppSelectWrapper = styled.div<{ width: string }>(
   (props) => `
   flex: 0 1 ${props.width};
   min-width: 0px;
   max-width: ${props.width};
`
)

export const MultiValueContainerBody = styled.div(
   (props) => `
   overflow: hidden;
   text-overflow: ellipsis;
`
)

export const MultiValueContainerPlaceholder = styled.p(
   (props) => `
   font-size: 15px;
   color: ${props.theme.colors.g.gray};
`
)
