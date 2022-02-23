import React, { useState, useCallback } from "react";
import _ from "underscore";

/**
 * notification context
 */
export const NotificationContext = React.createContext({
  message: undefined,
  addMessage: () => {},
  removeMessage: () => {},
});

/**
 * notification provider
 * @param {*} param0 
 * @returns 
 */
export const NotificationProvider = ({ children }) => {
  /**
   * stores the state of message
   */
  const [message, setMessage] = useState(undefined);

  /**
   * remove message
   * @returns 
   */
  const removeMessage = () => setMessage(undefined);

  /**
   * add message
   * @param {*} messageObj 
   * @returns 
   */
  const addMessage = (messageObj) => setMessage(messageObj);

  /**
   * show server errors
   * @param {*} errors
   */
  const showServerErrors = (errors) => {
    const errorsObj = errors && errors.errors ? errors.errors : errors;
    const messages = [];
    _.each(errorsObj, (error) => {
        messages.push(error.errorMessage);
    });

    const validation = (
      <ul style={{ margin: 0, padding: 0 }}>
        {_.map(messages, (m, i) => (
          <li key={i}>{m}</li>
        ))}
      </ul>
    );

    setMessage({
      message: validation,
    });
  };

  /**
   * context values for the notification
   */
  const contextValue = {
    message,
    addMessage: useCallback((messageData) => addMessage(messageData), []),
    removeMessage: useCallback(() => removeMessage(), []),
    addServerErrors: useCallback((errors) => showServerErrors(errors), []),
  };

  return (
    <NotificationContext.Provider value={contextValue}>
      {children}
    </NotificationContext.Provider>
  );
};
