import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container footer-content">
                <Link to="/" className="footer-logo">
                    <span>Artistry</span> Gallery
                </Link>
                <p className="footer-text">
                    © {currentYear} Artistry Gallery. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
