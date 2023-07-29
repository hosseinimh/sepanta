import React from "react";

const InputCheckboxContainer = ({ children, label }) => {
  return (
    <div className="list-input mb-30">
      {label && <div className="input-info">{label}</div>}
      <div className="d-flex align-center input-radio">{children}</div>
    </div>
  );
};

export default InputCheckboxContainer;
