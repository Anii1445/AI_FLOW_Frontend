import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import View from "./View";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/view" element={<View />} />
      </Routes>
    </Router>
  );
}

export default App;