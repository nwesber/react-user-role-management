import './App.css'

// src/App.tsx
import React from 'react';
import Container from './components/layout/Container';
import UserLists from './pages/users/UsersList';

const App: React.FC = () => {
  return (
    <Container>
      <UserLists />
    </Container>
  );
};

export default App;
