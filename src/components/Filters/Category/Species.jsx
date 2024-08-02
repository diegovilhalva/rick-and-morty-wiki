import React from 'react'
import FilterBtn from '../FilterBtn';

const Species = ({setPageNumber,setSpecies}) => {
  const  species = [
    "Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological",
    "Unknown",
    "Animal",
    "Disease",
    "Robot",
    "Cronenberg",
    "Planet",
  ];
  return (
    <div className="accordion-item">
    <h2 className="accordion-header"  id="headingOne">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne" >
        Species
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse"
     data-bs-parent="#accordionExample" aria-labelledby="headingOne">
      <div className="accordion-body d-flex flex-wrap gap-3">
        {species.map((items,index) => (
          <FilterBtn index={index} name={'species'} setPageNumber={setPageNumber} task={setSpecies} items={items} key={index}/>
        ))}    
      </div>
    </div>
  </div>
  )
}

export default Species