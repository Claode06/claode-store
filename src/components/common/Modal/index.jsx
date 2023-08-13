import React from "react";
import { Button, Modal } from "react-bootstrap";

const ModalDialog = (props) => {
  const { view, setView } = props;
  return (
    <Modal
      className="custom-dialog"
      show={view}
      onHide={() => {
        setView(!view);
      }}
    >
      <Modal.Header closeButton>
        <Modal.Title>Modal Dialog</Modal.Title>
      </Modal.Header>
      <Modal.Body>Konten modal dialog Anda bisa di sini.</Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => {
            setView(!view);
          }}
        >
          Tutup
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            setView(!view);
          }}
        >
          Simpan
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalDialog;
