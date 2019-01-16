import React, {useState} from 'react';
import styled from 'styled-components';
// import InputRange from 'react-input-range'
// import 'react-input-range/lib/css/index.css';


// const Slider = styled.div`
//   width: 200px; /* Width of the outside container */
//   padding:20px;
//   background-color:white;
// `;


// export default () => {

//   const [opacity, setOpacity] = useState(70);

//   const s = () => {
//     console.log(s);
//   }

//   return (<Slider>
//     <InputRange
//     maxValue={100}
//     minValue={0}
//     value={opacity}
//     onChange={s} />
//   </Slider>)
// }

const Slider = styled.div`
  width: 100%; /* Width of the outside container */
  padding:10px;
  background-color:green;


/* The slider itself */
> input {
  -webkit-appearance: none;  /* Override default CSS styles */
  appearance: none;
  width: 100%; /* Full-width */
  height: 5px; /* Specified height */
  background: #d3d3d3; /* Grey background */
  outline: none; /* Remove outline */
  opacity: 0.7; /* Set transparency (for mouse-over effects on hover) */
  -webkit-transition: .2s; /* 0.2 seconds transition on hover */
  transition: opacity .2s;
}

/* Mouse-over effects */
> input:hover {
  opacity: 1; /* Fully shown on mouse-over */
}

/* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */
> input::-webkit-slider-thumb {
  -webkit-appearance: none; /* Override default look */
  appearance: none;
  width: 25px; /* Set a specific slider handle width */
  height: 25px; /* Slider handle height */
  background: #4CAF50; /* Green background */
  border-radius:50%;
  cursor: pointer; /* Cursor on hover */
}

> input ::-moz-range-thumb {
  width: 25px; /* Set a specific slider handle width */
  height: 25px; /* Slider handle height */
  background: #4CAF50; /* Green background */
  cursor: pointer; /* Cursor on hover */
}
}

`;

export default ({setOpacity = () =>{}}) => {
  const [val, setVal] = useState("70");

  const onChange = val => {setVal(val); setOpacity(val);}

  return (<Slider>
      <input type="range" min="0" max="100" value={val} onChange={(e) => onChange(e.target.value)} id="myRange"></input>
      <div>Opacity: {val}%</div>
    </Slider>
  )
}


// <input type="range" min="1" max="100" value={val} onChange={(e) => setVal(e.target.value)} id="myRange"></input>

