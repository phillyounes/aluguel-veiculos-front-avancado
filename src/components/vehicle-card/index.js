import React from "react";
import "./vehicle-card.css";
import { useNavigate } from "react-router-dom";


export const VehicleCard = ({descricao, grupo, preco, src, alt, canSelect}) => {
	const navigate = useNavigate();

	const handleReserve = () => {
		navigate("/summary");
	};

	return (
	<div className="vehicle-card">
		<div className="vehicle-title">
				<h3>{descricao}</h3>
				<span>{grupo}</span>
			</div>
			<img className="vehicle-image" src={src} alt={alt}/>
			<p className="vehicle-price">R$ {preco.toFixed(2)} / dia</p>
			<button className={canSelect ? "vehicle-wrapper-button button-visible" : "button-invisible"} onClick={handleReserve}>Reservar</button>
		</div>
	);
};