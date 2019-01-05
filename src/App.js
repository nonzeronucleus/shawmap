import React from 'react';
// import styled from 'styled-components';
import './App.css';
import { Map as LeafletMap, TileLayer} from 'react-leaflet';
import {LatLng, LatLngBounds} from 'leaflet';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      lng: -1.3,
      lat: 53.028,
      zoom: 12,
      opacity:0.7,
      l1:true,
      l2:false,
      l3:false,
      l4:false,
      tileSize:512
    }
  }

  increateOpacity = () => {
    this.setState({
      opacity:Math.min(1,this.state.opacity+0.05)
    })
  }

  decreateOpacity = () => {
    this.setState({
      opacity:Math.max(0, this.state.opacity-0.05)
    })
  }

  increaseTileSize = () => {
    this.setState({
      tileSize:Math.min(1200,this.state.tileSize+100)
    })
  }

  decreaseTileSize = () => {
    this.setState({
      tileSize:Math.max(0, this.state.tileSize-100)
    })
  }

  toggleLayer1 = () => {
    this.setState({
      l1:!this.state.l1
    })
  }

  toggleLayer2 = () => {
    this.setState({
      l2:!this.state.l2
    })
  }

  toggleLayer3 = () => {
    this.setState({
      l3:!this.state.l3
    })
  }

  toggleLayer4 = () => {
    this.setState({
      l4:!this.state.l4
    })
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    // const corner1 = new LatLng(53.07, -1.37);
    // const corner2 = new LatLng(52.975728, -1.22);
    const corner1 = new LatLng(53.0809, -1.37);  // 53.081
    const corner2 = new LatLng(52.97, -1.198);

    const bounds = new LatLngBounds(corner1, corner2);

    console.log(this.state.latOffset);

    // crs={CRS.Simple}
    return (
      <>
        <LeafletMap center={position} zoom={this.state.zoom} >

          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          />



          {this.state.l2 && (<TileLayer
            attribution='Shaws Map'
            url='/tiles/grid-1200.png?x={x}&y={y}&z={z}'
            transparant
            tileSize={this.state.tileSize}
            bounds={bounds}
          />)
          }

          {this.state.l4 && (<TileLayer
            attribution='Shaws Map'
            url='/tiles/grid-600.png?x={x}&y={y}&z={z}'
            transparant
            bounds={bounds}
          />)
          }

          {this.state.l1 && (<TileLayer
            tileSize={1024}
            attribution='Shaws Map'
            url='/tiles/{z}/tile--{y}-{x}-{z}.png'
            minNativeZoom={14}
            maxNativeZoom={16}
            // minZoom={1}
            transparant
            opacity={this.state.opacity}
            bounds={bounds}
          />)
          }
          {this.state.l3 && (<TileLayer
            tileSize={512}
            attribution='Shaws Map'
            // url='/maps/grid.png'
            url='/tiles/{z}/tile--{y}-{x}-{z}.png'
            minNativeZoom={16}
            maxNativeZoom={16}
            // minZoom={1}
            transparant
            opacity={this.state.opacity}
            bounds={bounds}
          />)
          }
        </LeafletMap>
        <div>
          <button onClick={this.increateOpacity}>+</button>
          <button onClick={this.decreateOpacity}>-</button>
          <button onClick={this.toggleLayer1}>{this.state.l1 ? "Hide map" : "Show map"}</button>
          <button onClick={this.toggleLayer2}>{this.state.l2 ? "Hide grid 1200" : "Show grid 1200"}</button>
          <button onClick={this.toggleLayer4}>{this.state.l4 ? "Hide grid 600" : "Show grid 600"}</button>
          <button onClick={this.toggleLayer3}>{this.state.l3 ? "Hide orig map" : "Show orig map"}</button>
          <button onClick={this.increaseTileSize}>+</button>
          <button onClick={this.decreaseTileSize}>-</button>
        </div>
      </>
    );
  }
}

// url='/slices/tile-{y}_{x}.png'
// url='/maps/tile_{y}_{x}.png'



        // <Marker position={position}>
        //   <Popup>
        //     A pretty CSS3 popup. <br/> Easily customizable.
        //   </Popup>
        // </Marker>

export default App;

// ReactDOM.render(<SimpleExample />, document.getElementById('container'))