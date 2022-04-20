import { Routes, Route } from "react-router-dom";
import FightPage from "./pages/FightPage";
import Home from "./pages/Home";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fightpage" element={<FightPage />} />
      </Routes>
    </div>
  );
}

export default App;
