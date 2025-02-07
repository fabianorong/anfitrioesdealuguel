import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import HomePage from "./pages/HomePage";
import ListingDetails from "./pages/ListingDetails"
import Wishlist from "./pages/Wishlist";
import NotFound from "./pages/NotFound"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/acomodacoes/:id" element={<ListingDetails/>}/>
          <Route path="/acomodacoes" element={<HomePage/>} />
          <Route path="/favoritos" element={<Wishlist />} />
          <Route path="*" element={<NotFound />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
