import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import markerIconUrl from 'leaflet/dist/images/marker-icon.png';
import L from 'leaflet';

const customIcon = new L.Icon({
    iconUrl: markerIconUrl,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null
});

const locations = [
    { position: [23.5261, 77.7818], name: 'Doctor 1' },
    { position: [23.52, 77.78], name: 'Doctor 2' },
    { position: [23.53, 77.77], name: 'Doctor 3' },

];

const MapComponent = () => {
    return (

        <div className='m-auto w-[100%] mt-[1rem]' style={{ height: '600px' }}>

            <MapContainer center={[23.5261, 77.7818]} zoom={10} className='h-[100%] w-[80%] m-auto mt-[1rem]'>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {locations.map((location, index) => (
                    <Marker key={index} position={location.position} icon={customIcon}>
                        <Popup>{location.name}</Popup>
                    </Marker>

                ))}

            </MapContainer>
        </div>

    );
};

export default MapComponent;
