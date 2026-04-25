import "./header.css";
import avatar from "../../../images/Avatar.svg";
import logo from "../../../images/wtwr° logo.svg";

function Header() {
  return (
    <header className="header">
      
      <div className="header__content">
        <div className="header__brand-section">
          <img className="header__logo" src={logo} alt="WTWR logo" />
          <p className="header__date-and-location">June 15, New York</p>
        </div>
        <div className="header__actions">
          <button type="button" className="header__add-clothes-button">
            + Add clothes
          </button>
          <div className="header__user-container">
            <p className="header__username">Terrence Tegegne</p>
            <img className="header__avatar" src={avatar} alt="User avatar" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
