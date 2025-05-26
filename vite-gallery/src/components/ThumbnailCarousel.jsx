import React, { useRef } from "react";
import styles from "../styles/ThumbnailCarousel.module.css";
import Thumbnail from "./Thumbnail";

const ThumbnailCarousel = ({ images, selectedImage, onSelect }) => {
  const carouselRef = useRef(null);
  
  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -200, behavior: 'smooth' });
  };
  
  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 200, behavior: 'smooth' });
  };

  return (
    <div className={styles.carouselContainer}>
      <button 
        className={styles.scrollButton} 
        onClick={scrollLeft}
        aria-label="Scroll left"
      >
        &lt;
      </button>
      
      <div className={styles.carousel} ref={carouselRef}>
        {images.map((img) => (
          <Thumbnail
            key={img.id}
            image={img}
            isSelected={img.id === selectedImage.id}
            onClick={() => onSelect(img)}
          />
        ))}
      </div>
      
      <button 
        className={styles.scrollButton} 
        onClick={scrollRight}
        aria-label="Scroll right"
      >
        &gt;
      </button>
    </div>
  );
};

export default ThumbnailCarousel;