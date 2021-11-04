import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export default function NavbarElement(props) {
  return (
    <nav className="nav">
      <h3>Logo</h3>
      <ol className="nav-links">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/Shop">
          <li>Shop</li>
        </Link>
        <li>
          <i>
            <FontAwesomeIcon
              icon={faShoppingCart}
              style={{ fontSize: "22px", cursor: "pointer" }}
            />
            <span className="badge">{props.cartQnt}</span>
          </i>
        </li>
      </ol>
    </nav>
  );
}
