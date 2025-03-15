import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { EngineerList } from "./pages/EngineerList";
import { EngineerDetail } from "./pages/EngineerDetail";
import { MemberSubscribe } from "./pages/MemberSubscribe";

// ここでパスによるルーティングを設定
// Routeが呼ばれた際に、該当するroutes配下のファイルが呼ばれ、API通信する
function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/engineers" element={<EngineerList />} />
        <Route path="/engineers/:id" element={<EngineerDetail />} />
        <Route path="/member/subscribe" element={<MemberSubscribe />} />
      </Routes>
    </Router>
  );
}

export default App;
