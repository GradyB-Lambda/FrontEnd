import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import icon from './food-truck-icon.svg'; //courtesy of Freepik. thank you!
import './Basemap.css';

/// DEFAULT Settings
const mapCenter = [40.72611, -73.99883]; //lat, lng
const defaultZoom = 13;
const customIcon = new Icon({
    iconUrl: icon,
    iconSize: [35, 35]
})

export default function Basemap(props) {
    const [activeTruck, setActiveTruck] = React.useState(null);

    return (
        <div>
            {/* DEFINE THE CONTAINER */}
            <MapContainer center={mapCenter} zoom={defaultZoom}>
                
                {/* DEFINE THE TILE */}
                <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />

                {/* CREATE POINTS TO BE MAPPED */}
                {props.trucksLatLng.map((truck, index) => {
                    return (
                        <Marker 
                        key={truck.truck_id}
                        icon={customIcon}
                        position={[
                            truck.current_location_lat,
                            truck.current_location_long
                        ]}
                        eventHandlers={
                            {click: () => setActiveTruck(truck)}
                        }
                        />
                    )
                })}

                {/* CREATE DATA LABELS FOR POINTS */}
                {activeTruck && (
                    <Popup 
                    position={[
                        activeTruck.current_location_lat,
                        activeTruck.current_location_long  
                    ]}
                    onClose={() => setActiveTruck(null)} //handler provided by Leaflet
                    >
                        <div className='basemap-popup'>
                            <img src={"https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"}
                                alt='example of a food truck' height="75px"/>
                            <h2>{activeTruck.truck_name}</h2>
                            <h4>Cusine: {activeTruck.cusine_type}</h4>
                            <button>More Info</button>
                        </div>
                    </Popup>
                )}

            </MapContainer>

        </div>
    )
}
