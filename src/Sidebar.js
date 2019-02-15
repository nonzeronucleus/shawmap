// import React, { useState } from 'react';
import styled from 'styled-components';
import posed from 'react-pose';


const sidebarProps = {
  open: { width: '300px' },
  closed: { width: '0' }
}

export default styled(posed.div(sidebarProps))`
  height:100%;
  background-color:#e3e0cf;
  display: inline-block;
`;
