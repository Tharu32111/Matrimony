
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import CreateProfilePage from "../pages/CreateProfilePage";
import MatchesPage from "../pages/MatchesPage";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-profile" element={<CreateProfilePage />} />
        <Route path="/matches" element={<MatchesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

