import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { parseCSV } from '../services/api';

// TODO: Add more fileds?
type Location = {
	id_no: string;
	name_en: string;
	latitude: string;
	longitude: string;
	category: string;
}

const Map = () => {
  const [locations, setLocations] = useState<Location[]>([]);

	useEffect(() => {
		// CSV Read
		const fetchData = async() => {
			try {
				const response = await fetch('/whc-sites.csv');
				const csvText = await response.text();
				const data = (await parseCSV(csvText)) as Location[];
				setLocations(data);
			} catch(error) {
				console.error('Eror parsing CSV:', error)
			}
		};

		fetchData();
	}, []);

  return (
    <MapContainer
      center={[20, 0]}
      zoom={2}
      style={{ height: "70vh", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
			{locations.filter((location) => !isNaN(parseFloat(location.latitude)) && !isNaN(parseFloat(location.longitude))).map((location) => (

				<Marker
					key={location.id_no}
					position={[parseFloat(location.latitude),parseFloat(location.longitude)]}
				>
					
					<Popup>
            <strong>{location.name_en}</strong>
            <br />
            Category: {location.category}
          </Popup>
				</Marker>

			))};

    </MapContainer>
  );
};

export default Map;
