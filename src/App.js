import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginRegister from "./components/LoginRegister.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginRegister/>} />
        <Route path="/dashboard" element={<h1>Dashboard (Protected Page)</h1>} /> 
      </Routes>
    </Router>
  );
}

export default App;

