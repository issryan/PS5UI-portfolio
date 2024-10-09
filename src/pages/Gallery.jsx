import React, { useState, useEffect } from 'react';
import './Gallery.scss';

const totalImages = 48;

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedImage]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeImage();
      }
    };

    if (selectedImage) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImage]);

  const images = [];
  for (let i = 1; i <= totalImages; i++) {
    images.push(`/gallery/photo${i}.JPG`);
  }

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Media Gallery</h2>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div
            className="gallery-item"
            key={index}
            onClick={() => handleImageClick(image)}
            tabIndex={0} // Makes each image focusable
            aria-label={`Open image ${index + 1} in fullscreen`} // Accessibility improvement
            role="button" // Role for accessibility purposes
            onKeyPress={(e) => e.key === 'Enter' && handleImageClick(image)} // Allows image open with keyboard
          >
            <img
              src={image}
              alt={`Gallery image ${index + 1}`}
              className="gallery-image"
              loading="lazy" // Lazy load the images for performance
            />
          </div>
        ))}
      </div>

      {/* Fullscreen image view */}
      {selectedImage && (
        <div className="fullscreen-overlay" onClick={closeImage}>
          <img
            src={selectedImage}
            alt="Enlarged view"
            className="fullscreen-image"
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;