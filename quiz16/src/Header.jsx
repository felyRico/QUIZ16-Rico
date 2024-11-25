import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Header = ({ user }) => {
  return (
    <header className="header">
      <div className="top">
        <div style={{ color: '#DA6001', fontSize: '30px' }}>
          <span className="so">SO</span>
          <span className="cio">CIO.</span>
        </div>
        <div className="account">
          <FontAwesomeIcon icon={faCheck} className="icon verified-icon" />
          <span style={{ color: '#B8B8B8' }}>
            <i>Verified</i>
          </span>
          <button type="button" className="username">
            {user.username} <FontAwesomeIcon icon={faChevronDown} className="icon" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

