import React from "react";

const ContainerForm = ({ children }) => {
  return (
    <div className="rounded rounded-xl p-4 border ">
      <div>{children}</div>
    </div>
  );
};

export default ContainerForm;
