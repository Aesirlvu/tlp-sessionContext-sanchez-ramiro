import React, { createContext, useState } from "react";

const SessionContext = createContext();

const SessionProvider = ({ children }) => {
  const [sessionState, setSessionState] = useState({
    user: null,
    isAuthenticated: false,
  });

  const login = (user) => {
    setSessionState({ user, isAuthenticated: true });
  };

  const logout = () => {
    setSessionState({ user: null, isAuthenticated: false });
  };

  return (
    <SessionContext.Provider value={{ sessionState, login, logout }}>
      {children}
    </SessionContext.Provider>
  );
};

export { SessionContext, SessionProvider };
