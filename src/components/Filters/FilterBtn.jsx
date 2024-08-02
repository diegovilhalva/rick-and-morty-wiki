import React from 'react'

const FilterBtn = ({ name, index,items }) => {
    return (
        <>
            <style jsx="true">
                {`
          .x:checked + label {
            background-color: #0b5ed7;
            color: white;
          }
          input[type="radio"] {
            display: none;
          }
        `}
            </style>

            <div className="form-check">
                <input className="form-check-input" type="radio" name={name} id={`${name}-${index}`}
                />
                <label className="btn btn-outline-primary" for={`${name}-${index}`}>
                    {items}
                </label>
            </div>

        </>
    )
}

export default FilterBtn