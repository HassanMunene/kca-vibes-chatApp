import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from "./pages/home/Home";
import LoginPage from "./pages/login/Login";
import SignUpPage from "./pages/signup/Signup";
import { Toaster } from 'react-hot-toast';
import { useAuthContext } from './context/AuthContext';

function App() {
  const {authUser} = useAuthContext();
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Toaster/>
      <Routes>
        <Route path="/" element={authUser? <HomePage/> : <Navigate to={"/login"} />} />
        <Route path="/login" element={authUser ? <Navigate to="/" /> : <LoginPage/>} />
        <Route path="/signup" element={authUser ? <Navigate to="/" /> : <SignUpPage/>} />
      </Routes>
    </div>
  )
}

export default App
