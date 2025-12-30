import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { artworkApi } from '../api/artworkApi';
import ArtworkCard from '../components/ArtworkCard';

const HomePage = () => {
    const [featuredArtworks, setFeaturedArtworks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFeaturedArtworks = async () => {
            try {
                const artworks = await artworkApi.getAll();
                // Get first 4 artworks as featured
                setFeaturedArtworks(artworks.slice(0, 4));
            } catch (err) {
                console.error('Error fetching artworks:', err);
                setError('Failed to load artworks');
            } finally {
                setLoading(false);
            }
        };

        fetchFeaturedArtworks();
    }, []);

    return (
        <div className="page-enter page-enter-active">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <span className="hero-badge">✨ Curated Collection</span>
                    <h1 className="hero-title">
                        Discover the Art
                        <span>That Moves You</span>
                    </h1>
                    <p className="hero-description">
                        Explore our carefully curated collection of stunning visual artworks
                        from talented artists worldwide. From contemporary masterpieces to
                        timeless classics.
                    </p>
                    <div className="hero-buttons">
                        <Link to="/gallery" className="btn btn-primary">
                            Explore Gallery
                        </Link>
                        <Link to="/register" className="btn btn-secondary">
                            Join Community
                        </Link>
                    </div>
                </div>
            </section>

            {/* Featured Artworks Section */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-badge">Featured</span>
                        <h2 className="section-title">Curator's Picks</h2>
                        <p className="section-description">
                            Handpicked artworks that represent the finest in contemporary and
                            classical art forms.
                        </p>
                    </div>

                    {loading ? (
                        <div className="loading">
                            <div className="loading-spinner"></div>
                        </div>
                    ) : error ? (
                        <div className="message message-error text-center">
                            {error}. Please make sure the backend server is running.
                        </div>
                    ) : featuredArtworks.length === 0 ? (
                        <p className="text-center" style={{ color: 'var(--color-text-secondary)' }}>
                            No artworks available yet.
                        </p>
                    ) : (
                        <>
                            <div className="gallery-grid">
                                {featuredArtworks.map((artwork) => (
                                    <ArtworkCard key={artwork.id} artwork={artwork} />
                                ))}
                            </div>

                            <div className="text-center mt-lg" style={{ marginTop: 'var(--space-3xl)' }}>
                                <Link to="/gallery" className="btn btn-primary">
                                    View All Artworks
                                </Link>
                            </div>
                        </>
                    )}
                </div>
            </section>

            {/* About Section */}
            <section className="section" style={{ background: 'var(--color-bg-secondary)' }}>
                <div className="container">
                    <div className="section-header">
                        <span className="section-badge">About</span>
                        <h2 className="section-title">Experience Art Like Never Before</h2>
                        <p className="section-description">
                            Our gallery brings together a diverse collection of visual art,
                            providing a platform for artists to showcase their work and for
                            collectors to discover new favorites.
                        </p>
                    </div>

                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                            gap: 'var(--space-xl)',
                            marginTop: 'var(--space-2xl)'
                        }}
                    >
                        {[
                            {
                                icon: '🎨',
                                title: 'Curated Selection',
                                description: 'Every artwork is carefully selected by our expert curators.'
                            },
                            {
                                icon: '🖼️',
                                title: 'High Quality',
                                description: 'View artworks in stunning high resolution detail.'
                            },
                            {
                                icon: '🌍',
                                title: 'Global Artists',
                                description: 'Discover talented artists from around the world.'
                            }
                        ].map((feature, index) => (
                            <div
                                key={index}
                                className="card"
                                style={{ padding: 'var(--space-xl)', textAlign: 'center' }}
                            >
                                <div style={{ fontSize: '2.5rem', marginBottom: 'var(--space-md)' }}>
                                    {feature.icon}
                                </div>
                                <h4 style={{ marginBottom: 'var(--space-sm)' }}>{feature.title}</h4>
                                <p style={{ fontSize: '0.95rem' }}>{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
