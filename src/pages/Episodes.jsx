import React, { useEffect, useState } from 'react'
import Cards from "../components/Cards/Cards"
import InputGroup from '../components/Filters/Category/InputGroup'
const Episodes = () => {
  const [id, setId] = useState(1)
  const [info, setInfo] = useState([])
  const [results,setResults] = useState([])
  const api = `https://rickandmortyapi.com/api/episode/${id}`

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(api)
      const data = await res.json()

      if (res.ok) {
        setInfo(data)
      }

      const a  = await Promise.all(
        data.characters.map((item) => {
          return fetch(item).then((res) => res.json())
        })
      )

      setResults(a)

    }
    fetchData()
  }, [api])

  console.log(info)
 
  return (
    <div className='container'>
      <div className="row mb-4">
          <h1 className="text-center mb-4">
            Episode : <span className='text-primary'>{info.name=== "" ? "Unknown" :  info.name}</span>
          </h1>
          <h5 className="text-center">
            Air Date {info.air_date === "" ? "Unknown" : info.air_date }
          </h5>
      </div>
      <div className="row">
          <div className="col-lg-3 col-12 mb-4">
            <h4 className="text-center mb-4">
              Pick Episodes
            </h4>
            <InputGroup name="Episode" total={51} setId={setId}/>
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

export default Episodes