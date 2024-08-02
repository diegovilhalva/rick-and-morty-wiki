import React from 'react'
import Gender from './Category/Gender'
import Species from './Category/Species'
import Status from './Category/Status'

const Filters = ({setStatus,setPageNumber,setGender,setSpecies}) => {
  const clear = () => {
    setStatus("")
    setPageNumber(1)
    setGender("")
    setSpecies("")
    window.location.reload(false)
  }
  return (
    <div className="col-lg-3 col-12 mb-5">
      <div className="text-center fw-bold fs-4 mb-4">
        Filter
      </div>
      <div style={{ cursor: "pointer" }} className="text-center text-primary text-decoration-underline mb-3" onClick={clear}>
        Clear Filters
      </div>
      <div className="accordion" id="accordionExample">
        <Status setPageNumber={setPageNumber} setStatus={setStatus}/>
        <Species setPageNumber={setPageNumber} setSpecies={setSpecies} />
        <Gender setPageNumber={setPageNumber} setGender={setGender} /> 
      </div>
    </div>
  )
}

export default Filters