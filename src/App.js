import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailsPage from "./pages/DetailsPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/pokemon/:pokemon" element={<DetailsPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
