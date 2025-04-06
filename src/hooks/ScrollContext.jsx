import React, { createContext, useRef } from 'react';

const ScrollContext = createContext();

const ScrollProvider = ({ children }) => {
  const formElement = useRef(null);

  return (
    <ScrollContext.Provider value={{ formElement }}>
      {children}
    </ScrollContext.Provider>
  );
};

export { ScrollContext, ScrollProvider };