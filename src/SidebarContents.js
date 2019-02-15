import React from 'react';
import styled from 'styled-components';

const Sidebar = styled.div`
    width: 100%;

    > img {
        width: 300px;
        float:right;
    }
`;

export default () => <Sidebar><img src="logo.png" alt="logo"/></Sidebar>;
