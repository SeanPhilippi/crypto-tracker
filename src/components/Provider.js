import React, { createContext, Component } from 'react';
import cc from 'cryptocompare';

export const Context = createContext();

const MAX_FAVORITES = 10;

export class Provider extends Component {

  componentDidMount = () => {
    this.fetchCoins();
  };

  fetchCoins = async () => {
    const coinList = (await cc.coinList()).Data;
    this.setState({ coinList });
  };

  addCoin = key => {
    if (this.state.favorites.length < MAX_FAVORITES) {
      this.setState({ favorites: [...this.state.favorites, key] });
    }
  };

  removeCoin = key => {
    if (this.state.favorites.length) {
      this.setState({ favorites: this.state.favorites.filter(coin => coin !== key ) })
    }
  };

  setPage = page => this.setState({ page });

  savedSettings = () => {
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
    }));
  };
  // initial state
  state = {
    page: 'dashboard',
    favorites: ['ZEC', 'DOGE', 'ETH', 'XMR'], // keys for coins
    firstVisit: false,
    ...this.savedSettings(),
    setPage: this.setPage,
    addCoin: this.addCoin,
    removeCoin: this.removeCoin,
    confirmFavorites: this.confirmFavorites,
    coinList: {},
  };

  render() {
    return (
      // like Redux Provider that is given the store
      <Context.Provider value={ this.state }>
        { this.props.children }
      </Context.Provider>
    );
  };
};