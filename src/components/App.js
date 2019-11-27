import React from 'react';
import Layout from './Layout';
import { Provider } from './Provider';
import Nav from './Nav';
import Welcome from './Welcome';
import './App.css';

const App = () => {
  return (
    <Layout>
      <Provider>
        <Nav/>
        <Welcome />
      </Provider>
    </Layout>
  );
};

export default App;
