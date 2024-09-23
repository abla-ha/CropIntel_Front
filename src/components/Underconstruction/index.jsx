import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Underconstruction = () => {
    return (
        <div className="construction-container">
            <h1>Oops! This Page is Still Under Construction!</h1>
            <p>🔨 We are working hard to bring you this feature.</p>
            <p>Thank you for your patience!</p>
            <Link to="/">Go back to the homepage</Link>
            <div className="construction-image">
                <img src="/path/to/construction-image.png" alt="Under Construction" />
            </div>
        </div>
    );
};

export default Underconstruction;
