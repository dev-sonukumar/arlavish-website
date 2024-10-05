import React from "react";

function Button({
  children,
  type = "button",
  className = "bg-custom-yellow hover:bg-orange-200 shadow text-lg text-black px-5 py-2 my-2 ",
  icon = "",
  ...props
}) {
  return (
    <button className={`${className}`} {...props}>
      <i className={`bi bi-${icon}`}></i> {children}
    </button>
  );
}

export default Button;
