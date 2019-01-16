import React, { useState } from 'react';
import Sidebar from "react-sidebar";
import styled, { createGlobalStyle } from 'styled-components';



// export default ({logo, side, map}) => {
//     const [expanded, setExpanded] = useState(false);
//     const toggle = () => setExpanded(!expanded);

//     return (
//         <>
//         <Sidebar
//             sidebar={<b>Sidebar content</b>}
//             open={expanded}
//             docked={expanded}
//             onSetOpen={()=> setExpanded(true)}
//             styles={{ sidebar: { background: "white" } }}
//             >
//             <div>
//             a
//             </div>
//                 <button onClick={()=> toggle()}>
//                 Open sidebar
//             </button>
//         </Sidebar>
//         </>
//     );
// }

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
  @-webkit-keyframes scale-out-hor-left {
    0% {
      -webkit-transform: scaleX(1);
              transform: scaleX(1);
      -webkit-transform-origin: 0 0;
              transform-origin: 0 0;
      opacity: 1;
    }
    100% {
      -webkit-transform: scaleX(0);
              transform: scaleX(0);
      -webkit-transform-origin: 0 0;
              transform-origin: 0 0;
      opacity: 1;
    }
  }
  @keyframes scale-out-hor-left {
    0% {
      -webkit-transform: scaleX(1);
              transform: scaleX(1);
      -webkit-transform-origin: 0 0;
              transform-origin: 0 0;
      opacity: 1;
    }
    100% {
      -webkit-transform: scaleX(0);
              transform: scaleX(0);
      -webkit-transform-origin: 0 0;
              transform-origin: 0 0;
      opacity: 1;
    }
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



const OpenSidebar = styled.div`
  background-color:gray;
  position:absolute;
  z-index:1000;
  width:100px;
  height:100%;
  float:left;
`;

const ClosedSidebar = styled.div`
  background-color:white;
  position:absolute;
  z-index:1000;
`;

const Main = styled.div`
  background-color:red;
//   width:100%;
  height:100%;
`;




const Toggle = styled.div`
  background-color:white;
  padding:4px;
  position:absolute;
  z-index:1000;
    top: 50%;
    transform: translateY(-50%);

`;



// const Sidebar = styled.div`
//   background:gray;
//   width:200px;
//   height:100%;
// `;

// const SidebarClosed = styled.div`
// -webkit-animation: scale-out-hor-left 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
// animation: scale-out-hor-left 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
// `;


// ({expanded, children}) =>
//     expanded
//         ? (<OpenSidebar>{children}</OpenSidebar>)
//         : (<ClosedSidebar>{children}</ClosedSidebar>)





export default ({logo, side, map}) => {
    const [expanded, setExpanded] = useState(true);
    const toggle = () => setExpanded(!expanded);

    return (
        <Container>
            <GlobalStyle/>

            <Sidebar
            sidebar={<b>Sidebar content2</b>}
            open={expanded}
            docked={expanded}
            onSetOpen={()=> setExpanded(true)}
            styles={{ sidebar: { background: "white" } }}
            >
            <Main>
            <Toggle>
            <button onClick={toggle}>
                {expanded ? '<' : '>'}
            </button>
            </Toggle>
                            {map}
            </Main>
          </Sidebar>




        </Container>
    );
}

// {expanded
//     ? <Sidebar {...{expanded}}>a</Sidebar>
//     : <SidebarClosed>a</SidebarClosed>
// }




// const OpenContainer = styled.div`
//     display: grid;
//     gap: 4px;
//     grid-template-columns: 180px auto;
//     grid-template-rows: 100px auto;
//     grid-template-areas: "logo map" "side map";
//     background-color:white;
// `;

// const ClosedContainer = styled.div`
//     display: grid;
//     gap: 4px;
//     grid-template-columns: 100%;
//     grid-template-rows: 100%;
//     grid-template-areas: "map";
//     background-color:white;
//     -webkit-animation: scale-out-hor-left 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
//     animation: scale-out-hor-left 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
// `;

// const Logo = styled.div`
//     // background-color:green;
//     grid-area: logo;
// `;

// const Side = styled.nav`
//     grid-area: side;
//     background-color:lightblue;
// `;

// const Pane = styled.div`
//     grid-area: map;
//     display:flex;
//     flex-direction: column;
//     justify-content: center;
//     resize: vertical;
//     overflow: auto;
//   `;

// const Toggle = styled.div`
// //   display:block;
//   background-color:white;
//   padding:4px;
//   position:absolute;
//   z-index:1000;
// //   margin-top:40%;

// `;

// const Main = styled.div`

// `;

// const Container = ({expanded, children}) =>
//     expanded
//         ? (<OpenContainer>{children}</OpenContainer>)
//         : (<ClosedContainer>{children}</ClosedContainer>)



// export default ({logo, side, map}) => {
//     const [expanded, setExpanded] = useState(true);
//     const toggle = () => setExpanded(!expanded);

//     return (
//         <>
//             <GlobalStyle/>

//             <Container {...{expanded}}>
//                 <Logo>{logo}</Logo>
//                 <Side>Side</Side>
//                 <Pane>
//                     <Toggle>
//                         <button onClick={toggle}>
//                             {expanded ? '<' : '>'}
//                         </button>
//                 </Toggle>
//                 <Main>{map}</Main>
//             </Pane>
//             </Container>
//         </>
//     );
// }




//

// <Map>{map}</Map>

