import React, { useState } from 'react';

const AddCategorie = ({ onAdd }) => {
    const [newCategory, setNewCategory] = useState({ titre: '', description: '' });

    const handleAddCategory = () => {
        if (!newCategory.titre.trim() || !newCategory.description.trim()) return;

        onAdd(newCategory);
        setNewCategory({ titre: '', description: '' });
    };

    return (
        <div className="form-container">
            <h2>Add a New Category</h2>
            <input
                type="text"
                placeholder="Category Title"
                value={newCategory.titre}
                onChange={(e) =>
                    setNewCategory({ ...newCategory, titre: e.target.value })
                }
                className="input-field"
            />
            <textarea
                placeholder="Category Description"
                value={newCategory.description}
                onChange={(e) =>
                    setNewCategory({ ...newCategory, description: e.target.value })
                }
                className="textarea-field"
            ></textarea>
            <button onClick={handleAddCategory} className="add-button">
                Add Category
            </button>
        </div>
    );
};

export default AddCategorie;
