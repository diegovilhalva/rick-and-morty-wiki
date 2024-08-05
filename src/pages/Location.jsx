import React, { useEffect, useState } from 'react'
import Cards from "../components/Cards/Cards"
import InputGroup from '../components/Filters/Category/InputGroup'  

const Location = () => {
  const [results,setResults] = useState([])
  const [info,setInfo] = useState([])
  const [number,setNumber] = useState(1)
  
  const  api = `https://rickandmortyapi.com/api/location/${number}`;  
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(api)
      const data = await res.json()

      if (res.ok) {
        setInfo(data)
      }

      const a  = await Promise.all(
        data.residents.map((item) => {
          return fetch(item).then((res) => res.json())
        })
      )

      setResults(a)

    }
    fetchData()
  }, [api])

  return (
    <div className='container'>
    <div className="row mb-4">
        <h1 className="text-center mb-4">
          Location: <span className='text-primary'>{info.name=== "" ? "Unknown" :  info.name}</span>
        </h1>
        <h5 className="text-center">
        Dimension: {info.dimension === "" ? "Unknown" : info.dimension}
        </h5>
        <h6 className="text-center">
          Type : {info.type === "" ? "Unknown" : info.type }
        </h6>
    </div>
    <div className="row">
        <div className="col-lg-3 col-12 mb-4">
          <h4 className="text-center mb-4">
            Pick Location
          </h4>
          <InputGroup name={'Location'} setId={setNumber}  total={126}/>
        </div>
        <div className="col-lg-8 col-12">
          <div className="row">
            <Cards results={results}/>       
          </div>
        </div>
    </div>
  </div>
  )
}

export default Location