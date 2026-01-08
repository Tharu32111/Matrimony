import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateProfilePage from "./pages/CreateProfilePage";
import MatchesPage from "./pages/MatchesPage";
import OTPPage from "./pages/OTPPage";
import MobileVerify from "./pages/MobileVerify";
import AadharVerify from "./pages/AadharVerify";
import ProfileList from "./components/matchmaking/ProfileList";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HelpPage from "./pages/HelpPage";
import ProfileDetails from "./pages/ProfileDetails";
import About from "./pages/About";
import Membership from "./pages/Membership";
import Contact from "./pages/Contact";
import Chatbot from "./components/Chatbot/chatbot";
import Header from "./components/common/Header";
import { AuthProvider } from "./context/AuthContext";
import './index.css';

function App() {
  return (
    <AuthProvider>
      <div className="app-container">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/chatbot" element={<Chatbot/>} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/help" element={<HelpPage />} />
            <Route path="/create-profile" element={<CreateProfilePage />} />
            <Route path="/profile-details" element={<ProfileDetails />} />
            <Route path="/otp" element={<OTPPage />} />
            <Route path="/matches" element={<MatchesPage />} />
             <Route path="/profiles" element={<ProfileList />} />
             <Route path="/mobile-verify" element={<MobileVerify />} />
             <Route path="/aadhar-verify" element={<AadharVerify />} />
          </Routes>
          <Chatbot />
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;

