import React from 'react';
import { FaBell } from 'react-icons/fa';

const Notification = () => {
  return (
    <div className="notification">
      <FaBell />
      <span className="notification-count">3</span>
    </div>
  );
};

export default Notification;
