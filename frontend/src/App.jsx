import { Routes, Route } from 'react-router-dom';
import HomePage from "./pages/home/Home";
import LoginPage from "./pages/login/Login";
import SignUpPage from "./pages/signup/Signup";

function App() {
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signup" element={<SignUpPage/>} />
      </Routes>
    </div>
  )
}

export default App
