import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Directory from "./components/Directory";
import ProfilePage from "./components/ProfilePage";
import RegisterForm from "./components/RegisterForm";
import OrgPage from "./components/OrgPage";
import CecepPage from "./components/CecepPage";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/directory" element={<Directory />} />
        <Route path="/profile/:id" element={<ProfilePage />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/organisasi" element={<OrgPage />} />
        <Route path="/calon-ketua" element={<CecepPage />} />
      </Routes>
    </BrowserRouter>
  );
}
