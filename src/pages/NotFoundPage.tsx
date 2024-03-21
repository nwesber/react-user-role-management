// src/pages/NotFoundPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';

/**
 * NotFoundPage Component
 * 
 * Displays a 404 Not Found message to users who navigate to an undefined route.
 * Includes a link to redirect users back to the home page for a better user experience.
 */
const NotFoundPage: React.FC = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="text-center">
                <h1 className="text-6xl font-bold">404</h1>
                <p className="text-xl">Oops! We can't seem to find the page you're looking for.</p>
                <p className='text-xl'>¯\_(ツ)_/¯</p>
                <Link to="/" className="text-blue-600 hover:underline mt-4 inline-block">
                    Go back home
                </Link>
            </div>
        </div>
    );
};

export default NotFoundPage;
