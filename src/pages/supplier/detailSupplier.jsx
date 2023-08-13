import React, { useState } from "react";
import ModalDialog from "../../components/common/Modal";
import ButtonView from "../../components/common/Button/buttonView";

const DetailSupplier = ({ data }) => {
  const [view, setView] = useState(false);
  return (
    <>
      {/* <ModalDialog view={view} setView={setView(true)} /> */}
      <ButtonView
        onClick={() => {
          setView(true);
        }}
      />
    </>
  );
};

export default DetailSupplier;
