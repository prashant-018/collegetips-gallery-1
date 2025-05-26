import React, { useState, useRef, useEffect } from "react";
import styles from "../styles/Gallery.module.css";
import images from "../data/images";
import MainImage from "./MainImage";
import ThumbnailCarousel from "./ThumbnailCarousel";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [isZoomed, setIsZoomed] = useState(false);
  const galleryRef = useRef(null);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isZoomed) return;
      
      if (e.key === "Escape") {
        setIsZoomed(false);
      } else if (e.key === "ArrowRight") {
        const currentIndex = images.findIndex(img => img.id === selectedImage.id);
        const nextIndex = (currentIndex + 1) % images.length;
        setSelectedImage(images[nextIndex]);
      } else if (e.key === "ArrowLeft") {
        const currentIndex = images.findIndex(img => img.id === selectedImage.id);
        const prevIndex = (currentIndex - 1 + images.length) % images.length;
        setSelectedImage(images[prevIndex]);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isZoomed, selectedImage.id]);

  return (
    <div className={styles.gallery} ref={galleryRef}>
      <MainImage 
        image={selectedImage} 
        isZoomed={isZoomed} 
        onZoomToggle={() => setIsZoomed(!isZoomed)}
      />
      <ThumbnailCarousel
        images={images}
        selectedImage={selectedImage}
        onSelect={(img) => {
          setSelectedImage(img);
          galleryRef.current?.scrollIntoView({ behavior: "smooth" });
        }}
      />
    </div>
  );
};

export default Gallery;