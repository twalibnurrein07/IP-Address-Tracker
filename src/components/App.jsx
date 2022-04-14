import React from "react";
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from 'react';
import axios from "axios";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';


function App() {
  const[IPdetails,setIPdetails]=useState([]);
  const[IP,setIP]=useState("");
  const [lat, setLat] = useState('36.78175');
  const [lon, setLon] = useState('-1.27490');
  
  

  function handleChange(event){
    setIP(event.target.value);
  }
  function handleClick(){
    axios.get('https://api.ipgeolocation.io/ipgeo', {
      params: {
        ip: IP,
        apiKey:'44d924457fc648cf8e5194ae8bdd6085'
      }
    })
    .then(function (response) {
      setIPdetails(response.data)
      setLat(response.data.latitude);
      setLon(response.data.longitude);
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      // always executed
    }); 
  }
  return (
    <div className='container-fluid'>
    <div className="content">
    <h1>IP Address Tracker</h1>
    <div className="input-group mb-3">
  <input type="text" className="form-control" name="IP" value={IP} placeholder="Search for any IP address or domain"  onChange={handleChange}/>
  <button className="btn btn-outline-secondary" onClick={handleClick} id="button-addon2">Button</button>
</div>
    <div className="row">
  <div className="col-lg-3">
  <h3>IP Address</h3>
       <p>{IPdetails.ip}</p>
  </div>
  <div className="col-lg-3">
  <h3>Location</h3>
       <p>{IPdetails.district}</p>   
  </div>
  <div className="col-lg-3">
  <h3>Timezone</h3>
  <p>{IPdetails.ip}</p>
  </div> 
  <div className="col-lg-3">
  <h3>ISP</h3>
  <p>{IPdetails.isp}</p>
  </div> 
</div>
    </div>
    <MapContainer style={{ height: "450px", width: "100%" }} center={{lon,lat}} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={{lat,lon}}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
    
    
    </div>
    
      
        
  );
}

export default App;
