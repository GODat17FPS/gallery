import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ArtworkCard = ({ artwork }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);

    const thumbnailUrl = artwork.thumbnailUrl || artwork.imageUrls?.[0];

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    const handleImageError = () => {
        setImageError(true);
    };

    return (
        <Link to={`/artwork/${artwork.id}`} className="card artwork-card">
            <div style={{ position: 'relative', overflow: 'hidden' }}>
                {!imageLoaded && !imageError && (
                    <div
                        style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'var(--color-bg-tertiary)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <div className="loading-spinner" style={{ width: 32, height: 32 }}></div>
                    </div>
                )}

                {imageError ? (
                    <div
                        style={{
                            width: '100%',
                            aspectRatio: '4/5',
                            background: 'var(--color-bg-tertiary)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'var(--color-text-tertiary)'
                        }}
                    >
                        Image unavailable
                    </div>
                ) : (
                    <img
                        src={thumbnailUrl}
                        alt={artwork.title}
                        className="artwork-card-image"
                        onLoad={handleImageLoad}
                        onError={handleImageError}
                        style={{ opacity: imageLoaded ? 1 : 0, transition: 'opacity 0.3s ease' }}
                        loading="lazy"
                    />
                )}

                <div className="artwork-card-overlay"></div>
                <div className="artwork-card-content">
                    <h3 className="artwork-card-title">{artwork.title}</h3>
                    <p className="artwork-card-artist">{artwork.artist}</p>
                </div>
            </div>
        </Link>
    );
};

export default ArtworkCard;
