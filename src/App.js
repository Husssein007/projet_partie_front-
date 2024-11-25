import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/home/HomePage';
import LoginPage from './components/login/LoginPage';
import UserPage from './components/user/UserPage';
import AdminPage from './components/admin/AdminPage';
import RegisterPage from './components/register/RegisterPage';
import PrivateRoute from './components/PrivateRoute';
import Categorie from './components/categories/Categories';
import Brands from './components/brands/Brands';
import Produit from './components/produits/Produit';
import ProductDisplay from './components/produits/ProductDisplay'
const App = () => {
    return (
        <Router>
            <Routes>
                {/* Public Routes */}
                <Route path="/" element={<HomePage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />

                {/* Protected Routes */}
                <Route 
                    path="/privateRoute" 
                    element={
                        <PrivateRoute>
                            <UserPage />
                        </PrivateRoute>
                    } 
                />

                {/* Admin Routes */}
                <Route 
                    path="/admin" 
                    element={
                        <PrivateRoute>
                            <AdminPage />
                        </PrivateRoute>
                    } 
                />
                <Route 
                    path="/categories" 
                    element={
                        <PrivateRoute>
                            <Categorie />
                        </PrivateRoute>
                    } 
                />
                <Route 
                    path="/brands" 
                    element={
                        <PrivateRoute>
                            <Brands />
                        </PrivateRoute>
                    } 
                />
                <Route path='/Produit' element={<Produit/>}/>
                <Route path='/ProductDisplay' element={<ProductDisplay/>}/>
            </Routes>
        </Router>
    );
};

export default App;
