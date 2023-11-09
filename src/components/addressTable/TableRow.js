import { useContext } from "react";
import UsersContext from "../../context/UsersContext";
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
  userForEdit,
}) => {
  const userContext = useContext(UsersContext);

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
          onClick={(e) => {
            userForEdit(id);
          }}
        >
          Edit
        </button>
        <button
          style={{ backgroundColor: "red" }}
          onClick={(e) => {
            userContext.deleteUser(id);
          }}
        >
          X
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
