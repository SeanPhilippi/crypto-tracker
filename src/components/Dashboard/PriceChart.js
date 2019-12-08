import React from 'react';
import ReactHighcharts from 'react-highcharts';
import { Context } from '../Provider';
import { Tile } from '../shared/Tile';
import highchartsConfig from './highchartsConfig';
import highchartsTheme from './highchartsTheme';

ReactHighcharts.Highcharts.setOptions(highchartsTheme);

const PriceChart = () => (
  <Context.Consumer>
    {
      ({ historicalData }) => (
        <Tile>
          {
            historicalData
            ? <ReactHighcharts config={ highchartsConfig(historicalData) }/>
            : <div>Loading Historical Data...</div>
          }
        </Tile>
      )
    }
  </Context.Consumer>
);

export default PriceChart;