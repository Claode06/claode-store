import React from "react";

const ButtonDelete = (props) => {
  const { onClick, disabled, type } = props;
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type ?? "button"}
      className="bg-transparent border-0 px-1 m-0"
    >
      <img width={17} height={17} src="/img/delete.png" />
    </button>
  );
};

export default ButtonDelete;
