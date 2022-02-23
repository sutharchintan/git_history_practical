import React, { useState, useCallback, createContext } from "react";

export const LoaderContext = createContext();

export const LoaderProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const contextValue = {
    loading,
    showLoading: useCallback((isLoading) => {
      setLoading(isLoading);
    }, []),
  };

  return (
    <LoaderContext.Provider value={contextValue}>
      {children}
    </LoaderContext.Provider>
  );
};
