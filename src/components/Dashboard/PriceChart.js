import React from 'react';
import ReactHighcharts from 'react-highcharts';
import { Context } from '../Provider';
import { Tile } from '../shared/Tile';
import highchartscConfig from './highchartsConfig';
import highchartsTheme from './highchartsTheme';

ReactHighcharts.Highcharts.setOptions(highchartsTheme);

const PriceChart = () => (
  <Context>
    {
      () => (
        <Tile>
          <ReactHighcharts config={ highchartscConfig() }/>
        </Tile>
      )
    }
  </Context>
);

export default PriceChart;