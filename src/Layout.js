import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

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

const OpenContainer = styled.div`
    display: grid;
    gap: 4px;
    grid-template-columns: 180px auto;
    grid-template-rows: 100px auto;
    grid-template-areas: "logo map" "side map";
    background-color:white;
`;

const ClosedContainer = styled.div`
    display: grid;
    gap: 4px;
    grid-template-columns: 100%;
    grid-template-rows: 100%;
    grid-template-areas: "map";
    background-color:white;
    -webkit-animation: scale-out-hor-left 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
    animation: scale-out-hor-left 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
`;

const Logo = styled.div`
    // background-color:green;
    grid-area: logo;
`;

const Side = styled.nav`
    grid-area: side;
    background-color:lightblue;
`;

const Pane = styled.div`
    grid-area: map;
    display:flex;
    flex-direction: column;
    justify-content: center;
    resize: vertical;
    overflow: auto;
  `;

const Toggle = styled.div`
//   display:block;
  background-color:white;
  padding:4px;
  position:absolute;
  z-index:1000;
//   margin-top:40%;

`;

const Main = styled.div`

`;

const Container = ({expanded, children}) =>
    expanded
        ? (<OpenContainer>{children}</OpenContainer>)
        : (<ClosedContainer>{children}</ClosedContainer>)



export default ({logo, side, map}) => {
    const [expanded, setExpanded] = useState(true);
    const toggle = () => setExpanded(!expanded);

    return (
        <>
            <GlobalStyle/>

            <Container {...{expanded}}>
                <Logo>{logo}</Logo>
                <Side>Side</Side>
                <Pane>
                    <Toggle>
                        <button onClick={toggle}>
                            {expanded ? '<' : '>'}
                        </button>
                </Toggle>
                <Main>{map}</Main>
            </Pane>
            </Container>
        </>
    );
}




//

// <Map>{map}</Map>

