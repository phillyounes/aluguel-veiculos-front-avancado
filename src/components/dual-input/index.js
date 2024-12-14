import "./dual-input.css";

export const DualInputField = ({ dateValue, onDateChange, timeValue, onTimeChange }) => {
	return (
		<div className="dual-input-container">
			<input
				type="date"
				value={dateValue}
				onChange={onDateChange}
				placeholder="Data retirada"
				className="dual-input date-input"
			/>
			<input
				type="time"
				value={timeValue}
				onChange={onTimeChange}
				placeholder="Hora retirada"
				className="dual-input time-input"
			/>
		</div>
	);
};