import React from 'react';
import ListProduits from './ListProduits';
// import './produit.css'
import fakeProducts from './fakeproduit';

const Produit = () => {
  console.log(fakeProducts);
  return (
    <div
      style={{
        display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
            marginTop: "707px",
            marginLeft: "200px",
        // Occuper toute la hauteur de l'écran
      }}
    >
      {fakeProducts.map((el, index) => (
        <ListProduits key={index} el={el} />
      ))}
    </div>
  );
};

export default Produit;
