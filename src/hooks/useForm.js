import { useState } from "react";
import { FormValidation } from "../validators/FormValidation";
import { useUsersContext } from "../context/UsersContext";

export default function useForm(INIT_STATE) {
  const [formData, setFormData] = useState(INIT_STATE);
  const [isDataValid, setIsDataValid] = useState(true);
  const { addUser } = useUsersContext()

  const onInputChange = ({ target: { name, value } }) => {
    setFormData({ ...formData, [name]: value });
  };

  const formReset = (e) => {
    if (e) {
      e.preventDefault();
    }
    setIsDataValid(true);
    setFormData(INIT_STATE);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const isValid = FormValidation(formData);
    if (!isValid) {
      setIsDataValid(false);
      return;
    }
    const tempArray = { ...formData, id: Math.random() * 1000 };
    addUser(tempArray);
    formReset();
  };

  const userDataForUpdate = (data) => {
    setFormData(data);
  };


  return {
    formData,
    onInputChange,
    formReset,
    isDataValid,
    setIsDataValid,
    onSubmit,
    userDataForUpdate
  };
}
