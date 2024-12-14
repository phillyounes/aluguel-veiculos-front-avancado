import React from "react";
import { useNavigate } from "react-router-dom";
import "./ReservationSummary.css";
import { Layout } from "../components/layout";

const ReservationSummary = () => {
    const navigate = useNavigate();


	let breadcrumbs = {
		breadcrumbs: 3
	};

  let src = "img/sv-jeep-renegade-3-1.png";
  let alt = "";

  return (
    <>
    <Layout {...breadcrumbs} >

      <div className="content">
        <div className="client-data">
          <h2>Dados do Cliente</h2>
          <form>
            <input type="text" placeholder="Nome do cliente" />
            <input type="text" placeholder="CPF" />
            <input type="text" placeholder="CEP" />
            <input type="text" placeholder="Rua" />
            <input type="text" placeholder="Endereço" />
            <input type="text" placeholder="Número" />
            <input type="text" placeholder="Complemento" />
            <input type="text" placeholder="Bairro" />
            <input type="text" placeholder="Município" />
            <input type="text" placeholder="UF" />
          </form>
        </div>

        <div className="reservation-summary">
          <h2>SUV AT</h2>
          <img src={src} alt={alt} className="vehicle-image" />
          <div>
            <h3>Retirada</h3>
            <p>
              Aeroporto Do Galeão, Rio De Janeiro, RJ Av Vinte De Janeiro 0 -
              Galeao
            </p>
            <p>12/12/2024 - 0:45</p>
          </div>
          <div>
            <h3>Devolução</h3>
            <p>
              Aeroporto Do Galeão, Rio De Janeiro, RJ Av Vinte De Janeiro 0 -
              Galeao
            </p>
            <p>18/12/2024 - 0:45</p>
          </div>
          <div className="pricing">
            <h3>Valor da diária</h3>
            <p>6x R$ 195,37</p>
            <h3>Valor Total:</h3>
            <p>R$ 1.172,22</p>
          </div>
        </div>
      </div>

      <div className="reserve-button">
        <button>Reservar</button>
      </div>
    </Layout>
    </>
  );
};

export default ReservationSummary;