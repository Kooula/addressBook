import React from "react";
import { ErrorMessage } from "../../validators/FormValidation";
import "./AdressForm.css";

const AddressForm = ({
  formData,
  onInputChange,
  onSubmit,
  formReset,
  isDataValid,
  closeModal,
  isOpen,
  submitEdit,
}) => {
  return (
    <div>
      <form>
        <div className="control-group">
          <div className="form-control">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={onInputChange}
              style={
                isDataValid || formData.firstName
                  ? {}
                  : { border: "2px solid red" }
              }
            />
            <ErrorMessage
              condition={!isDataValid && !formData.firstName}
              message="First name is required"
            />
          </div>
          <div className="form-control">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={onInputChange}
              style={
                isDataValid || formData.lastName
                  ? {}
                  : { border: "2px solid red" }
              }
            />
            <ErrorMessage
              condition={!isDataValid && !formData.lastName}
              message="Last name is required"
            />
          </div>
          <div className="form-control">
            <label>Date of birth</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={onInputChange}
              style={
                isDataValid || formData.dob ? {} : { border: "2px solid red" }
              }
            />
            <ErrorMessage
              condition={!isDataValid && !formData.dob}
              message="Date of birth is required"
            />
          </div>
          <div className="form-control">
            <label>Country</label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={onInputChange}
              style={
                isDataValid || formData.country
                  ? {}
                  : { border: "2px solid red" }
              }
            />
            <ErrorMessage
              condition={!isDataValid && !formData.country}
              message="Country is required"
            />
          </div>
          <div className="form-control">
            <label>Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={onInputChange}
              style={
                isDataValid || formData.address
                  ? {}
                  : { border: "2px solid red" }
              }
            />
            <ErrorMessage
              condition={!isDataValid && !formData.address}
              message="Address is required"
            />
          </div>
          <div className="form-control">
            <label>Contact</label>
            <select
              name="contactType"
              value={formData.contactType}
              onChange={onInputChange}
            >
              <option value="phone">Phone</option>
              <option value="email">Email</option>
            </select>
            <input
              name="contact"
              value={formData.contact}
              onChange={onInputChange}
              style={
                (!isDataValid && !formData.contact) ||
                (formData.contactType === "email" &&
                  !formData.contact.includes("@"))
                  ? { border: "2px solid red" }
                  : {}
              }
            />
            <ErrorMessage
              condition={
                !isDataValid &&
                (!formData.contact ||
                  (formData.contactType === "email" &&
                    !formData.contact.includes("@")))
              }
              message={
                !formData.contact ? "Contact is required" : "Email is not valid"
              }
            />
          </div>
          {isOpen ? (
            <div>
              <button style={{backgroundColor: 'red'}} onClick={closeModal}>Close</button>
              <button onClick={submitEdit}>Edit</button>
            </div>
          ) : (
            <div>
              <button style={{backgroundColor: 'red'}} onClick={formReset}>Clear</button>
              <button onClick={onSubmit}>Submit</button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default AddressForm;
