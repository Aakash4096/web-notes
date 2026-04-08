import reactLogo from "../assets/react.svg";
import "../navbar.css";
import "../index.css";

function Navbar() {
  return (
    <nav>
      <img src={reactLogo} alt="Logo" />
      <h2>ReactFacts</h2>
    </nav>
  );
}

export default Navbar;
