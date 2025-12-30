import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user, logout, isAuthenticated } = useAuth();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu on route change
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    const isActive = (path) => location.pathname === path;

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-content">
                <Link to="/" className="navbar-logo">
                    <span>Artistry</span> Gallery
                </Link>

                <button
                    className="navbar-toggle"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <ul className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
                    <li>
                        <Link
                            to="/"
                            className={`navbar-link ${isActive('/') ? 'active' : ''}`}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/gallery"
                            className={`navbar-link ${isActive('/gallery') ? 'active' : ''}`}
                        >
                            Gallery
                        </Link>
                    </li>

                    {/* Mobile auth links */}
                    <li className="mobile-only">
                        {isAuthenticated ? (
                            <button onClick={logout} className="navbar-link">
                                Logout
                            </button>
                        ) : (
                            <>
                                <Link to="/login" className="navbar-link">Login</Link>
                            </>
                        )}
                    </li>
                </ul>

                <div className="navbar-auth">
                    {isAuthenticated ? (
                        <div className="user-menu">
                            <span className="user-email">{user?.email}</span>
                            <div className="user-avatar">
                                {user?.email?.charAt(0).toUpperCase()}
                            </div>
                            <button onClick={logout} className="btn btn-ghost">
                                Logout
                            </button>
                        </div>
                    ) : (
                        <>
                            <Link to="/login" className="btn btn-ghost">
                                Login
                            </Link>
                            <Link to="/register" className="btn btn-primary">
                                Sign Up
                            </Link>
                        </>
                    )}
                </div>
            </div>

            <style>{`
        .mobile-only {
          display: none;
        }
        @media (max-width: 768px) {
          .mobile-only {
            display: block;
          }
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
