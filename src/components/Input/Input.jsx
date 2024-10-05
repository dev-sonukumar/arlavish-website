import React, { useId } from "react";

const Input = React.forwardRef(function Input(
  { label, type = "text", name, placeholder, className = "", bodyclass = "", ...props },
  ref
) {
  const id = useId();
  return (
    <div className={`mb-4 ${bodyclass}`}>
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <input
        type={type}
        className={`block w-full px-3 py-3  rounded focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-300 sm:text-sm my-2 border border-orange-300 ${className}`}
        id={id}
        ref={ref}
        name={name}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
});

export default Input;
