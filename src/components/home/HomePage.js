import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css'; // Import the CSS file

const HomePage = () => {
    const navigate = useNavigate(); // Hook for navigation

    const handleJoinNowClick = () => {
        navigate('/login'); // Navigate to the LoginPage when the button is clicked
    };

    return (
        <div className="home-container">
            {/* Navbar */}
            <nav className="navbar">
                <div className="navbar-container">
                    <ul>
                        <li><a href="/">Accueil</a></li>
                        <li><a href="/shop">Shop</a></li>
                        <li><a href="/categories">Catégories</a></li>
                        <li><a href="/brands">Brands</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
            </nav>
            
            {/* Header Section */}
            <header className="header">
                <h1>Welcome to <span>MUSCLE STOCK</span></h1>
            </header>

            {/* Main Content Section */}
            <section className="section">
             
          
                <button className="button" onClick={handleJoinNowClick}>Join Now</button>
            </section>

            {/* Footer Section */}
            <footer className="footer">
                <p>&copy; 2024 Muscle Sport. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default HomePage;
