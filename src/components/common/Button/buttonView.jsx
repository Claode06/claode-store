import React from "react";

const ButtonView = (props) => {
  const { onClick, disabled, type } = props;
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type ?? "button"}
      className="bg-transparent border-0 px-1 m-0 "
    >
      <img width={20} height={20} src="/img/view.png" />
    </button>
  );
};

export default ButtonView;
