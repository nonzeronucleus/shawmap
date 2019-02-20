import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
// import Sidebar from './Sidebar';
// import SidebarContents from './SidebarContents';
// import MenuButton from './MenuButton';
// import useToggle from './useToggle';

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
  display:flex;
  width:100%;
  height:100%;
  top:0;
  left:0;
  background-color:blue;
`;


const Main = styled.main`
  width:100%;
  height:100%;
  background-color:red;
  border-width:2px;
  border-style:solid;
  border-color:black;
  display:inline-grid;
`;


export default ({logo, side, map}) => {
    // const [sidebarVisible, toggleVisibility] = useToggle(true);

    return (
      <Container>
        <GlobalStyle />
        <Main>{map}</Main>
      </Container>
    );
}

// {React.cloneElement(map, {menuButton:<MenuButton onClick={toggleVisibility}/>})}

