import React from "react";

const Notification = ({ message, isError }) => {
  const notificationStyle = {
    backgroundColor: isError ? "var(--color-pink)" : "var(--color-blue)",
    color: "var(--text-default)",
  };
  return (
    <div className="notification" style={notificationStyle}>
      {message}
    </div>
  );
};

export default Notification;
