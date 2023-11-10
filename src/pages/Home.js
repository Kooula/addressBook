import React, { useContext, useState } from "react";
import { INIT_STATE_FORM } from "../const/InitialState";
import useForm from "../hooks/useForm";
import AddressForm from "../components/form/AddressForm";
import AddressTable from "../components/addressTable/AddressTable";
import UsersContext from "../context/UsersContext";
import { FormValidation } from "../validators/FormValidation";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    formData,
    onInputChange,
    formReset,
    isDataValid,
    userDataForUpdate,
    onSubmit,
    setIsDataValid,
  } = useForm(INIT_STATE_FORM);
  const usersContext = useContext(UsersContext);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    formReset();
  };

  const userForEdit = (id) => {
    const user = usersContext.users.filter((user) => user.id === id);
    userDataForUpdate(user[0]);
    openModal();
  };

  const submitEdit = (e) => {
    e.preventDefault();
    const isValid = FormValidation(formData);
    if (!isValid) {
      setIsDataValid(false);
      return;
    }
    UsersContext.updateUser({ ...formData });
    closeModal();
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
        users={usersContext.users}
        userForEdit={userForEdit}
        isOpen={isOpen}
        formData={formData}
        onInputChange={onInputChange}
        closeModal={closeModal}
        submitEdit={submitEdit}
      />
    </div>
  );
};

export default Home;
