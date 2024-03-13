import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Sidebar from "./components/Sidebar";
// import Dashboard from "./components/Dashboard";
// import Users from "./components/molecules/Users";
// import Dashboard from "./components/molecules/Dashboard";
import Sidebar from "./components/molecules/Sidebar";

function App() {
  return (
    <div className="bg-gray-200">
      <BrowserRouter>
        {/* <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route path="users" element={<Users />} />
          </Route>
        </Routes> */}
        <Sidebar />
      </BrowserRouter>
    </div>
  );
}

export default App;
