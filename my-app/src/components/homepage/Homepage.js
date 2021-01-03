import React from 'react';
import axios from 'axios';
import './Homepage.css';
import Basemap from './Basemap.js';
import Loading from '../loading-screen/Loading.js';
import Footer from '../footer/Footer.js';

export default function Homepage() {
    // define state
    const [trucksLatLng, setTrucksLatLng] = React.useState(null)

    // fetch trucks coordinates
    React.useEffect(() => {
        axios.get('https://foodtruck-backend-api.herokuapp.com/api/trucks')
        .then(response => setTrucksLatLng(response.data))
    }, [])

    // render loading screen if data is loading
    if (!trucksLatLng){
        return <Loading/>
    }

    return (
        <div className='leaflet-container'>
            <Basemap trucksLatLng={trucksLatLng} />
            <Footer /> 
        </div>
    )
}
