import { Nav, StyledLink } from "./styles";

const Navbar = () => {
  return (
    <Nav>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/brokercatalog">Broker Catalog</StyledLink>
      <StyledLink to="/zipcodesearcher">Zip Code Searcher</StyledLink>
    </Nav>
  );
};

export default Navbar;
