import React from 'react';
import ReactHighcharts from 'react-highcharts';
import { Context } from '../Provider';
import { Tile } from '../shared/Tile';
import ChartSelect from './ChartSelect';
import highchartsConfig from './highchartsConfig';
import highchartsTheme from './highchartsTheme';

ReactHighcharts.Highcharts.setOptions(highchartsTheme);

const PriceChart = () => (
  <Context.Consumer>
    {
      ({ historicalData, handleChartSelect }) => (
        <Tile>
          <ChartSelect
            defaultValue={ 'months' }
            onChange={ ({ target: { value } }) => handleChartSelect(value) }
          >
            <option value='days'>Days</option>
            <option value='weeks'>Weeks</option>
            <option value='months'>Months</option>
          </ChartSelect>
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