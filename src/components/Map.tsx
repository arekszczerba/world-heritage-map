import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { parseCSV } from '../services/api';
import Filter from './Filter'

// TODO: Add more fileds?
type Location = {
	id_no: string;
	name_en: string;
	latitude: string;
	longitude: string;
	category: string;
}

const Map: React.FC = () => {
  const [locations, setLocations] = useState<Location[]>([]);
	const [filter, setFilter] = useState<string>('');

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

	const filteredLocations = filter ? locations.filter((location) => location.category === filter) : locations;

  return (
		<div className="p-4">
			<Filter value={filter} onChange={setFilter} />
			<div className="w-full h-[80vh]">
				<MapContainer 
					center={[20, 0]}
					zoom={2}
					style={{ height: "70vh", width: "100%" }}>
					<TileLayer
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
						attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					/>

					{filteredLocations.map((location) => {
						const lat = parseFloat(location.latitude);
						const lng = parseFloat(location.longitude);
						if (isNaN(lat) || isNaN(lng)) return null;
						return (
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
						);
					})};
				</MapContainer>
			</div>
		</div>
    
	);
};

export default Map;
