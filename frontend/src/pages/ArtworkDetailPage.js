import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { artworkApi } from '../api/artworkApi';
import ImageCarousel from '../components/ImageCarousel';

const ArtworkDetailPage = () => {
    const { id } = useParams();
    const [artwork, setArtwork] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchArtwork = async () => {
            try {
                const data = await artworkApi.getById(id);
                setArtwork(data);
            } catch (err) {
                console.error('Error fetching artwork:', err);
                if (err.response?.status === 404) {
                    setError('Artwork not found');
                } else {
                    setError('Failed to load artwork');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchArtwork();
    }, [id]);

    if (loading) {
        return (
            <div className="artwork-detail">
                <div className="container">
                    <div className="loading" style={{ minHeight: '60vh' }}>
                        <div className="loading-spinner"></div>
                    </div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="artwork-detail">
                <div className="container" style={{ paddingTop: 40 }}>
                    <Link to="/gallery" className="back-link">
                        ← Back to Gallery
                    </Link>
                    <div
                        className="message message-error"
                        style={{ marginTop: 'var(--space-xl)' }}
                    >
                        {error}
                    </div>
                </div>
            </div>
        );
    }

    if (!artwork) {
        return null;
    }

    return (
        <div className="artwork-detail page-enter page-enter-active">
            <div className="container" style={{ paddingTop: 40 }}>
                <Link to="/gallery" className="back-link">
                    ← Back to Gallery
                </Link>

                <div className="artwork-detail-grid">
                    {/* Image Carousel */}
                    <div>
                        <ImageCarousel
                            images={artwork.imageUrls}
                            title={artwork.title}
                        />
                    </div>

                    {/* Artwork Info */}
                    <div className="artwork-info">
                        <h1 className="artwork-info-title">{artwork.title}</h1>
                        <p className="artwork-info-artist">by {artwork.artist}</p>

                        <div className="artwork-info-divider"></div>

                        <h4 style={{ marginBottom: 'var(--space-md)', color: 'var(--color-text-tertiary)' }}>
                            About this piece
                        </h4>
                        <p className="artwork-info-description">
                            {artwork.description}
                        </p>

                        <div className="artwork-info-divider"></div>

                        {/* Artwork metadata */}
                        <div style={{ display: 'grid', gap: 'var(--space-md)' }}>
                            <div>
                                <span style={{
                                    color: 'var(--color-text-tertiary)',
                                    fontSize: '0.85rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em'
                                }}>
                                    Artist
                                </span>
                                <p style={{
                                    color: 'var(--color-text-primary)',
                                    marginTop: 'var(--space-xs)'
                                }}>
                                    {artwork.artist}
                                </p>
                            </div>
                            <div>
                                <span style={{
                                    color: 'var(--color-text-tertiary)',
                                    fontSize: '0.85rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em'
                                }}>
                                    Images
                                </span>
                                <p style={{
                                    color: 'var(--color-text-primary)',
                                    marginTop: 'var(--space-xs)'
                                }}>
                                    {artwork.imageUrls?.length || 0} image{artwork.imageUrls?.length !== 1 ? 's' : ''}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArtworkDetailPage;
