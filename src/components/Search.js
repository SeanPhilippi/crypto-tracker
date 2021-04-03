import React from 'react';
import styled from 'styled-components';
import { Context } from '../components/Provider';
import { backgroundColor2, fontSizeS } from './shared/styles';
import fuzzy from 'fuzzy';
const _ = require('lodash');

const SearchGrid = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
`;

const SearchInput = styled.input`
  ${backgroundColor2};
  ${fontSizeS};
  border: 1px solid;
  height: 25px;
  color: #1163c9;
  place-self: center left;
`; // align-self + justify-self

const handleFilter = _.debounce((searchText, coinList, setFilteredCoins) => {
  // get array of all coin symbols
  // store array of coinList keys which are the coin symbols
  const coinSymbols = Object.keys(coinList);
  // get an array of all the coin names using the array of symbols that were keys on the coinList
  // object, and accessing the coinNames of those objects using those symbols
  const coinNames = coinSymbols.map(symbol => coinList[symbol].CoinName);
  // combine the coinSymbols array with the coinNames array for a more useful search
  const searchStringsArray = coinSymbols.concat(coinNames);
  const fuzzyResults = fuzzy
    .filter(searchText, searchStringsArray)
    .map(result => result.string);
  // return an object from an object and pick a list of coin keys based on a callback function
  setFilteredCoins(fuzzyResults);
}, 500);

const filterCoins = (e, setFilteredCoins, coinList) => {
  const searchText = e.target.value;
  !searchText && setFilteredCoins(null);
  searchText.length > 1 && handleFilter(searchText, coinList, setFilteredCoins);
};

const Search = () => (
  <Context.Consumer>
    {({ setFilteredCoins, coinList }) => (
      <SearchGrid>
        <h2>Search all coins</h2>
        <SearchInput
          onKeyUp={e => filterCoins(e, setFilteredCoins, coinList)}
        />
      </SearchGrid>
    )}
  </Context.Consumer>
);

export default Search;
