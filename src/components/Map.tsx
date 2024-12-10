import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = () => {
	const position = [51.7556223, 19.4725837]

	return (
		<MapContainer center={position} zoom={2} style={{ height: "100vh", width: "100%" }}>
			<TileLayer
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' />
				
				<Marker position={position}>
        	<Popup>Default Location Lodz</Popup>
      	</Marker>
    	</MapContainer>
	)
}

export default Map;