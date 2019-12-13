import React, { createContext } from 'react';
import Layout from './Layout';
import { Provider, Context } from './Provider';
import Nav from './Nav';
import Settings from './Settings';
import Dashboard from './Dashboard/Dashboard';
import Content from './shared/Content';
import GlobalStyles from './shared/GlobalStyles';
import './App.css';

export const ThemeContext = createContext();

const App = () => {
  return (
    <Provider>
      <Context.Consumer>
        {
          ({ lightTheme }) => (
            <>
              <GlobalStyles lightTheme={ lightTheme }/>
              <Layout>
                <Nav/>
                <Content>
                  <Settings />
                  <Dashboard />
                </Content>
              </Layout>
            </>
          )
        }
      </Context.Consumer>
    </Provider>
  );
};

export default App;