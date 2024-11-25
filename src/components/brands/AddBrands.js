import React, { useState } from 'react';

const AddBrands = ({ onAdd }) => {
    const [newBrand, setNewBrand] = useState({ titre: '', description: '' });

    const handleAddBrand = () => {
        if (!newBrand.titre.trim() || !newBrand.description.trim()) return;

        onAdd(newBrand);
        setNewBrand({ titre: '', description: '' });
    };

    return (
        <div className="form-container">
            <h2>Add a New Brand</h2>
            <input
                type="text"
                placeholder="Brand Title"
                value={newBrand.titre}
                onChange={(e) =>
                    setNewBrand({ ...newBrand, titre: e.target.value })
                }
                className="input-field"
            />
            <textarea
                placeholder="Brand Description"
                value={newBrand.description}
                onChange={(e) =>
                    setNewBrand({ ...newBrand, description: e.target.value })
                }
                className="textarea-field"
            ></textarea>
            <button onClick={handleAddBrand} className="add-button">
                Add Brand
            </button>
        </div>
    );
};

export default AddBrands;
