import React, {Component} from 'react';
import { DomEvent } from 'leaflet'
import { Sidebar , Tab } from 'react-leaflet-sidetabs'


// const PortalWrapper = ({children, position}) => <Portal {...{position}}>{children}</Portal>



class WrappedSidebar extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
      }

    componentDidMount() {
        DomEvent
          .disableClickPropagation(this.myRef.current);
      }

    render() {
        const {children, ...props} = this.props;

        // console.log({id});

        return <Sidebar {...{props}}>{children}</Sidebar>
    }
}

export { WrappedSidebar, Tab };




// // import React, { useState } from 'react';
// import styled from 'styled-components';
// import posed from 'react-pose';


// const sidebarProps = {
//   open: { width: '300px' },
//   closed: { width: '0' }
// }

// export default styled(posed.div(sidebarProps))`
//   height:100%;
//   background-color:#e3e0cf;
//   display: inline-block;
// `;
