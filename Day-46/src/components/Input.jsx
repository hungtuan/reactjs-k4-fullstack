import React, { useId } from "react";

const Input = ({ name, type = "test" }) => {
  const id = useId();
  return (
    <div>
      <label htmlFor={id}>{name}</label>
      <input type={type} id={id} placeholder={name} />
    </div>
  );
};

export default Input;
