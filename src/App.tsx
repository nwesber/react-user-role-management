import './App.css'

// src/App.tsx
import React from 'react';
import Container from './components/layout/Container';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import UserLists from './pages/users/UsersList';
import CreateUser from './pages/users/CreateUser';
import EditUser from './pages/users/EditUser';
import NotFoundPage from './pages/NotFoundPage';

/**
 * App Component
 * 
 * The main component of the application that sets up routing and global layout.
 * Utilizes react-router-dom for routing across different views within the application.
 */
const App: React.FC = () => {
    return (
        <Router>
            <Container>
                {/* Global toaster for showing notifications */}
                <Toaster position="top-right" />

                {/* Routes define the navigation structure of the application */}
                <Routes>
                    <Route path="/" element={<UserLists />} />
                    <Route path="/user/create" element={<CreateUser />} />
                    <Route path="/user/edit/:userId" element={<EditUser />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </Container>
        </Router>
    );
};

export default App;
