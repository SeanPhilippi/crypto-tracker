import React from 'react';

const CoinImage = ({ coin, style }) => (
  <img
    src={ `http://cryptocompare.com/${ coin.ImageUrl }` }
    style={ style || { height: '50px' } }
    alt={ coin.CoinSymbol }
  />
);

export default CoinImage;