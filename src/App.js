import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavbarComponent } from './components/NavbarComponent';
import { Home } from "./pages/Home";
import { CointList } from "./pages/CointList";
import { DetailCoint } from "./pages/DetailCoint";

function App() {
  
  return (
    <>
      <NavbarComponent/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/coint-list" element={<CointList />} />
        <Route path="/:id" element={<DetailCoint />} />
      </Routes>
    </>
  );
}

export default App;
