import React from "react";
import "./inputField.style.scss";

const InputField = ({
  textArea,
  label,
  placeholder,
  handleChange,
  ...restData
}) => {
  return (
    <div className="groupInput">
      <label className="form-input-label">{label}</label>

      {textArea ? (
        <textarea
          className="form-input textarea"
          placeholder={placeholder ? placeholder : ""}
          onChange={handleChange}
          {...restData}
        />
      ) : (
        <input
          className="form-input"
          placeholder={placeholder ? placeholder : ""}
          onChange={handleChange}
          {...restData}
        />
      )}
    </div>
  );
};

export default InputField;
