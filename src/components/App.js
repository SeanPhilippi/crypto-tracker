import React from 'react';
import Layout from './Layout';
import { Provider } from './Provider';
import Nav from './Nav';
import Settings from './Settings';
import Dashboard from './Dashboard';
import './App.css';

const App = () => {
  return (
    <Layout>
      <Provider>
        <Nav/>
        <Settings />
        <Dashboard />
      </Provider>
    </Layout>
  );
};

export default App;
