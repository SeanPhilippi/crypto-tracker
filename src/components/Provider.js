import React, { createContext, Component } from 'react';
const cc = require('cryptocompare');

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
    this.setState({ favorites: this.state.favorites.filter(coin => coin !== key ) });
  };

  isInFavorites = key => this.state.favorites.includes(key);

  setPage = page => this.setState({ page });

  setFilteredCoins = filteredCoins => this.setState({ filteredCoins });

  confirmFavorites = () => {
    this.setState({
      firstVisit: false,
      page: 'dashboard'
    });
    localStorage.setItem('cryptoTrackerData', JSON.stringify({
      favorites: this.state.favorites
    }));
  };

  savedSettings = () => {
    let cryptoTrackerData = JSON.parse(localStorage.getItem('cryptoTrackerData'));
    if (!cryptoTrackerData) {
      // if no localStorage data, set firstVisit to true, and page to 'settings'
      return { page: 'settings', firstVisit: true };
    }
    const { favorites } = cryptoTrackerData;
    return { favorites };
  };

  // initial state
  state = {
    page: 'dashboard',
    favorites: ['ZEC', 'DOGE', 'ETH', 'XMR'], // keys for coins
    firstVisit: true,
    ...this.savedSettings(),
    setPage: this.setPage,
    addCoin: this.addCoin,
    removeCoin: this.removeCoin,
    isInFavorites: this.isInFavorites,
    confirmFavorites: this.confirmFavorites,
    setFilteredCoins: this.setFilteredCoins,
    coinList: null // not empty object, needs to be falsey for Content.js logic
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