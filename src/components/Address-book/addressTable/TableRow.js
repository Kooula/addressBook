import { useContext } from "react";
import UsersContext, { useUsersContext } from "../../../context/UsersContext";
import "./TableRow.css";

const TableRow = ({
  id,
  firstName,
  lastName,
  dob,
  country,
  address,
  contactType,
  contact,
  onEditClick,
}) => {
  const { deleteUser } = useUsersContext()

  return (
    <tr>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{dob}</td>
      <td>{country}</td>
      <td>{address}</td>
      <td>{contactType + ": " + contact}</td>
      <td className="buttons">
        <button
          onClick={() => {
            onEditClick(id);
          }}
        >
          Edit
        </button>
        <button
          style={{ backgroundColor: "red" }}
          onClick={(e) => {
           deleteUser(id);
          }}
        >
          X
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
