import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { EngineerList } from "./routes/EngineerList";
import { EngineerDetail } from "./routes/EngineerDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EngineerList />} />
        <Route path="/engineers/:id" element={<EngineerDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
