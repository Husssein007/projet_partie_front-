import React, { useState } from 'react';
import AddBrand from './AddBrands';
import ListeBrands from './ListeBrands';
import './Brands.css';

const Brands = () => {
    const [activePage, setActivePage] = useState('list'); // "list", "add", "update"

    return (
        <div className="container">
            <h1>Brands Management</h1>

            {/* Navigation Buttons */}
            <div className="navigation">
                <button
                    className={activePage === 'add' ? 'active' : ''}
                    onClick={() => setActivePage('add')}
                >
                    Add Brand
                </button>
                <button
                    className={activePage === 'update' ? 'active' : ''}
                    onClick={() => setActivePage('update')}
                >
                    Update Brand
                </button>
                <button
                    className={activePage === 'list' ? 'active' : ''}
                    onClick={() => setActivePage('list')}
                >
                    Brands List
                </button>
            </div>

            {/* Conditional Rendering */}
            <div className="content">
                {activePage === 'add' && (
                    <AddBrand
                        onAdd={(newBrand) => console.log('Brand added:', newBrand)}
                    />
                )}
                {activePage === 'update' && (
                    <p>Here you can update brands! (You can replace this placeholder with your UpdateBrand component)</p>
                )}
                {activePage === 'list' && (
                    <ListeBrands
                        brands={[]}
                        editingBrandId={null}
                        onEdit={(id) => console.log('Editing brand:', id)}
                        onDelete={(id) => console.log('Deleting brand:', id)}
                        onCancelEdit={() => console.log('Cancel Edit')}
                        onUpdate={(updatedBrand) =>
                            console.log('Updated Brand:', updatedBrand)
                        }
                    />
                )}
            </div>
        </div>
    );
};

export default Brands;
