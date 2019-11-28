import React from 'react';
import Layout from './Layout';
import { Provider } from './Provider';
import Nav from './Nav';
import Settings from './Settings';
import './App.css';

const App = () => {
  return (
    <Layout>
      <Provider>
        <Nav/>
        <Settings />
      </Provider>
    </Layout>
  );
};

export default App;
