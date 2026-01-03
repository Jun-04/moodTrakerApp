import Home from "./pages/Home";
import Condition from "./pages/Condition";
import Insight from "./pages/Insight";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App () {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/condition" element={<Condition />} />
      <Route path="/insight" element={<Insight />} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;