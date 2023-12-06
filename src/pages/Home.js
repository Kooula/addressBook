import React, { useContext } from "react";
import { INIT_STATE_FORM } from "../constants/InitialState";
import useForm from "../hooks/useForm";
import AddressForm from "../components/form/AddressForm";
import AddressTable from "../components/Address-book/addressTable/AddressTable";
import UsersContext, { useUsersContext } from "../context/UsersContext";
import { FormValidation } from "../validators/FormValidation";
import useModal from "../hooks/useModal";

const Home = () => {
  const {
    formData,
    onInputChange,
    formReset,
    isDataValid,
    onSubmit,
    setIsDataValid,
    userDataForUpdate
  } = useForm(INIT_STATE_FORM);
  const {updateUser, users} = useUsersContext()
  const { closeModal, openModal, isOpen } = useModal()

  const onEditClick = (id) => {
    const user = users.filter((user) => user.id === id);
    userDataForUpdate(user[0]);
    openModal();
  };

  const onModalClose = () => {
    closeModal()
    formReset()
  }

  const submitEdit = (e) => {
    e.preventDefault();
    const isValid = FormValidation(formData);
    if (!isValid) {
      setIsDataValid(false);
      return;
    }
    updateUser({ ...formData });
    onModalClose()
  };

  return (
    <div>
      <AddressForm
        formData={formData}
        onInputChange={onInputChange}
        onSubmit={onSubmit}
        formReset={formReset}
        isDataValid={isDataValid}
        isOpen={isOpen}
      />
      <AddressTable
        users={users}
        onEditClick={onEditClick}
        isOpen={isOpen}
        formData={formData}
        onInputChange={onInputChange}
        closeModal={onModalClose}
        submitEdit={submitEdit}
        userDataForUpdate={userDataForUpdate}
      />
    </div>
  );
};

export default Home;
