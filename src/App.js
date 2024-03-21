// Importing browser router, install it first --- npm i -D react-router-dom@latest
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importing components
import Template from "./components/Template";
import Nav from "./components/navbar/Nav";
import Footer from "./components/footer/Footer";
import Raymark from "./components/pages/Raymark/Raymark";
import Carlos from "./components/pages/Carlos/Carlos";
import Steven from "./components/pages/Steven/Steven";
import Peter from "./components/pages/Peter/Peter";
import Elijah from "./components/pages/Elijah/Elijah";
import Bryce from "./components/pages/Bryce/Bryce";
import Error from "./components/pages/error/Error";

import './App.css';

function App() {
  return (
    <div className="App">

      <BrowserRouter>

        {/* Importing the Nav component before nested routes */}
        <Nav />

        {/* Using the Routes and Route components from react-router-dom */}
        <Routes>
          <Route path="/" element={<Template />}>
            <Route path="/Raymark" element={<Raymark />} />
            <Route path="/Elijah" element={<Elijah />} />
            <Route path="/Bryce" element={<Bryce />} />
            <Route path="/Steven" element={<Steven/>} />
            <Route path="/Carlos" element={<Carlos />} />
            <Route path="/Peter" element={<Peter />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>

        {/* Importing the Footer component after nested routes */}
        <Footer />

      </BrowserRouter>
      
    </div>
  );
}

export default App;
