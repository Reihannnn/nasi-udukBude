import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Koordinat lokasi warung
const position = [-6.200000, 106.816666]; // Ganti dengan koordinat warung

// Custom marker icon
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
//   iconUrl: require('leaflet/dist/images/marker-icon.png'),
//   shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
// });

const MapComponent = () => {
  return (
    <MapContainer center={position} zoom={13} style={{ height: "400px", width: "50%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          Warung Ibu Saya <br /> Jl. Contoh No. 123.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;