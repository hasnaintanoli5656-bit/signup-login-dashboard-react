import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

export default function App() {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", backgroundColor: '#FAF9F6', minHeight: '100vh' }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/signup" replace />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}



