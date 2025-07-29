import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Features from './pages/Features';
import About from './pages/About';
import Levels from './pages/Levels';
import Challenges from './pages/Challenges';
import Challenge from './pages/Challenge';
import Signup from './pages/Signup';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/about" element={<About />} />
          <Route path="/levels" element={<ProtectedRoute><Levels /></ProtectedRoute>} />
          <Route path="/challenges/:levelId" element={<ProtectedRoute><Challenges /></ProtectedRoute>} />
          <Route path="/challenge/:levelId" element={<Challenge />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

