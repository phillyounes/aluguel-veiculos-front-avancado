import React from "react";
import "./Home.css";
import {Layout} from "../components/layout";
import {VehicleCard} from "../components/vehicle-card";

function getVehicles() {
	return [
		{
			"sequencia": 1,
			"descricao": "Hatch Compacto 1.0",
			"grupo": "Grupo AM",
			"preco": 102.55,
			"src": "img/am-fiat-mobi-1.png",
			"alt": "fiat mobi - grupo am",
    		"canSelect": false
		},
		{
			"sequencia": 2,
			"descricao": "Hatch Médio 1.0",
			"grupo": "Grupo B",
			"preco": 109.36,
			"src": "img/b-vw-gol-1.png",
			"alt": "vw gol - grupo b",
    		"canSelect": false
		},
		{
			"sequencia": 3,
			"descricao": "Hatch Médio AT",
			"grupo": "Grupo EA",
			"preco": 153.34,
			"src": "img/C4-cactus-1.png",
			"alt": "c4 cactus - grupo ea",
			"canSelect": false
		},
		{
			"sequencia": 4,
			"descricao": "Sedan Médio AT",
			"grupo": "Grupo CA",
			"preco": 168.19,
			"src": "img/ca-fiat-cronos-1-1.png",
			"alt": "fiat cronos - grupo ca",
    		"canSelect": false
		},
		{
			"sequencia": 5,
			"descricao": "SUV AT Intermediário",
			"grupo": "Grupo SU",
			"preco": 179.43,
			"src": "img/ea-peugeot-208-1-1.png",
			"alt": "peugeot 2008 - grupo su",
    		"canSelect": false
		},
		{
			"sequencia": 6,
			"descricao": "SUV AT",
			"grupo": "Grupo SV",
			"preco": 197.37,
			"src": "img/sv-jeep-renegade-3-1.png",
			"alt": "jeep renegade - grupo sv",
    		"canSelect": false
		}
	];
}

function Home() {
	let vehicles = getVehicles();
	let breadcrumbs = {
		breadcrumbs: false
	};

	return (
		<>
			<Layout {...breadcrumbs}>
				<div className="home-wrapper">
					<h1 className="home-title">Grupos de veículos</h1>
					<div className="home-cards">
						{vehicles.map((vehicle, index) => (
							<VehicleCard key={index} {...vehicle} />
						))}
					</div>

				</div>
			</Layout>
		</>)
};

export default Home;