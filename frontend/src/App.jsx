import { Routes, Route } from "react-router-dom";
import FightPage from "./pages/FightPage";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fightpage" element={<FightPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
