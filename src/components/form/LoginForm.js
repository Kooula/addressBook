import React from "react";

const LoginForm = ({ onSubmit, formData, onInputChange }) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="control-group">
          <div className="form-control">
            <label>Username</label>
            <input
              name="userName"
              value={formData.userName}
              onChange={onInputChange}
            />
          </div>
          <div className="form-control">
            <label>Password</label>
            <input
              name="password"
              value={formData.password}
              onChange={onInputChange}
            />
          </div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
