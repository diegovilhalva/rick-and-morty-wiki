import { useEffect, useState } from "react"
import Cards from "./components/Cards/Cards"
import Filters from "./components/Filters/Filters"



function App() {

  const [pageNumber, setPageNumber] = useState(1)
  const [data, setData] = useState([])
  const { info, results } = data
  const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(api)
      const result = await res.json()
      if (res.ok) {
        setData(result)
      }
    }
    fetchData()
  }, [api])




  return (
    <>
      <div className="">
        <h1 className="ubuntu text-center my-4 fw-bold">Rick & Morty <span className="text-primary">Wiki</span></h1>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <Filters />
            </div>
            <div className="col-lg-8 col-12">
              <div className="row">
                <Cards results={results} />
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
