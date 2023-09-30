import React from "react";

export default function Button(props) {
  const { variant, type, size, className, text } = props;
  return (
    <button
      type={type ?? "button"}
      className={`btn btn-${size} btn-${variant} fs-6 ${className}`}
    >
      {text}
    </button>
  );
}
