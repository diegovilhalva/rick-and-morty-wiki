import React from 'react'

const InputGroup = ({total,name,setId}) => {
    return (
        <div className="input-group mb-3">
            
            <select className="form-select" onChange={(e) => setId(e.target.value)} id={name}>
                <option>Choose...</option>
                {[...Array(total).keys()].map(x => {
                    return( <option key={`${name}- ${x+ 1}`} value={x + 1}>{name} - {x + 1}</option>)
                })}
               
             
            </select>
        </div>
    )
}

export default InputGroup