import React from "react";
import "./input.css";

export const InputField = ({ placeholder, value, onChange, type = "text", style }) => {
	return (
		<input
			type={type}
			value={value}
			onChange={onChange}
			placeholder={placeholder}
			style={style}
			className="input-field"
		/>
	);
};