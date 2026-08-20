import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/dashboard.css';

function Dashboard() {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const savedUser = JSON.parse(localStorage.getItem('user'));
  const userName = savedUser ? savedUser.name : 'Foodie';

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
      .then((res) => res.json())
      .then((data) => {
        setMeals(data.meals.slice(0, 8));
        setLoading(false);
      })
      .catch((err) => {
        console.error('API Error:', err);
        setLoading(false);
      });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo"> FoodieExpress</div>
        <div className="nav-right">
          <span className="user-info">Welcome, {userName}! 👋</span>
          <button onClick={handleLogout} className="logout-btn">Logout</button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <div className="hero-section">
        <h1 className="hero-title">Delicious Food Delivered To You</h1>
        <p className="hero-subtitle">Choose your favorite meal from our fresh menu options</p>
      </div>

      {/* FOOD CARDS GRID */}
      {loading ? (
        <div className="loading-text">
          Loading Meals... 🍲
        </div>
      ) : (
        <div className="grid-container">
          {meals.map((meal, index) => (
            <div key={meal.idMeal} className="food-card">
              <img src={meal.strMealThumb} alt={meal.strMeal} className="food-image" />
              <div className="card-content">
                <div className="card-header">
                  <h3 className="food-title">{meal.strMeal}</h3>
                  <span className="badge">★ 4.8</span>
                </div>
                <p className="food-category">Category: Seafood Special</p>
                <div className="card-footer">
                  <span className="price">${(index * 2 + 12).toFixed(2)}</span>
                  <button className="order-btn">Order Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* FOOTER */}
      <footer className="footer">
        <p style={{ margin: 0 }}>© 2026 FoodieExpress. Built with React & Simple Routing.</p>
      </footer>
    </div>
  );
}

export default Dashboard;