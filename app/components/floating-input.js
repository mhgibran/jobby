import React from "react";

export default function FloatingInput(props) {
  const { icon, type, id, label } = props;
  return (
    <div className="input-group mb-3">
      <span className="input-group-text">{icon}</span>
      <div className="form-floating">
        <input
          type={type}
          id={id}
          className="form-control border-start-0"
          placeholder={label}
          autoComplete="off"
        />
        <label htmlFor={id}>{label}</label>
      </div>
    </div>
  );
}
