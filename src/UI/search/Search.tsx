import React, { useState } from 'react'
import { StyledSearch, StyledSearchProps, SearchWrapper } from './StyledSearch'

interface SearchProps extends StyledSearchProps {
   placeholder?: string
}

export const Search: React.FC<SearchProps> = ({
   width,
   placeholder,
   ...props
}) => {
   const [searchValue, setSearchValue] = useState<string>('')

   return (
      <SearchWrapper id="search" className="icon-search" width={width}>
         <StyledSearch
            type="text"
            placeholder={placeholder || 'Search...'}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            {...props}
         />
      </SearchWrapper>
   )
}
