import React, {useState, useRef} from 'react';
// import styled from 'styled-components';
import {Map, TileLayer, ZoomControl} from 'react-leaflet';
import {LatLng, LatLngBounds} from 'leaflet';
import Portal from './Portal';
import OpacityControl from './OpacityControl';
import 'leaflet/dist/leaflet.css';
import { Sidebar, Tab } from 'react-leaflet-sidetabs'
import { FiHome, FiChevronRight} from "react-icons/fi";
// import useToggle from './useToggle';



export default({showMap, showSmallGrid, showLargeGrid, showOrigMap, menuButton, ...rest}) => {
    const [sidebarVisible, setVisibility] = useState(false);
    const [selected, setSelected] = useState('home')
    const [opacity, setOpacity] = useState("70");
    const lng = -1.282;
    const lat = 53.028;
    const startingZoom = 13;
    const mapRef = useRef();

    const position = [lat, lng];
    const bounds = new LatLngBounds(new LatLng(53.1, -1.4), new LatLng(52.9, -1.198));

    //console.log(mapRef);

    if (mapRef.current) {
        setTimeout(()=> mapRef.current.leafletElement.invalidateSize(),300);
    }

    const onOpen = () => {
        setVisibility(true);
        setSelected('home');
    }

    const onClose = () => {
        setVisibility(false);
    }

    return (
        <div>
        <Sidebar
        id="sidebar"
        position="right"
        collapsed={!sidebarVisible}
        closeIcon={<FiChevronRight />}
        selected={selected}
        onOpen={ onOpen}
        onClose={ onClose }
    >
        <Tab id="home" header="Home" icon={<FiHome />}>
            <p><a href="/docs/T_Kimberley.pdf">Kimberley</a></p>
            <p><a href="/docs/T_Brinsley.pdf">Brinsley</a></p>
            <p><a href="/docs/T_Watnall.pdf">Watnall</a></p>
            <p><a href="/docs/T_Moorgreen.pdf">Moorgreen</a></p>
            <p><a href="/docs/T_Newthorpe.pdf">Newthorpe</a></p>
            <p><a href="/docs/FullDoc.pdf">Original</a></p>
        </Tab>
    </Sidebar>
        <Map ref={mapRef} center={position} zoom={startingZoom} maxBounds={bounds} zoomControl={false}>

            <Portal position="topleft">
                {menuButton}
            </Portal>


            <ZoomControl position="topleft"/>

            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                maxNativeZoom={17}
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"/>

            {showLargeGrid && <TileLayer
                attribution='Shaws Map'
                url='/tiles/grid-1200.png?x={x}&y={y}&z={z}'
                transparant
                tileSize={512}
                bounds={bounds} />
            }

            {showSmallGrid && <TileLayer
                attribution='Shaws Map'
                url='/tiles/grid-600.png?x={x}&y={y}&z={z}'
                transparant
                bounds={bounds} />
            }

            {showMap && <TileLayer
                tileSize={1024}
                attribution='Shaws Map'
                url='/tiles/{z}/tile--{y}-{x}-{z}.png'
                minNativeZoom={14}
                maxNativeZoom={16}
                transparant
                opacity={opacity / 100}
                bounds={bounds}/>
            }

            {showOrigMap && <TileLayer
                tileSize={1024}
                attribution='Shaws Map'
                url='/tiles/{z}/tile--{y}-{x}-{z}.png'
                minNativeZoom={16}
                maxNativeZoom={16}
                transparant
                opacity={opacity / 10}
                bounds={bounds}/>
            }

            <Portal position="bottomleft">
                <OpacityControl {...{setOpacity}} />
            </Portal>
        </Map>
        </div>

    )
}