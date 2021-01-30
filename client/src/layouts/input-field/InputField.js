import React from "react";
import "./inputField.style.scss";

const InputField = ({ label, placeholder, handleChange, ...restData }) => {
  return (
    <div className="groupInput">
      <label className="form-input-label">{label}</label>
      <input
        className="form-input"
        placeholder={placeholder ? placeholder : ""}
        onChange={handleChange}
        {...restData}
      />
    </div>
  );
};

export default InputField;
