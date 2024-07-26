import React from 'react';
import { Link } from 'react-router-dom';

const MainNavigation = () => {
  return (
    <nav className="main-navigation">
      <ul>
        <li>
          <Link to="/upi-payments">
            <i className="upi-payments-icon" />
            UPI Payments
          </Link>
        </li>
        <li>
          <Link to="/online-shopping">
            <i className="online-shopping-icon" />
            Online Shopping
          </Link>
        </li>
        <li>
          <Link to="/food-delivery">
            <i className="food-delivery-icon" />
            Food Delivery
          </Link>
        </li>
        <li>
          <Link to="/social-media">
            <i className="social-media-icon" />
            Social Media
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;