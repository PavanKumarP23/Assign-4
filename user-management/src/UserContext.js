import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([ ]);

  const addUser = (user) => {
    setUsers([...users, { ...user, id: users.length + 1 }]);
  };

  const editUser = (id, updatedUser) => {
    setUsers(users.map((user) => (user.id === id ? { ...user, ...updatedUser } : user)));
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <UserContext.Provider value={{ users, addUser, editUser, deleteUser }}>
      {children}
    </UserContext.Provider>
  );
};
