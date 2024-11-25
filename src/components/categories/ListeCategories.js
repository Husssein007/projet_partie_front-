import React from 'react';

const ListeCategories = ({ categories, onUpdate, onRemove }) => {
    return (
        <div className="list-container">
            <h2>Category List</h2>
            {categories.length === 0 ? (
                <p className="empty-message">No categories available. Add some!</p>
            ) : (
                <ul className="category-list">
                    {categories.map((cat, index) => (
                        <li key={index} className="category-item">
                            <div className="category-info">
                                <strong>{cat.titre}</strong>
                                <p>{cat.description}</p>
                            </div>
                            <div className="action-buttons">
                                <button
                                    onClick={() => onUpdate(cat)}
                                    className="update-button"
                                >
                                    Update
                                </button>
                                <button
                                    onClick={() => onRemove(cat)}
                                    className="remove-button"
                                >
                                    Remove
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ListeCategories;
