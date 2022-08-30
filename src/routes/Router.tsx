import { BrowserRouter, Route, Routes } from "react-router-dom";
import InforAgents from "../components/InforAgents";
import InforWeapons from "../components/InforWeapons";
import Agents from "../pages/Agents";
import History from "../pages/History";
import HistoryDetail from "../pages/HistoryDetail";
import Home from "../pages/Home";
import Weapons from "../pages/Weapons";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/Weapons" element={<Weapons />} />
        <Route path="/InforAgents/:id" element={<InforAgents />} />
        <Route path="/InforWeapons/:id" element={<InforWeapons />} />
        <Route path="/History" element={<History />} />
        <Route path="/HistoryDetail" element={<HistoryDetail />} />
      </Routes>
    </BrowserRouter>
  );
};
