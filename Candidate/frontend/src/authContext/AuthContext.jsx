import React, { createContext, useState } from 'react';

// Create a new context
const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [isLoggedin, setIsLoggedIn] = useState(false);

  return (
    <AuthContext.Provider value={{ isLoggedin, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};
