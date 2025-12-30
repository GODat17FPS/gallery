import React, { useState, useEffect } from 'react';
import { artworkApi } from '../api/artworkApi';
import ArtworkCard from '../components/ArtworkCard';

const GalleryPage = () => {
    const [artworks, setArtworks] = useState([]);
    const [filteredArtworks, setFilteredArtworks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchArtworks = async () => {
            try {
                const data = await artworkApi.getAll();
                setArtworks(data);
                setFilteredArtworks(data);
            } catch (err) {
                console.error('Error fetching artworks:', err);
                setError('Failed to load artworks');
            } finally {
                setLoading(false);
            }
        };

        fetchArtworks();
    }, []);

    useEffect(() => {
        if (!searchQuery.trim()) {
            setFilteredArtworks(artworks);
            return;
        }

        const query = searchQuery.toLowerCase();
        const filtered = artworks.filter(
            (artwork) =>
                artwork.title.toLowerCase().includes(query) ||
                artwork.artist.toLowerCase().includes(query)
        );
        setFilteredArtworks(filtered);
    }, [searchQuery, artworks]);

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    return (
        <div className="page-enter page-enter-active" style={{ paddingTop: 120 }}>
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-badge">Collection</span>
                        <h2 className="section-title">Art Gallery</h2>
                        <p className="section-description">
                            Browse our complete collection of stunning visual artworks
                        </p>
                    </div>

                    {/* Search Bar */}
                    <div className="search-bar">
                        <svg
                            className="search-icon"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <circle cx="11" cy="11" r="8" />
                            <path d="M21 21l-4.35-4.35" />
                        </svg>
                        <input
                            type="text"
                            className="search-input"
                            placeholder="Search by title or artist..."
                            value={searchQuery}
                            onChange={handleSearch}
                        />
                    </div>

                    {loading ? (
                        <div className="loading">
                            <div className="loading-spinner"></div>
                        </div>
                    ) : error ? (
                        <div className="message message-error text-center">
                            {error}. Please make sure the backend server is running on port 8080.
                        </div>
                    ) : filteredArtworks.length === 0 ? (
                        <div className="text-center" style={{ padding: 'var(--space-3xl) 0' }}>
                            {searchQuery ? (
                                <div>
                                    <p style={{
                                        color: 'var(--color-text-secondary)',
                                        marginBottom: 'var(--space-md)'
                                    }}>
                                        No artworks found matching "{searchQuery}"
                                    </p>
                                    <button
                                        onClick={() => setSearchQuery('')}
                                        className="btn btn-secondary"
                                    >
                                        Clear Search
                                    </button>
                                </div>
                            ) : (
                                <p style={{ color: 'var(--color-text-secondary)' }}>
                                    No artworks available yet.
                                </p>
                            )}
                        </div>
                    ) : (
                        <>
                            {searchQuery && (
                                <p
                                    className="text-center"
                                    style={{
                                        color: 'var(--color-text-secondary)',
                                        marginBottom: 'var(--space-xl)'
                                    }}
                                >
                                    Found {filteredArtworks.length} artwork{filteredArtworks.length !== 1 ? 's' : ''}
                                </p>
                            )}
                            <div className="gallery-grid">
                                {filteredArtworks.map((artwork) => (
                                    <ArtworkCard key={artwork.id} artwork={artwork} />
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </section>
        </div>
    );
};

export default GalleryPage;
