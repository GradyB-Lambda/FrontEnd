import React, { useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";

const mapCenter = [40.758896, -73.985130]; //lat, lng
const defaultZoom = 13;

export default function Basemap() {
    const [activeTruck, setActiveTruck] = useState(null);
    return (
        <div>
            <MapContainer center={mapCenter} zoom={defaultZoom}>
                
                <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />

                <Marker 
                position={[40.752379, -73.989294]} //lat, lng
                />

            </MapContainer>

        </div>
    )
}
