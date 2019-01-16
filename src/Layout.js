import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  .leaflet-container {
    height: 100%;
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

const Container = styled.div`
  position:absolute;
//   display:flex;
//   flex-direction:row;
  width:100%;
  height:100%;
  background-color:blue;
`;


// const Main = styled.div`
//   background-color:red;
// //   width:100%;
//   height:100%;
// `;



export default ({logo, side, map}) => {

    return (
        <Container>
            <GlobalStyle/>

            {map}
        </Container>
    );
}
