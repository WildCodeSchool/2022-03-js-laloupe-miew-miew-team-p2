import { Routes, Route } from "react-router-dom";
import MeowWho from "@pages/Meow-who";
import FightPage from "./pages/FightPage";
import Home from "./pages/Home";
// eslint-disable-next-line import/no-unresolved

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fightpage" element={<FightPage />} />
        <Route path="/meowWho" element={<MeowWho />} />
      </Routes>
    </div>
  );
}

export default App;
