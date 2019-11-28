import React, { createContext, Component } from 'react';

import cc from 'cryptocompare';

export const Context = createContext();

export class Provider extends Component {

  componentDidMount = () => {
    this.fetchCoins();
  };

  fetchCoins = async () => {
    const coinList = (await cc.coinList()).Data;
    console.log(coinList)
    this.setState({ coinList });
  };

  setPage = page => this.setState({ page });

  savedSettings = () => {
    console.log('savedsettings')
    let cryptoTracker = JSON.parse(localStorage.getItem('cryptoTracker'));
    if (!cryptoTracker) {
      // if no localStorage data, set firstVisit to true, and page to 'settings'
      return { page: 'settings', firstVisit: true };
    }
    return {};
  };

  confirmFavorites = () => {
    this.setState({
      firstVisit: false,
      page: 'dashboard'
    });
    localStorage.setItem('cryptoTracker', JSON.stringify({
      test: 'yo'
    }))
  };

  state = {
    page: 'dashboard',
    firstVisit: false,
    ...this.savedSettings(),
    setPage: this.setPage,
    confirmFavorites: this.confirmFavorites
  };

  render() {
    return (
      <Context.Provider value={ this.state }>
        { this.props.children }
      </Context.Provider>
    );
  };
};