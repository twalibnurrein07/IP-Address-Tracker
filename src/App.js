import React from "react";
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from 'react';
import axios from "axios";
import MapImg from "./components/MapImg";

function App() {
  const[IP,setIP]=useState("");

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
      
      console.log(response.data.country_name);
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      // always executed
    }); 
  }
  return (
    <div className='container'>
    <div className="content">
    <h1>IP Address Tracker</h1>
    <div className="input-group mb-3">
  <input type="text" class="form-control" name="IP" value={IP} placeholder="Search for any IP address or domain"  onChange={handleChange}/>
  <button className="btn btn-outline-secondary" onClick={handleClick} id="button-addon2">Button</button>
</div>
    </div>
    <div className="maps">
      <MapImg/>
    </div>
    </div>
    
      
        
  );
}

export default App;
