// Pagination.tsx

import React from 'react';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    navigateToPage: (page: number) => void;
}

/**
 * Pagination Component
 * 
 * Renders a pagination UI with navigation buttons for moving between pages.
 *
 * Props:
 * - currentPage: The current page number.
 * - totalPages: The total number of pages.
 * - navigateToPage: A function to navigate to a specific page.
 */
const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, navigateToPage }) => {
    return (
        <div className='pagination flex justify-center items-center mt-4'>
            <button
                onClick={() => navigateToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className={`mr-2 px-3 py-1 rounded border ${currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white'}`}
            >
                &laquo; Previous
            </button>
            {Array.from({ length: totalPages }, (_, index) => index + 1).map(page => (
                <button
                    key={page}
                    onClick={() => navigateToPage(page)}
                    disabled={currentPage === page}
                    className={`mx-1 px-3 py-1 rounded border ${currentPage === page ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white'}`}
                >
                    {page}
                </button>
            ))}
            <button
                onClick={() => navigateToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`ml-2 px-3 py-1 rounded border ${currentPage === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white'}`}
            >
                Next &raquo;
            </button>
        </div>
    );
};

export default Pagination;
