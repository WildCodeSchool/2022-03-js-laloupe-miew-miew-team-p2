import "@pages/sass/app.scss";
import Header from "@pages/Header";
import { Routes, Route } from "react-router-dom";
import FightPage from "./pages/FightPage";
import Home from "./pages/Home";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fightpage" element={<FightPage />} />
        <Route path="/contact" element={<Header />} />
        <Route path="/meow" element={<Header />} />
      </Routes>
    </div>
  );
}

export default App;
