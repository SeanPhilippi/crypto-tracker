import React from 'react';
import styled from 'styled-components';
import { Context } from '../components/Provider';
import { backgroundColor2, fontSizeS } from '../shared/styles';
import fuzzy from 'fuzzy';
const _ = require('lodash');

const SearchGrid = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
`;

const SearchInput = styled.input`
  ${ backgroundColor2 };
  ${ fontSizeS };
  border: 1px solid;
  height: 25px;
  color: #1163c9;
  place-self: center left;
`; // align-self + justify-self

const handleFilter = _.debounce((inputValue, coinList, setFilteredCoins) => {
  // get array of all coin symbols
  console.log('coinList', coinList)
  const coinSymbols = Object.keys(coinList);
  console.log('coinSymbols', coinSymbols)
  // get an array of all the coin names
  const coinNames = coinSymbols.map(symbol => coinList[symbol].CoinName);
  const allStringsToSearch = coinSymbols.concat(coinNames);
  console.log('allStringsToSearch', allStringsToSearch)
  const fuzzyResults = fuzzy.filter(inputValue, allStringsToSearch, {});
  console.log('fuzzyResults', fuzzyResults);
}, 500);

const filterCoins = (e, setFilteredCoins, coinList) => {
  const inputValue = e.target.value;
  handleFilter(inputValue, coinList, setFilteredCoins);
};

const Search = () => (
  <Context.Consumer>
    {
      ({ setFilteredCoins, coinList }) => (
        <SearchGrid>
          <h2>Search all coins</h2>
          <SearchInput onKeyUp={ e => filterCoins(e, setFilteredCoins, coinList) } />
        </SearchGrid>
      )
    }
  </Context.Consumer>
);

export default Search;