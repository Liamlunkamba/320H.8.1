import "./App.css";
import { Route, Routes } from "react-router-dom";
import Currencies from ".//currencies";
import Main from ".//main";
import Price from "./price";
import Nav from "./components/nav";

export default function App () {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/currencies" element={<Currencies/>}/>
        <Route path="/price" element={<Price/>}/>
      </Routes>
    </div>
  );
}
