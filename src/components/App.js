import React from 'react';
import AppLayout from './AppLayout';
import Nav from './Nav';
import Welcome from './Welcome';
import './App.css';

const App = () => {
  return (
    <AppLayout>
      <Nav/>
      <Welcome />
    </AppLayout>
  );
};

export default App;
