import React,{useState} from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function MapImg (){

  const [lat, setLat] = useState(36.78175);
  const [lon, setLon] = useState(-1.27490);
  const [geo,setGeo]=useState({longitude:"-1.27490",latitude:"36.78175"})

    return(
      <MapContainer style={{ height: "450px", width: "100%" }} center={{lon,lat}} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
    )
}
export default MapImg;

