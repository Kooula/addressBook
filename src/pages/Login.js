import React, { useContext } from "react";
import LoginForm from "../components/form/LoginForm";
import useForm from "../hooks/useForm";
import { INIT_STATE_LOGIN } from "../constants/InitialState";
import { LoginFormValidation } from "../validators/LoginFormValidation";
import AuthContext from "../context/AuthContext";

const Login = () => {
  const { formData, onInputChange, setIsDataValid, isDataValid } =
    useForm(INIT_STATE_LOGIN);
  const authContext = useContext(AuthContext);

  const onSubmit = (e) => {
    e.preventDefault();
    const isValid = LoginFormValidation(formData);
    if (!isValid) {
      setIsDataValid(false);
      return;
    }
    setIsDataValid(true);
    authContext.logIn(formData);
    console.log(formData);
  };

  return (
    <div>
      <LoginForm
        formData={formData}
        onInputChange={onInputChange}
        onSubmit={onSubmit}
        isDataValid={isDataValid}
      ></LoginForm>
    </div>
  );
};

export default Login;
