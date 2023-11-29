import React, { useState } from 'react'
import ReactPaginate from 'react-paginate'
import classes from './AppPaginate.module.css'

interface AppPaginationProps {
   itemsPerPage: number
}

type selectedItem = { selected: number }

export const AppPagination: React.FC<AppPaginationProps> = ({
   itemsPerPage,
}) => {
   const items = Array(60)
      .fill('')
      .map((_, i) => i++)
   const [itemOffset, setItemOffset] = useState(0)
   const endOffset = itemOffset + itemsPerPage
   const currentItems = items.slice(itemOffset, endOffset)
   const pageCount = Math.ceil(items.length / itemsPerPage)

   const handlePageClick = (event: selectedItem) => {
      const newOffset = (event.selected * itemsPerPage) % items.length
      setItemOffset(newOffset)
   }

   return (
      <>
         <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={4}
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
      </>
   )
}