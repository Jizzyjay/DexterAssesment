import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Users from "./components/molecules/Users";
import Sidebar from "./components/molecules/Sidebar";
import Dashboard from "./components/molecules/Dashboard";

function App() {
  return (
    <div className="bg-gray-200 flex flow-row overflow-scroll">
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;