import { Link } from "react-router-dom";
import logo from "../../assets/logo-tiki-vector-5.jpg";
function Logo() {
  return (
    <Link to="/">
      <img src={logo} alt="Logo" className="w-14 h-14 object-contain" />
    </Link>
  );
}
export default Logo;
