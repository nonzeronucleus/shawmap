import React, { useState } from 'react';
// import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

import Map from './Map';

const GlobalStyle = createGlobalStyle`
  .leaflet-container {
    height: 1000px;
    width: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

export default () => {
  const [opacity, setOpacity] = useState(8);

  const handleOpacityChange = delta => {
    const newOpacity = opacity + delta;

    setOpacity (Math.min(Math.max(parseInt(newOpacity), 0), 10));
  }

  return (
      <>
    <GlobalStyle/>
      <Map showMap {...{opacity}} />
      <button onClick={() => handleOpacityChange(1)}>+</button>
        {opacity}
      <button onClick={() => handleOpacityChange(-1)}>-</button>
    </>
  )
}
