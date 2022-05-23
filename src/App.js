import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PokemonDetails } from "./Containers/PokemonDetails";
import HomePage from "./Containers/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/pokemon/:pokemon" element={<PokemonDetails />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
