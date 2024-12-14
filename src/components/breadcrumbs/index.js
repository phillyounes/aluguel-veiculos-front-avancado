import React from "react";
import "./Breadcrumbs.css";
import { useNavigate } from "react-router-dom";

const Breadcrumbs = ({breadcrumbs}) => {
  let navigate = useNavigate();
  const handleClick = () => {
		navigate("/");
	};
  const handleClick2 = () => {
		navigate("/vehicles");
	};

  return (
    <div className={breadcrumbs ? "breadcrumbs" : "breadcrumbs inactive"}>
      <div className="breadcrumb-item active" onClick={handleClick}>
        <span className="circle">1</span>
        <span className="text">Localização e data</span>
      </div>
      <div className="separator"></div>
      <div className="breadcrumb-item active" onClick={handleClick2}>
        <span className="circle">2</span>
        <span className="text">Grupo de veículos</span>
      </div>
      <div className="separator"></div>
      <div className={breadcrumbs===3 ? "breadcrumb-item active" : "breadcrumb-item"}>
        <span className="circle">3</span>
        <span className="text">Resumo da reserva</span>
      </div>
    </div>
  );
};

export default Breadcrumbs;