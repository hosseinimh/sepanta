import React from "react";

const InputRadioContainer = ({ children, label }) => {
  return (
    <div className="list-input mb-30">
      {label && <div className="input-info">{label}</div>}
      <div className="d-flex align-center">{children}</div>
    </div>
  );
};

export default InputRadioContainer;
