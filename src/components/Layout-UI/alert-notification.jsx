import React, { Fragment } from "react";
import { Snackbar, IconButton } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import { Close } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { messageTypes } from "../../common/constants";
import { useNotifications } from "../../common/hooks";

/**
 * alert message
 * @param {*} props
 * @returns
 */
const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

/**
 * use styles for alert notification
 */
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

/**
 * alert notification
 * @returns
 */
export const AlertNotification = () => {
  /**
   * use notifications hooks
   */
  const { message, removeMessage } = useNotifications();
  
  /**
   * classes using styles
   */
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={!!message}
        autoHideDuration={message?.duration ? message.duration : 100000}
        onClose={removeMessage}
        action={
          <Fragment>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={removeMessage}
            >
              <Close fontSize="small" />
            </IconButton>
          </Fragment>
        }
      >
        <Alert
          onClose={removeMessage}
          severity={message && message.type ? message.type : messageTypes.error}
        >
          {message ? message.message : ""}
        </Alert>
      </Snackbar>
    </div>
  );
};
