import { useContext } from "react";
import { NotificationContext } from "../contexts";

export const useNotifications = () => {
  const { message, addMessage, removeMessage } = useContext(
    NotificationContext
  );

  return { message, addMessage, removeMessage };
};
