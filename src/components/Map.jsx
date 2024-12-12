import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
// eslint-disable-next-line react/prop-types
export default function Map({ coordinates}) {
  return (
    <MapContainer center={coordinates} zoom={13} style={{ height: "30vh", width: "100%" }}>
         <TileLayer 
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={coordinates}>
          <Popup>
            Hello Ishaaq!
          </Popup>
        </Marker>
    </MapContainer>
  )
}
