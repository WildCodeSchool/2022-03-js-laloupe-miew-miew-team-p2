/* eslint-disable import/no-unresolved */
import "@pages/sass/app.scss";
import { Routes, Route } from "react-router-dom";
import FightPage from "./pages/FightPage";
import Home from "./pages/Home";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="content" element={<Layout />}>
          <Route path="fightpage" element={<FightPage />} />
          <Route path="contact" element={<h1>Contact page</h1>} />
          <Route path="meow" element={<h1>Meow Who ?</h1>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
