import React from "react";

const ButtonEdit = (props) => {
  const { onClick, disabled, type } = props;
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type ?? "button"}
      className="bg-transparent border-0 px-1 m-0"
    >
      <img width={17} height={17} src="/img/editing.png" />
    </button>
  );
};

export default ButtonEdit;
