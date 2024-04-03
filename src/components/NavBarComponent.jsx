import { Container, Nav, Navbar, NavDropdown, Form, FormControl } from "react-bootstrap";

const NavBarComponent = function (props) {
  return (
    <Navbar bg="light" expand="lg" id="mynavBar">
      <Container>
        <Navbar.Brand href="#home">
          <img src="./svgexport-46.svg" alt="" width={50} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
          <form className="{position-position-relative} d-flex">
            <button className="btn btn-outline-primary border none me-2" type="submit" style={{ height: "34px" }}>
              <img src="svgexport-4.svg" alt="" style={{ verticalAlign: "baseline" }} />
            </button>
            <input type="search" className="form-control me-2" placeholder="cerca" aria-label="cerca" style={{ height: "34px" }} />
          </form>

          <Nav>
            <Nav.Link href="#home" className="d-flex flex-column">
              <img src="svgexport-49.svg" alt="" />
              <span>Home</span>
            </Nav.Link>
            <Nav.Link href="#home" className="d-flex flex-column">
              <img src="svgexport-50.svg" alt="" />
              <span>Rete</span>
            </Nav.Link>
            <Nav.Link href="#home" className="d-flex flex-column">
              <img src="svgexport-51.svg" alt="" />
              <span>Lavoro</span>
            </Nav.Link>
            <Nav.Link href="#home" className="d-flex flex-column">
              <img src="svgexport-52.svg" alt="" />
              <span>Messaggistica</span>
            </Nav.Link>
            <Nav.Link href="#home" className="d-flex flex-column">
              <img src="svgexport-53.svg" alt="" />
              <span>Notifiche</span>
            </Nav.Link>
            <NavDropdown
              title={
                <>
                  <img src="logo192.png" alt="" width={25} /> TU
                </>
              }
              id="basic-nav-dropdown"
              className="you"
            >
              <NavDropdown.Item href="/me">Il Mio Profilo</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title={
                <>
                  <img src="svgexport-55.svg" alt="" width={25} /> Per le aziende
                </>
              }
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link" id="premium">
              Prova premium a 0 eur
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarComponent;
