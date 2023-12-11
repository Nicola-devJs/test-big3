import React, { ChangeEvent } from 'react'
import { StyledSearch, StyledSearchProps, SearchWrapper } from './StyledSearch'

interface SearchProps extends StyledSearchProps {
   placeholder?: string
   value: string
   onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export const Search: React.FC<SearchProps> = ({
   width,
   placeholder,
   ...props
}) => {
   return (
      <SearchWrapper id="search" className="icon-search" width={width}>
         <StyledSearch
            type="text"
            placeholder={placeholder || 'Search...'}
            {...props}
         />
      </SearchWrapper>
   )
}
