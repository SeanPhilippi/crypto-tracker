import React from 'react';
import ConfirmButton from './ConfirmButton';
import Welcome from './Welcome';
import Page from '../shared/Page';
import CoinGrid from './CoinGrid';

const Settings = () => (
  <Page name="settings">
    <Welcome />
    <CoinGrid topSection />
    <ConfirmButton />
    <CoinGrid />
  </Page>
);

export default Settings;