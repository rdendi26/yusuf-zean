import { Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./pages/Home";
import Undangan from "./pages/Undangan"

function App() {


  return (
    <Routes>
        <Route path="/" element={<Home/>} />
         <Route path="/undangan" element={<Undangan/>} />
    </Routes>
  )
}

export default App
