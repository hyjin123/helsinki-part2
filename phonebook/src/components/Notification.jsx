import React from "react";

const Notification = ({ message, errorMessage }) => {
  if (message === null && errorMessage === null) {
    return null;
  }

  return (
    <>
      {message ? (
        <div className="confirm">{message}</div>
      ) : (
        <div className="error">{errorMessage}</div>
      )}
    </>
  );
};

export default Notification;
