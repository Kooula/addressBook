import React from "react";
import TableRow from "./TableRow";
import { TABLE_HEADERS } from "../../const/InitialState";
import EditModal from "../editModal/EditModal";
import "./AddressTable.css";

const AddressTable = ({
  users,
  userForEdit,
  formData,
  isOpen,
  onInputChange,
  closeModal,
  submitEdit,
}) => {
  return (
    <div>
      <EditModal
        formData={formData}
        isOpen={isOpen}
        onInputChange={onInputChange}
        closeModal={closeModal}
        submitEdit={submitEdit}
      ></EditModal>
      <table>
        <thead>
          <tr>
            {TABLE_HEADERS.map((headerText) => (
              <th key={headerText}>{headerText}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <TableRow
                key={index}
                firstName={user.firstName}
                lastName={user.lastName}
                dob={user.dob}
                country={user.country}
                address={user.address}
                contactType={user.contactType}
                contact={user.contact}
                id={user.id}
                userForEdit={userForEdit}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AddressTable;
