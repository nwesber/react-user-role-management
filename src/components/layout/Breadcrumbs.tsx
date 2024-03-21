import React from 'react';
import { Link } from 'react-router-dom';

interface BreadcrumbItem {
  path: string;
  label: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

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
