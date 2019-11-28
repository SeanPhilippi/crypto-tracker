import React from 'react';
import ConfirmButton from './ConfirmButton';
import Welcome from './Welcome';
import Page from '../shared/Page';

const Settings = () => (
  <Page name="settings">
    <Welcome />
    <ConfirmButton />
  </Page>
);

export default Settings;