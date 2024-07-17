import { LOGO_URL } from "../utils/constants";  

const Header = () => (
  <div className="header">
    <div className="logo-container">
      <img
        className="logo" 
        src={LOGO_URL}
      />
    </div>
    <nav className="nav-items">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Menu</li>
        <li>Contact</li>
      </ul>
    </nav>
  </div>
);
export default Header;