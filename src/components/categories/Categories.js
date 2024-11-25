import React, { useState } from 'react';
import AddCategorie from './AddCategorie';
import ListeCategories from './ListeCategories';
import UpdateCategorie from './UpdateCategorie'; // Assuming you have this component
import './Categories.css';

const CategoriesPage = () => {
    const [activePage, setActivePage] = useState('list'); // "list", "add", "update"
    const [categories, setCategories] = useState([]); // Categories state
    const [editingCategoryId, setEditingCategoryId] = useState(null); // For managing edit state

    const handleAddCategory = (newCategory) => {
        setCategories((prevCategories) => [...prevCategories, newCategory]);
        console.log('Category added:', newCategory);
    };

    const handleEditCategory = (categoryId) => {
        setEditingCategoryId(categoryId);
        setActivePage('update'); // Switch to update page
        console.log('Editing category:', categoryId);
    };

    const handleUpdateCategory = (updatedCategory) => {
        setCategories((prevCategories) =>
            prevCategories.map((category) =>
                category.id === updatedCategory.id ? updatedCategory : category
            )
        );
        setActivePage('list'); // Return to list view after updating
        console.log('Updated Category:', updatedCategory);
    };

    const handleDeleteCategory = (categoryId) => {
        setCategories((prevCategories) =>
            prevCategories.filter((category) => category.id !== categoryId)
        );
        console.log('Deleted category:', categoryId);
    };

    return (
        <div className="container">
            <h1>Categories Management</h1>

            {/* Navigation Buttons */}
            <div className="navigation">
                <button
                    className={activePage === 'add' ? 'active' : ''}
                    onClick={() => setActivePage('add')}
                >
                    Add Categories
                </button>
                <button
                    className={activePage === 'update' ? 'active' : ''}
                    onClick={() => setActivePage('update')}
                >
                    Update Categories
                </button>
                <button
                    className={activePage === 'list' ? 'active' : ''}
                    onClick={() => setActivePage('list')}
                >
                    Categories List
                </button>
            </div>

            {/* Conditional Rendering */}
            <div className="content">
                {activePage === 'add' && (
                    <AddCategorie
                        onAdd={handleAddCategory}
                    />
                )}
                {activePage === 'update' && editingCategoryId && (
                    <UpdateCategorie
                        categoryId={editingCategoryId}
                        categories={categories}
                        onUpdate={handleUpdateCategory}
                    />
                )}
                {activePage === 'list' && (
                    <ListeCategories
                        categories={categories}
                        onEdit={handleEditCategory}
                        onDelete={handleDeleteCategory}
                    />
                )}
            </div>
        </div>
    );
};

export default CategoriesPage;
