import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/brokercatalog">Broker Catalog</Link>
      <Link to="/zipcodesearcher">Zip Code Searcher</Link>
    </nav>
  );
};
export default Navbar;
