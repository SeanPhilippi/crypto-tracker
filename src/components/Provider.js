import React, { createContext, Component } from 'react';
import moment from 'moment';
const cc = require('cryptocompare');

cc.setApiKey(process.env.REACT_APP_CRYPTO_API_KEY);

export const Context = createContext();

const MAX_FAVORITES = 10;
const TIME_UNITS = 10;

export class Provider extends Component {
  componentDidMount = () => {
    this.fetchCoins();
    this.fetchPrices();
    this.fetchHistoricalData();
  };

  fetchCoins = async () => {
    const coinList = (await cc.coinList()).Data;
    this.setState({ coinList });
  };

  fetchPrices = async () => {
    if (this.state.firstVisit) return;
    // store return of price data for favorites in prices, set to state.prices
    // but only if not first visit, don't want data for default coins in state.favorites
    const prices = await this.prices();
    // filter the empty price objects
    const filteredPrices = prices.filter(price => Object.keys(price).length);
    this.setState({ prices: filteredPrices });
  };

  fetchHistoricalData = async () => {
    if (this.state.firstVisit) return;
    const results = await this.historical();
    const historicalData = [
      {
        name: this.state.currentFavorite,
        data: results.map((ticker, index) => [
          moment()
            .subtract({ [this.state.timeInterval]: TIME_UNITS - index })
            .valueOf(),
          ticker.USD,
        ]),
      },
    ];
    this.setState({ historicalData });
  };

  historical = () => {
    const promises = [];
    for (let units = TIME_UNITS; units > 0; units--) {
      // pushing data points into promises array for data at different months
      promises.push(
        // fetches historical price data from crypto-compare
        cc.priceHistorical(
          // what coin for fetching historical price data from crypto-compare
          this.state.currentFavorite,
          // what currency for the data
          ['USD'],
          // what date. units is decremented with each loop which will
          // create a series of price data points that can be charted
          moment()
            .subtract({ [this.state.timeInterval]: units })
            .toDate()
        )
      );
    }
    // returns a stingle promise only after all the promises in the array given have resolved
    return Promise.all(promises);
  };

  prices = async () => {
    const { favorites } = this.state;
    const returnData = [];
    for (let i = 0; i < favorites.length; i++) {
      try {
        // takes an array of strings (from symbols) and another array of strings (to symbols)
        // get all current trading info (price, vol, open, high, low, etc.) on favorite -> USD
        // returns an object of objects
        const priceData = await cc.priceFull(favorites[i], 'USD');
        returnData.push(priceData);
      } catch (err) {}
    }
    return returnData;
  };

  addCoin = key => {
    if (this.state.favorites.length < MAX_FAVORITES) {
      this.setState({ favorites: [...this.state.favorites, key] });
    }
  };

  removeCoin = key => {
    this.setState({
      favorites: this.state.favorites.filter(coin => coin !== key),
    });
  };

  isInFavorites = key => this.state.favorites.includes(key);

  setPage = page => this.setState({ page });

  setFilteredCoins = filteredCoins => this.setState({ filteredCoins });

  confirmFavorites = () => {
    const currentFavorite = this.state.favorites[0];
    this.setState(
      {
        firstVisit: false,
        page: 'dashboard',
        currentFavorite,
        prices: null,
        historical: null,
      },
      () => {
        this.fetchPrices();
        this.fetchHistoricalData();
      }
    );
    localStorage.setItem(
      'cryptoTrackerData',
      JSON.stringify({
        favorites: this.state.favorites,
        currentFavorite,
      })
    );
  };

  setCurrentFavorite = sym => {
    this.setState(
      { currentFavorite: sym, historicalData: null },
      this.fetchHistoricalData
    );
    localStorage.setItem(
      'cryptoTrackerData',
      JSON.stringify({
        ...JSON.parse(localStorage.getItem('cryptoTrackerData')),
        currentFavorite: sym,
      })
    );
  };

  savedSettings = () => {
    const cryptoTrackerData = JSON.parse(
      localStorage.getItem('cryptoTrackerData')
    );
    if (!cryptoTrackerData) {
      // if no localStorage data, set firstVisit to true, and page to 'settings'
      return { page: 'settings', firstVisit: true };
    }
    const { favorites, currentFavorite } = cryptoTrackerData;
    return { favorites, currentFavorite };
  };

  handleChartSelect = value => {
    this.setState(
      {
        timeInterval: value,
        historicalData: null,
      },
      this.fetchHistoricalData
    );
  };

  changeTheme = () => {
    this.setState({ darkTheme: !this.state.darkTheme });
  };

  // initial state
  state = {
    page: 'settings',
    favorites: ['ZEC', 'DOGE', 'ETH', 'XMR'], // keys for coins
    firstVisit: true,
    ...this.savedSettings(),
    setPage: this.setPage,
    addCoin: this.addCoin,
    removeCoin: this.removeCoin,
    isInFavorites: this.isInFavorites,
    confirmFavorites: this.confirmFavorites,
    setFilteredCoins: this.setFilteredCoins,
    setCurrentFavorite: this.setCurrentFavorite,
    handleChartSelect: this.handleChartSelect,
    changeTheme: this.changeTheme,
    lightTheme: false,
    timeInterval: 'months',
    // currentFavorite: 'ZEC',
    coinList: null, // not empty object, needs to be falsey for Content.js logic
  };

  render() {
    return (
      // like Redux Provider that is given the store
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
