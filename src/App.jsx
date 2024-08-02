import { useEffect, useState } from "react";
import Cards from "./components/Cards/Cards";
import Filters from "./components/Filters/Filters";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";


function App() {
  const [pageNumber, setPageNumber] = useState(1);
  const [search, setSearch] = useState("");
  const [status,setStatus] = useState("")
  const [gender,setGender] = useState("")
  const [species,setSpecies] = useState("") 
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
        <h1 className="ubuntu text-center my-4 fw-bold">Rick & Morty <span className="text-primary">Wiki</span></h1>
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

export default App;
