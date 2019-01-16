import React, {useState} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%; /* Width of the outside container */
  padding:10px;
  background-color:white;
  // opacity:0.3;
  // background-color: rgba(211, 214, 154, 0.75);
`;


  /* The slider itself */
const Slider = styled.input`
  // opacity:1;
  // -webkit-appearance: none;  /* Override default CSS styles */
  // appearance: none;
  // width: 100%; /* Full-width */
  // height: 5px; /* Specified height */
  // // background: #d3d3d3; /* Grey background */
  // background:white;
  // // outline: none; /* Remove outline */
  // opacity: 1.0; /* Set transparency (for mouse-over effects on hover) */
  // -webkit-transition: .2s; /* 0.2 seconds transition on hover */
  // transition: opacity .2s;

  :hover {
    // opacity: 1; /* Fully shown on mouse-over */
  }

  // ::-webkit-slider-thumb {
  //   -webkit-appearance: none; /* Override default look */
  //   appearance: none;
  //   width: 25px; /* Set a specific slider handle width */
  //   height: 25px; /* Slider handle height */
  //   background: #4CAF50; /* Green background */
  //   border-radius:50%;
  //   cursor: pointer; /* Cursor on hover */
  // }

  // ::-moz-range-thumb {
  //   width: 25px; /* Set a specific slider handle width */
  //   height: 25px; /* Slider handle height */
  //   background: #4CAF50; /* Green background */
  //   cursor: pointer; /* Cursor on hover */
  // }
}

`;

export default ({setOpacity = () =>{}}) => {
  const [val, setVal] = useState("70");

  const onChange = val => {setVal(val); setOpacity(val);}

  return (<Wrapper>
      <Slider type="range" min="0" max="100" value={val} onChange={(e) => onChange(e.target.value)} id="myRange"></Slider>
    </Wrapper>
  )
}
// <div>Opacity: {val}%</div>


// <input type="range" min="1" max="100" value={val} onChange={(e) => setVal(e.target.value)} id="myRange"></input>

