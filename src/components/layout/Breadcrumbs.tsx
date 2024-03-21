import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Represents a single breadcrumb item.
 */
interface BreadcrumbItem {
    path: string;
    label: string;
}

/**
 * Props for the Breadcrumbs component.
 */
interface BreadcrumbsProps {
    items: BreadcrumbItem[];
}

/**
 * Breadcrumbs Component
 * 
 * Renders a breadcrumb navigation list based on the provided items.
 * This component is used to enhance user navigation experience by providing a path back to the home page
 * or to any parent page.
 *
 * Props:
 * - items: An array of objects representing each breadcrumb. Each item contains a 'path' for the link
 *          and a 'label' for the breadcrumb's display text.
 */
const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
    return (
        <nav className="text-gray-500 text-sm" aria-label="Breadcrumb">
            <ol className="list-none p-0 inline-flex">
                {items.map((item, index) => (
                    <li key={index} className="flex items-center">
                        {index !== items.length - 1 ? (
                            <>
                                <Link to={item.path} className="text-blue-600 hover:text-blue-700">{item.label}</Link>
                                <span className="mx-2">/</span>
                            </>
                        ) : (
                            <span className="text-gray-500" aria-current="page">{item.label}</span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumbs;
