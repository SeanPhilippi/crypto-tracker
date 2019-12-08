import React from 'react';
import Layout from './Layout';
import { Provider } from './Provider';
import Nav from './Nav';
import Settings from './Settings';
import Dashboard from './Dashboard/Dashboard';
import Content from './shared/Content';
import './App.css';

const App = () => {
  return (
    <Layout>
      <Provider>
        <Nav/>
        <Content>
          <Settings />
          <Dashboard />
        </Content>
      </Provider>
    </Layout>
  );
};

export default App;