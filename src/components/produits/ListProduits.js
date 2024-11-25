import React from 'react';
import styles from './ProductCard.module.css'; 
// Import des styles isolés
import {Link} from 'react-router-dom'
const ListProduits = ({el}) => {
  console.log(el,"el")
  return (
    <Link to='/ProductDisplay'   >
    <div className={styles.productCard}>
      <div className={styles.title}>{el.name}</div>
      <div className={styles.desc}>{el.stockQuantity}</div>
        <figure>
          <img src={el.imageUrl} alt="Nike Metcon 4" />
        </figure>
      <div className={styles.cta}>
        <div className={styles.price}>${el.price}</div>
        <button className={styles.btn}>
          Add to cart
          <span className={styles.bg}></span>
        </button>
      </div>
    </div>
    </Link>
  );
};

export default ListProduits;
