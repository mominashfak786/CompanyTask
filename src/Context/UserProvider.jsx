import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

export const userContext = createContext();

const UserProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const localUserData = JSON.parse(localStorage.getItem('userData'));

  const apiUrl = 'https://panorbit.in/api/users.json';

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(apiUrl);
      const userData = res.data.users; // Update this line to access the 'users' array
      setIsLoading(false);
      setUsers(userData);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <userContext.Provider
      value={{ users, fetchData, localUserData, isLoading }}
    >
      {children}
    </userContext.Provider>
  );
};

export default UserProvider;
