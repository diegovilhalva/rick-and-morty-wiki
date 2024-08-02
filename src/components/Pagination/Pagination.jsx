import React from 'react'
import ReactPaginate from 'react-paginate'

const Pagination = ({ pageNumber, setPageNumber, info }) => {


  return (
    <>
    <style jsx="true">
        {`
          @media (max-width: 768px) {
            .pagination {
              font-size: 12px;
            }
            .pagination 
            .btn,
            .pagination .btn-primary {
              display: none;
            }
          }
          @media (max-width: 768px) {
            .pagination {
              font-size: 14px;
            }
          }
        `}
      </style>

      <ReactPaginate
        className='pagination justify-content-center gap-1 my-4'
        forcePage={pageNumber === 0 ? 0 : pageNumber - 1}
        nextLabel={'Next'}
        previousLabel={'Prev'}
        previousClassName='btn btn-primary '
        nextClassName='btn btn-primary'
        pageCount={info?.pages}
        pageRangeDisplayed={3}
        nextLinkClassName='text-white'
        previousLinkClassName='text-white'
        pageClassName='page-item'
        pageLinkClassName='page-link'
        onPageChange={(data) => setPageNumber(data.selected + 1)}
        activeClassName='active'

      />
    </>

  )
}

export default Pagination