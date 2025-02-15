import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Pokemons from "./pages/Pokemons";
import Contact from "./pages/Contact";
import About from "./pages/About";
// import Footer from "./Footer";
// import Food from "./Food";

function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <div>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/pokemons" element={<Pokemons></Pokemons>}></Route>
            <Route path="/contact" element={<Contact></Contact>}></Route>
            <Route path="/about" element={<About></About>}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
