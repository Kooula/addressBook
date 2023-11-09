import React from "react";
import { ErrorMessage } from "../../validators/FormValidation";

const LoginForm = ({ onSubmit, formData, onInputChange, isDataValid }) => {
  return (
    <div>
      <form>
        <div className="control-group">
          <div className="form-control">
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
              message="username is required"/>
          </div>
          <div className="form-control">
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
              message="password is required"/>
          </div>
          <button onClick={onSubmit}>Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
