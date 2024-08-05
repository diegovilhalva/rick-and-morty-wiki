import { useEffect, useState } from "react";
import Search  from "../components/Search/Search"
import Filters from "../components/Filters/Filters"
import Cards from "../components/Cards/Cards"
import Pagination from "../components/Pagination/Pagination"

const Home = () => {
    const [pageNumber, setPageNumber] = useState(1);
    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("")
    const [gender, setGender] = useState("")
    const [species, setSpecies] = useState("")
    const [data, setData] = useState([]);
    const { info, results } = data
    const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;
  
    useEffect(() => {
      const fetchData = async () => {
        const res = await fetch(api);
        const result = await res.json();
        if (res.ok) {
          setData(result);
  
        }
      };
      fetchData();
    }, [api]);
  
    return (
      <>
        <div>
  
          <h1 className="text-center fs-2 mb-4">Meet the Characters of Rick and Morty</h1>
          <Search setSearch={setSearch} setPageNumber={setPageNumber} />
          <div className="container">
            <div className="row">
  
              <Filters setStatus={setStatus} setSpecies={setSpecies} setGender={setGender} setPageNumber={setPageNumber} />
  
              <div className="col-lg-8 col-12">
                <div className="row">
                  <Cards results={results} />
                </div>
              </div>
            </div>
          </div>
          {info && <Pagination setPageNumber={setPageNumber} pageNumber={pageNumber} info={info} />}
        </div>
      </>
    );
  }

export default Home