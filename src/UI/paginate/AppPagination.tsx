import React from 'react'
import ReactPaginate from 'react-paginate'
import classes from './AppPaginate.module.css'
import { useMediaQuery } from 'react-responsive'

interface AppPaginationProps {
   itemsPerPage: number
   countItems: number
   currentPage: number
   onChange: (page: number) => void
}

type selectedItem = { selected: number }

export const AppPagination: React.FC<AppPaginationProps> = ({
   itemsPerPage,
   countItems,
   currentPage,
   onChange,
}) => {
   const isTablet = useMediaQuery({ query: '(max-width: 768px)' })
   const pageCount = Math.ceil(countItems / itemsPerPage)

   const handlePageClick = (event: selectedItem) => {
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
         forcePage={currentPage - 1}
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
