import React from 'react';

const ListeBrands = ({ Brands, onUpdate, onRemove }) => {
    return (
        <div className="list-container">
            <h2>Brands List</h2>
            {Brands.length === 0 ? (
                <p className="empty-message">No Brands available. Add some!</p>
            ) : (
                <ul className="Brands-list">
                    {Brands.map((cat, index) => (
                        <li key={index} className="Brands-item">
                            <div className="Brands-info">
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

export default ListeBrands;
