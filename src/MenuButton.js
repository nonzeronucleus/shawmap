import React from 'react';
import styled from 'styled-components';

const MenuButton = styled.button`
    border:0px;

    > div {
        border-color:black;
        width:24px;
        height:4px;
        border-width:1px;
        background-color:black;
        margin:4px;
        border-style:solid;
        border-radius:4px;
    }
`;

export default ({onClick}) => (
    <MenuButton {...{onClick}}>
        <div/>
        <div/>
        <div/>
    </MenuButton>
)
