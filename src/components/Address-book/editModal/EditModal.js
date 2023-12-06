import React from "react";
import ReactModal from "react-modal";
import AddressForm from "../../form/AddressForm";
import "./EditModal.css";


const EditModal = ({
  isOpen,
  closeModal,
  submitEdit,
  formData,
  onInputChange
}) => {
  ReactModal.setAppElement("#root");

  return (
    <ReactModal isOpen={isOpen} closeModal={closeModal} className="modal">
      <AddressForm
        formData={formData}
        onInputChange={onInputChange}
        isOpen={isOpen}
        closeModal={closeModal}
        submitEdit={submitEdit}
      />
    </ReactModal>
  );
};

export default EditModal;
