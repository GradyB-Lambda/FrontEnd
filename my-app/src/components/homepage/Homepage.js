import React from 'react';
import './Homepage.css';
import Basemap from './Basemap';
import Loading from '../loading-screen/Loading';

export default function Homepage() {

    // fetch truck coordinates
    const truckLatLng = null;

    // render loading screen if data is loading
    // if (!truckLatLng){
    //     return <Loading/>
    // }

    return (
        <div className='leaflet-container'>
            <Basemap /> 
        </div>
    )
}
