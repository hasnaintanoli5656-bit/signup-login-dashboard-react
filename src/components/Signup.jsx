import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/signup.css';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      alert('Tammam fields fill karein!');
      return;
    }

    localStorage.setItem('user', JSON.stringify({ name, email, password }));
    alert('Account ban gaya! Ab login karein.');
    navigate('/login');
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <div className="logo-center">🍔 FoodieExpress</div>
        <h2 className="auth-title">Create Account</h2>
        <p className="auth-subtitle">Sign up to explore delicious food items</p>
        
        <form onSubmit={handleSignup}>
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <input 
              type="text" 
              placeholder="Enter Your Full Name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input 
              type="email" 
              placeholder="Enter Your Email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Password</label>
            <input 
              type="password" 
              placeholder="Enter Your Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              className="form-input"
            />
          </div>
          <button type="submit" className="primary-btn">Sign Up</button>
        </form>

        <p className="auth-footer">
          Already have an account? <Link to="/login" className="auth-link">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;