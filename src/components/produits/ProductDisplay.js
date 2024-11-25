import React from 'react';
import styles from './ProductDisplay.module.css'; // Importing CSS module

const ProductDisplay = () => {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundElement} id="background-element"></div>
      {/* Version Desktop */}
      <div className={styles.highlightWindow} id="product-img">
        <div className={styles.highlightOverlay} id="highlight-overlay"></div>
      </div>
      <div className={styles.window}>
        <div className={styles.mainContent}>
          <h2>Tiger of Sweden</h2>
          <h1>LEONARD COAT</h1>
          <h3>MINIMALISTIC COAT IN COTTON-BLEND</h3>
          <div className={styles.description} id="description">
            Men's minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single
            back vent. Slim fit with clean, straight shape. Above-knee length.
          </div>
          {/* Version Mobile */}
          <div className={`${styles.highlightWindowMobile}`} id="product-img-mobile">
            <div className={styles.highlightOverlay} id="highlight-overlay-mobile"></div>
          </div>
          <div className={styles.options}>
            <div className={styles.colorOptions}>
              Color:
              <div className={styles.colorPicker}>
                <div className={`${styles.color} ${styles.overlay}`} id="color-overlay">
                  <div className={styles.check}></div>
                </div>
                <div className={`${styles.color} ${styles.colorA}`} id="color-a"></div>
                <div className={`${styles.color} ${styles.colorB}`} id="color-b"></div>
              </div>
              <span className={styles.small} style={{ color: '#457' }}>
                COLOR: <span id="color-name">BLUES / 2V5</span>
              </span>
            </div>
            <div className={styles.sizePicker}>
              Size:
              <div className={styles.rangePicker} id="range-picker">
                <div>44</div>
                <div>46</div>
                <div>48</div>
                <div className={styles.active}>50</div>
                <div>52</div>
                <div>54</div>
              </div>
              <a className={`${styles.small} ${styles.alignRight}`} href="#">
                VIEW SIZE-CHART
              </a>
            </div>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.purchaseInfo}>
            <div className={styles.price}>£399.00</div>
            <button>ADD TO CART</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay