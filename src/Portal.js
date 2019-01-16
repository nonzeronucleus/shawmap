import React, {Component} from 'react';
import Portal from "react-leaflet-portal";
import { DomEvent } from 'leaflet'


// const PortalWrapper = ({children, position}) => <Portal {...{position}}>{children}</Portal>



class PortalWrapper extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
      }

    componentDidMount() {
        DomEvent
          .disableClickPropagation(this.myRef.current);
      }

    render() {
        const {children, position} = this.props;

        return <Portal {...{position}}><div ref={this.myRef}>{children}</div></Portal>
    }
}

export default PortalWrapper;
