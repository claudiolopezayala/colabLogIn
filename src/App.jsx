import { Routes, Route } from "react-router-dom";
import LoginPage from "./screens/LoginPage";
import LandingPage from "./screens/LandingPage";
import './styles/App.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/landing" element={<LandingPage />} />
    </Routes>
  );
};

export default App;
