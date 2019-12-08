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
          <ReactHighcharts config={ highchartsConfig(historicalData) }/>
        </Tile>
      )
    }
  </Context.Consumer>
);

export default PriceChart;