import React, { useState } from 'react'
import ReactPaginate from 'react-paginate'
import classes from './AppPaginate.module.css'
import { useMediaQuery } from 'react-responsive'

interface AppPaginationProps {
   itemsPerPage: number
   items: Array<any>
   onChange: (page: number) => void
}

type selectedItem = { selected: number }

export const AppPagination: React.FC<AppPaginationProps> = ({
   itemsPerPage,
   items,
   onChange,
}) => {
   const isTablet = useMediaQuery({ query: '(max-width: 768px)' })
   const itemsMoc = Array(60).fill('')
   const [itemOffset, setItemOffset] = useState(0)
   const endOffset = itemOffset + itemsPerPage
   const currentItems = itemsMoc.slice(itemOffset, endOffset)
   const pageCount = Math.ceil(itemsMoc.length / itemsPerPage)

   const handlePageClick = (event: selectedItem) => {
      const newOffset = (event.selected * itemsPerPage) % itemsMoc.length
      setItemOffset(newOffset)
      onChange(event.selected + 1)
   }

   return (
      <ReactPaginate
         breakLabel="..."
         nextLabel=">"
         onPageChange={handlePageClick}
         pageRangeDisplayed={isTablet ? 3 : 4}
         marginPagesDisplayed={1}
         pageCount={pageCount}
         previousLabel="<"
         renderOnZeroPageCount={null}
         containerClassName={classes.paginate}
         pageClassName={classes.page}
         pageLinkClassName={classes.page_link}
         activeClassName={classes.active_page}
         activeLinkClassName={classes.active_page_link}
         previousClassName={classes.previous}
         previousLinkClassName={classes.previous_link}
         nextClassName={classes.next}
         nextLinkClassName={classes.next_link}
         breakClassName={classes.break}
         breakLinkClassName={classes.break_link}
      />
   )
}
