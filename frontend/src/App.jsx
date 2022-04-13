import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// eslint-disable-next-line import/no-unresolved
import "@pages/sass/home.scss";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
