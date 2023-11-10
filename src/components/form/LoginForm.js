import React from "react";
import { ErrorMessage } from "../../validators/FormValidation";
import './LoginForm.css'

const LoginForm = ({ onSubmit, formData, onInputChange, isDataValid }) => {
  return (
    <div>
      <form>
        <div className="login-form">
          <div className="form-control-login">
            <label>Username</label>
            <input
              name="userName"
              value={formData.userName}
              onChange={onInputChange}
              style={
                isDataValid || formData.userName
                  ? {}
                  : { border: "2px solid red" }
              }
            />
            <ErrorMessage condition={!isDataValid && !formData.userName}
              message="Username is required"/>
          </div>
          <div className="form-control-login">
            <label>Password</label>
            <input
              name="password"
              value={formData.password}
              onChange={onInputChange}
              style={
                isDataValid || formData.password
                  ? {}
                  : { border: "2px solid red" }
              }
            />
            <ErrorMessage condition={!isDataValid && !formData.password}
              message="Password is required"/>
          </div>
          <button onClick={onSubmit}>Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
