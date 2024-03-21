// src/components/Container.tsx
import React, { ReactNode } from 'react';

/**
 * Props for the Container component.
 */
interface ContainerProps {
    children: ReactNode;
}

/**
 * Container Component
 * 
 * A layout component that provides consistent spacing and centering for its children.
 * It's used as a wrapper around sections of the application to ensure they adhere to
 * the same maximum width and padding settings, providing a uniform appearance.
 *
 * Props:
 * - children: The content to be wrapped by the container, which can be any valid ReactNode.
 */
const Container: React.FC<ContainerProps> = ({ children }) => {
    return (
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-9'>
            {children}  
        </div>
    );
};

export default Container;