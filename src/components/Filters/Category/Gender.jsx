import React from 'react'
import FilterBtn from '../FilterBtn'

const Gender = () => {
  const genders = ['female','male','genderless','unknown']
  return (
    <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Gender
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        {genders.map((items,index) => (
          <FilterBtn index={index} name={'gender'} key={index} items={items}/>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Gender