import React from 'react';
import Layout from './components/Layout';
import { Provider } from './components/Provider';
import Nav from './components/Nav';
import Settings from './components/Settings';
import Dashboard from './components/Dashboard/Dashboard';
import Content from './components/shared/Content';
import './App.css';

const App = () => {
  return (
    <Layout>
      <Provider>
        <Nav />
        <Content>
          <Settings />
          <Dashboard />
        </Content>
      </Provider>
    </Layout>
  );
};

export default App;
