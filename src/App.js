// Importing browser router, install it first --- npm i -D react-router-dom@latest
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importing components
import Template from "./components/Template";
import Nav from "./components/navbar/Nav";
import Footer from "./components/footer/Footer";
import Map from "./components/pages/map/Map";
import States from "./components/pages/states/States";
import Effect from "./components/pages/useEffect/Effect";
import Hooks from "./components/pages/hooks/Hooks";
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
            <Route path="/Raymark Tomas" element={<Raymark />} />
            <Route path="/Elijah Rafael Gaylan" element={<Elijah />} />
            <Route path="/Bryce Angeles" element={<Bryce />} />
            <Route path="/Steven Villacruz" element={<Steven />} />
            <Route path="/Carlos Sobrevilla" element={<Carlos />} />
            <Route path="/Peter Aguilar" element={<Peter />} />
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
