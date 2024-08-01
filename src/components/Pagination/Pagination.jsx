import React from 'react'

const Pagination = ({pageNumber,setPageNumber}) => {

    const prev = () => {
        if (pageNumber === 1) {
            return
        }
        setPageNumber(prev=> prev - 1 )
    }
    const next = () => {
      
        setPageNumber(prev => prev + 1)
    }
  return (
    <div className="container d-flex justify-content-center gap-5 my-5">
        {pageNumber !== 1 ? <button className='btn btn-primary' onClick={prev}>Prev</button> : <button className='btn btn-primary' onClick={prev} disabled>Prev</button>}
        <button className='btn btn-primary' onClick={next}>Next</button>
    </div>
  )
}

export default Pagination