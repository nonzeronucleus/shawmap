import React from 'react';
// import styled from 'styled-components';
import {Map as LeafletMap, TileLayer} from 'react-leaflet';
import {LatLng, LatLngBounds} from 'leaflet';



export default({opacity, showMap, showSmallGrid, showLargeGrid, showOrigMap}) => {
    const lng = -1.3;
    const lat = 53.028;
    const startingZoom = 12;

    const position = [lat, lng];
    const bounds = new LatLngBounds(new LatLng(53.1, -1.4), new LatLng(52.9, -1.198));

    return (
        <LeafletMap center={position} zoom={startingZoom} maxBounds={bounds}>

            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
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
                opacity={opacity / 10}
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

        </LeafletMap>
    )
}