import './App.css'

// src/App.tsx
import React from 'react';
import Container from './components/layout/Container';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import UserLists from './pages/users/UsersList';
import CreateUser from './pages/users/CreateUser';

const App: React.FC = () => {
    return (
        <Router>
            <Container>
                <Toaster position="top-right" />
                <Routes>
                    <Route path="/" element={<UserLists />} />
                    <Route path="/user/create" element={<CreateUser />} />
                </Routes>
            </Container>
        </Router>
    );
};

export default App;
