import React, { useState, useEffect } from 'react';
import './AdminPage.css'

const AdminDashboard = () => {
    const [categories, setCategories] = useState([]);
    const [brands, setBrands] = useState([]);
    const [products, setProducts] = useState([]);

    // Fetch categories, brands, and products
    useEffect(() => {
        fetch('/api/admin/categories')
            .then((res) => res.json())
            .then((data) => setCategories(data));

        fetch('/api/admin/brands')
            .then((res) => res.json())
            .then((data) => setBrands(data));

        fetch('/api/admin/products')
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    return (
        <div className="dashboard">
            {/* Navbar */}
            <nav className="navbar">
                <h1>Admin Dashboard</h1>
                <div className="nav-links">
                    <a href="/home">Home</a>
                    <a href="/settings">Settings</a>
                    <a href="/logout">Logout</a>
                </div>
            </nav>

            {/* Sidebar */}
            <aside className="sidebar">
                <ul className="menu">
                    <li><a href="/users">Users</a></li>
                    <li><a href="/categories">Categories</a></li>
                    <li><a href="/Brands">Brands</a></li>
                    <li><a href="/orders">Orders</a></li>
                </ul>
            </aside>

            {/* Main Content */}
            <div className="main-content">
                {/* Categories List */}
                <div className="data-section">
                    <h2>Categories</h2>
                    <ul className="data-list">
                        {categories.length > 0 ? (
                            categories.map((cat) => (
                                <li key={cat._id}>{cat.name}</li>
                            ))
                        ) : (
                            <p>No categories available.</p>
                        )}
                    </ul>
                </div>

                {/* Brands List */}
                <div className="data-section">
                    <h2>Brands</h2>
                    <ul className="data-list">
                        {brands.length > 0 ? (
                            brands.map((brand) => (
                                <li key={brand._id}>
                                    {brand.name} - <small>{brand.brandName}</small>
                                </li>
                            ))
                        ) : (
                            <p>No brands available.</p>
                        )}
                    </ul>
                </div>

                {/* Products List */}
                <div className="data-section">
                    <h2>Products</h2>
                    <ul className="data-list">
                        {products.length > 0 ? (
                            products.map((product) => (
                                <li key={product._id}>
                                    {product.name} - ${product.price} - <small>{product.brandName}</small>
                                </li>
                            ))
                        ) : (
                            <p>No products available.</p>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
