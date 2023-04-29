import React from "react";
import Logo from "../moralis-logo.svg";
import Eth from "../eth.svg";
import { Link } from "react-router-dom";
import { useDarkMode } from "../useDarkMode";

function Header(props) {

  const {address, isConnected, connect, balance} = props;

  const [darkMode, toggleDarkMode] = useDarkMode();

  const dropdownRef = React.useRef(null);
  const [isActive, setIsActive] = React.useState(false);
  const onClick = () => setIsActive(!isActive);

  return (
    <header className={`header ${darkMode ? "dark" : ""}`}>
      <div className="leftH">
        <img src={Logo} alt="logo" className="logo" />
        <Link to="/" className="link">
          <div className="headerItem">Swap</div>
        </Link>
        <Link to="/tokens" className="link">
          <div className="headerItem">Tokens</div>
        </Link>
      </div>
      <div className="rightH">
        <div className="headerItem">
          <img src={Eth} alt="eth" className="eth" />
          Ethereum
        </div>
        <div className="balance">{balance} ETH</div>
        <div className="connectButton" onClick={connect}>
          {isConnected ? (address.slice(0,4) +"..." +address.slice(38)) : "Connect"}
        </div>
        <div className="dropdownContainer">
          <div className="dropdownButton" onClick={onClick}>
            <svg
              width="14"
              height="7"
              viewBox="0 0 14 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L7 6L13 1"
                stroke="#2E3A59"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <nav
            ref={dropdownRef}
            className={`dropdownMenu ${isActive ? "active" : "inactive"}`}
          >
            <Link to="/account-settings" className="dropdownLink">
              Account Settings
            </Link>
            <div className="darkModeToggle">
              <input
                type="checkbox"
                id="toggle"
                checked={darkMode}
                onChange={toggleDarkMode}
              />
              <label htmlFor="toggle" className="switch"></label>
            </div>
            <Link to="/help" className="dropdownLink">
              Help Center
            </Link>
            <Link to="/contact" className="dropdownLink">
              Contact Us
            </Link>
            <Link to="/logout" className="dropdownLink">
              Logout
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
