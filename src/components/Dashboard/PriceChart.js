import React from 'react';
import ReactHighcharts from 'react-highcharts';
import { Context } from '../Provider';
import { ChartTile } from '../shared/Tile';
import ChartSelect from './ChartSelect';
import Loading from '../shared/Loading';
import highchartsConfig from './highchartsConfig';
import highchartsTheme from './highchartsTheme';

ReactHighcharts.Highcharts.setOptions(highchartsTheme);

const PriceChart = () => (
  <Context.Consumer>
    {({ historicalData, handleChartSelect }) => {
      return (
        <ChartTile>
          <ChartSelect
            defaultValue={'months'}
            onChange={({ target: { value } }) => handleChartSelect(value)}
          >
            <option value='days'>Days</option>
            <option value='weeks'>Weeks</option>
            <option value='months'>Months</option>
            <option value='years'>Years</option>
          </ChartSelect>
          {historicalData ? (
            <ReactHighcharts config={highchartsConfig(historicalData)} />
          ) : (
            <Loading message='Loading Historical Data' />
          )}
        </ChartTile>
      );
    }}
  </Context.Consumer>
);

export default PriceChart;
