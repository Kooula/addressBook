import React from "react";
import LoginForm from "../components/form/LoginForm";
import useForm from "../hooks/useForm";
import { INIT_STATE_LOGIN } from "../const/InitialState";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { formData, onInputChange } = useForm(INIT_STATE_LOGIN);
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    navigate("/home", { replace: true });
    console.log(formData);
  };

  return (
    <div>
      <LoginForm
        formData={formData}
        onInputChange={onInputChange}
        onSubmit={onSubmit}
      ></LoginForm>
    </div>
  );
};

export default Login;
