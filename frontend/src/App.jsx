import { Routes, Route } from 'react-router-dom';
import HomePage from "./pages/home/Home";

function App() {
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route path="/" element={<HomePage/>} />
      </Routes>
    </div>
  )
}

export default App
