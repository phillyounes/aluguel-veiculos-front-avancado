import "./header.css";
import Breadcrumbs from "../breadcrumbs";
import {InputField} from "../input";
import {DualInputField} from "../dual-input";
import { useNavigate } from "react-router-dom";

export const Header = ({breadcrumbs}) => {
	const navigate = useNavigate();

	const handleContinue = () => {
		navigate("/vehicles");
	};

	return (
		<header>
			<div className="header-main">
				<h1 className="header-main-title">Aluguel de Veículos</h1>
			</div>
			<div className="header-inputs">
				<div className="header-inputs-wrapper">
					<div className='header-inputs-wrapper-input'>
						<InputField placeholder="Digite o local da retirada" style={{maxWidth: "528px"}}/>
						<DualInputField placeholder="Data retirada" style={{maxWidth: "401px"}}/>
						<DualInputField placeholder="Data retirada" style={{maxWidth: "401px"}}/>
					</div>
					<button className="header-inputs-wrapper-button" onClick={handleContinue}> Continuar</button>
				</div>
					<Breadcrumbs breadcrumbs={breadcrumbs} />
			</div>
		</header>
	)
}