import { createContext, useContext, useState } from "react";
import { DummyData } from "../constants/DummyData";

const UsersContext = createContext({
  users: [],
});

const UsersProvider = ({ children }) =>  {
  const [users, setUsers] = useState(DummyData);

  const addUser = (user) => {
    const newUsers = users;
    newUsers.push(user);
    setUsers(newUsers);
  };

  const deleteUser = (id) => {
    setUsers((prevUser) => {
      return prevUser.filter((user) => user.id !== id);
    });
  };

  const updateUser = (updatedUser) => {
    setUsers((prevUsers) => {
      return prevUsers.map((user) =>
        user.id === updatedUser.id ? updatedUser : user
      );
    });
  };

  const value = {
    users: users,
    addUser: addUser,
    deleteUser: deleteUser,
    updateUser: updateUser,
  };

  return (
    <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
  );
}

const useUsersContext = () => {
  const context = useContext(UsersContext);
  if (!context) {
    throw new Error("usePostData must be used within UsersProvider");
  }
  return context;
};

export { UsersProvider, useUsersContext };

