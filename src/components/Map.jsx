import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import '../styles/components/Map.css';


const position = [-34.916992, -57.944276];

const Map = () => {
  return (
    <div id="mapid">
      <MapContainer center={position} zoom={16} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default React.memo(Map);
