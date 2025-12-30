import React, { useState } from 'react';

const ImageCarousel = ({ images, title }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [imageLoaded, setImageLoaded] = useState(false);

    if (!images || images.length === 0) {
        return (
            <div
                className="carousel"
                style={{
                    height: 400,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'var(--color-bg-secondary)'
                }}
            >
                <p style={{ color: 'var(--color-text-tertiary)' }}>No images available</p>
            </div>
        );
    }

    const goToPrevious = () => {
        setImageLoaded(false);
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const goToNext = () => {
        setImageLoaded(false);
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const goToSlide = (index) => {
        if (index !== currentIndex) {
            setImageLoaded(false);
            setCurrentIndex(index);
        }
    };

    return (
        <div className="carousel">
            <div
                className="carousel-track"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((imageUrl, index) => (
                    <div key={index} className="carousel-slide">
                        {!imageLoaded && index === currentIndex && (
                            <div
                                style={{
                                    position: 'absolute',
                                    inset: 0,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    background: 'var(--color-bg-secondary)'
                                }}
                            >
                                <div className="loading-spinner"></div>
                            </div>
                        )}
                        <img
                            src={imageUrl}
                            alt={`${title} - Image ${index + 1}`}
                            onLoad={() => index === currentIndex && setImageLoaded(true)}
                            style={{
                                opacity: index === currentIndex && imageLoaded ? 1 : 0.3,
                                transition: 'opacity 0.3s ease'
                            }}
                        />
                    </div>
                ))}
            </div>

            {images.length > 1 && (
                <>
                    <button
                        className="carousel-nav prev"
                        onClick={goToPrevious}
                        aria-label="Previous image"
                    >
                        &#8249;
                    </button>
                    <button
                        className="carousel-nav next"
                        onClick={goToNext}
                        aria-label="Next image"
                    >
                        &#8250;
                    </button>

                    <div className="carousel-dots">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                                onClick={() => goToSlide(index)}
                                aria-label={`Go to image ${index + 1}`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default ImageCarousel;
