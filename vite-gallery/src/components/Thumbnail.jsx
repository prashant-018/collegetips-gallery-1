import React from "react";
import styles from "../styles/Thumbnail.module.css";

const Thumbnail = ({ image, isSelected, onClick }) => {
  return (
    <div 
      className={`${styles.thumbnailContainer} ${isSelected ? styles.active : ""}`}
      onClick={onClick}
    >
      <img
        src={image.url}
        alt={`Thumbnail ${image.id}`}
        className={styles.thumbnail}
        loading="lazy"
      />
      {isSelected && <div className={styles.selectionIndicator} />}
    </div>
  );
};

export default Thumbnail;