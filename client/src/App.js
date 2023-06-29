import React from 'react';
import { useSelector} from 'react-redux';

import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
  
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './views/Home';
import Register from './views/Register';
import Login from './views/Login';
import Navbar from './components/Navbar';

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <Router>
      <Navbar/>
      <Routes>
        {isAuthenticated ? (
          <Route path="/" element={<Home />} />
        ) : (
          <Route path="/" element={<Navigate to="/login" />} />
        )}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
