import React from 'react';
import styled from 'styled-components';

const Sidebar = styled.div`
    width: 100%;

    > img {
        width: 100%;
    }
`;

export default () => <Sidebar><img src="logo.png" alt="logo"/></Sidebar>;
