import NavLink from './NavLink';
import { Container, Menu } from './styles';

function Header() {
  return (
    <Container>
      {/* <Menu>
        <span className="item" />
        <span className="item" />
        <span className="item" />
      </Menu> */}
      <ul>
        <NavLink title="Home" path="/" />
        <NavLink title="Projetos" path="/projetos" includes />
      </ul>
    </Container>
  );
}

export default Header;
