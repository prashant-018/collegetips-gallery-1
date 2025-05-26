import React from "react";
import styles from "../styles/MainImage.module.css";

const MainImage = ({ image, isZoomed, onZoomToggle }) => {
  return (
    <div 
      className={`${styles.mainImage} ${isZoomed ? styles.zoomed : ""}`}
      onClick={onZoomToggle}
    >
      <img 
        src={image.url} 
        alt={`Main ${image.id}`} 
        className={styles.image}
        loading="eager"
      />
      
      {!isZoomed && (
        <div className={styles.zoomHint}>
          Click to zoom • Double click to toggle fullscreen
        </div>
      )}
      
      {isZoomed && (
        <div className={styles.imageInfo}>
          <h3>{image.title || `Image ${image.id}`}</h3>
          {image.description && <p>{image.description}</p>}
        </div>
      )}
    </div>
  );
};

export default MainImage;