import React from 'react';
// import styled from 'styled-components';
import { Tab } from 'react-leaflet-sidetabs'
import { FiHome, FiSearch, FiSettings } from "react-icons/fi";

// const SidebarContents = styled.div`
//     width: 100%;

//     > img {
//         width: 300px;
//         float:right;
//     }
// `;

// export default () => <SidebarContents><img src="logo.png" alt="logo"/></SidebarContents>;

export default () => (
    <>
        <Tab id="home" header="Home" icon={<FiHome />}>
        <p>No place like home!</p>
        </Tab>
        <Tab id="search" header="Search" icon={<FiSearch />}>
        <p>The noblest search is the search for excellence!</p>
        </Tab>
        <Tab id="settings" header="Settings" anchor="bottom" icon={<FiSettings />}>
        <p>We don't want privacy so much as privacy settings!</p>
        </Tab>
    </>
);

