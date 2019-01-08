import React, { useState } from 'react';
// import styled from 'styled-components';
import Layout from './Layout';

import Map from './Map';


const Slider = ({opacity, handleOpacityChange}) => (
  <>
    <button onClick={() => handleOpacityChange(1)}>+</button>
      {opacity}
    <button onClick={() => handleOpacityChange(-1)}>-</button>
  </>
)


export default () => {
  const [opacity, setOpacity] = useState(8);

  const handleOpacityChange = delta => {
    const newOpacity = opacity + delta;

    setOpacity (Math.min(Math.max(parseInt(newOpacity), 0), 10));
  }

  return (
    <Layout
      logo={<img src="logo.png" alt="logo" width="100%"/>}
      map={<Map showMap {...{opacity}} />}
      side={<Slider {...{opacity, handleOpacityChange}} />}
    />
  )
}

// export default () => (
//   <Layout logo={<img src="logo.png" alt="logo" width="100%"/>} map={<Main />} side={<div>Side</div>}/>
// );
