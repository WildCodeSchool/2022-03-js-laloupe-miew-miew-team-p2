/* eslint-disable import/order */
/* eslint-disable import/no-unresolved */
import "./pages/sass/app.scss";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import FightPage from "./pages/FightPage";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Layout from "./components/Layout";
import Loader from "@components/Loader";
import MeowWho from "@pages/Meow-who";

function App() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2200);
  }, []);

  return loader ? (
    <Loader />
  ) : (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="content" element={<Layout />}>
          <Route path="fightpage" element={<FightPage />} />
          <Route path="contact" element={<Contact />} />
          <Route path="meow" element={<MeowWho />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
