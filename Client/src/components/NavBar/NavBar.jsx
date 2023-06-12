import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import Styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={Styles.nav}>
      <Link to="/">Products</Link>
      <Link to="/aboutus">About Us</Link>

      <div>
        <SearchBar />
      </div>
      <Link to="/favorite">Favorite</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/login">Login</Link>
      <Link to="/signUp">Sign Up</Link>
    </nav>
  );
};

export default NavBar;
