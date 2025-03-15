import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { EngineerList } from "./routes/EngineerList";
import { EngineerDetail } from "./routes/EngineerDetail";
import { MemberSubscribe } from "./routes/memberSubscribe/MemberSubscribe";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EngineerList />} />
        <Route path="/engineers/:id" element={<EngineerDetail />} />
        <Route path="/member/subscribe" element={<MemberSubscribe />} />
      </Routes>
    </Router>
  );
}

export default App;
