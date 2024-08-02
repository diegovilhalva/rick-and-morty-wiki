import React from 'react'
import FilterBtn from '../FilterBtn'

const Gender = ({setPageNumber,setGender}) => {
  const genders = ['female','male','genderless','unknown']
  return (
    <div className="accordion-item">
    <h2 className="accordion-header" aria-labelledby="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Gender
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body d-flex flex-wrap gap-3">
        {genders.map((items,index) => (
          <FilterBtn index={index} name={'gender'} key={index} items={items} setPageNumber={setPageNumber} task={setGender}/>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Gender