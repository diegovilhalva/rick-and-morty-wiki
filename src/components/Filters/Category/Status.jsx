import React from 'react'
import FilterBtn from '../FilterBtn'

const Status = () => {
  const status = ['Alive', 'Dead', 'Unknown']
  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Status
        </button>
      </h2>
      <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div className="accordion-body">
          {status.map((items, index) => (
            <FilterBtn key={index}
              index={index} 
              name={'status'}
              items={items}
             />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Status