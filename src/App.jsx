
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Episodes from "./pages/Episodes";
import Location from "./pages/Location";
import Home from "./pages/Home";
import CardDetails from "./components/Cards/CardDetails";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/:id" element={<CardDetails/>} />
        <Route path="/episodes" element={<Episodes/>} />
        <Route path="/location" element={<Location/>} />
      </Routes>
    </BrowserRouter>
  )
}





export default App;
