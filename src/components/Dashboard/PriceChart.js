import React from 'react';
import highchartscConfig from './highchartsConfig';
import { Context } from '../Provider';
import { Tile } from '../shared/Tile';
import ReactHighcharts from 'react-highcharts';

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