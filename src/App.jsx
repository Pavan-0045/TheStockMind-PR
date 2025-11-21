import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Warehouse from "./pages/Warehouse";
import Sidebar from "./components/common/SideBar";
import Overview from "./pages/Overview";
import Stock from "./pages/Stock";
import Invoice from "./pages/Invoice";
import CategoryPage from "./pages/CategoryPage";

export default function App() {
  return (
    <Router>
      <div className="flex bg-gray-50 h-screen overflow-y-auto">
        <Sidebar />
        <div className="flex-1 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Warehouse />} />
            <Route path="/warehouse" element={<Warehouse />} />
            <Route path="/category" element={<CategoryPage />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/stock" element={<Stock />} />
            <Route path="/invoice" element={<Invoice />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

