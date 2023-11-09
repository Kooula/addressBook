import React, { useContext, useEffect } from "react";
import LoginForm from "../components/form/LoginForm";
import useForm from "../hooks/useForm";
import { INIT_STATE_LOGIN } from "../const/InitialState";
import { useNavigate } from "react-router-dom";
import { LoginFormValidation } from "../validators/LoginFormValidation";
import AuthContext from "../context/AuthContext";

const Login = () => {
  const { formData, onInputChange, setIsDataValid, isDataValid } =
    useForm(INIT_STATE_LOGIN);
  const navigateTo = useNavigate();
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

  useEffect(() => {
    if (authContext.validAuth === true) {
      navigateTo("/home", { replace: true });
    }
  }, []);

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
