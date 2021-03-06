import React from 'react';
import ConfirmButton from './ConfirmButton';
import Welcome from './Welcome';
import Page from './shared/Page';
import CoinGrid from './CoinGrid';
import Search from './Search';

const Settings = () => (
  <Page name='settings'>
    <h2>Favorites</h2>
    <CoinGrid topSection />
    <ConfirmButton />
    <hr />
    <Welcome />
    <Search />
    <CoinGrid />
  </Page>
);

export default Settings;
