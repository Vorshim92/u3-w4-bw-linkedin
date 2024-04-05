import { useState } from "react";
import { Container, Nav, Navbar, NavDropdown, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../redux/actions/fetchUser";
import { useNavigate } from "react-router-dom";
import { setTokenFail, fetchUserFailure } from "../redux/actions/fetchUser";
const NavBarComponent = function () {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleSearchClick = () => {
    setIsModalOpen(!isModalOpen);
  };
  const handleSearchChange = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  const handleLogout = () => {
    dispatch(setTokenFail());
    dispatch(fetchUserFailure());
  };
  const navigate = useNavigate();

  return (
    <Navbar bg="light" expand="lg" id="mynavBar" className="p-0">
      <Container>
        <Navbar.Brand onClick={() => navigate("/home")}>
          <img src="./svgexport-46.svg" alt="" width={50} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
          <form className="{position-position-relative} d-flex">
            <button className="btn btn-outline-primary border none me-2" type="submit" style={{ height: "34px" }}>
              <img src="svgexport-4.svg" alt="" style={{ verticalAlign: "baseline" }} />
            </button>
            <div className="search-global">
              <input type="search" className="form-control me-2 " placeholder="cerca" aria-label="cerca" style={{ height: "34px" }} onClick={handleSearchClick} onChange={(e) => handleSearchChange(e)} />
            </div>
          </form>
          {isModalOpen && (
            <Modal show={isModalOpen} onHide={handleSearchClick} className="search-global_overlay">
              <Modal.Header closeButton>
                <Modal.Title>Search</Modal.Title>
              </Modal.Header>
              <Modal.Body></Modal.Body>
            </Modal>
          )}

          <Nav>
            <Nav.Link onClick={() => navigate("/home")} className="d-flex flex-column">
              <img src="svgexport-49.svg" alt="" />
              <span>Home</span>
            </Nav.Link>
            <Nav.Link href="#>" className="d-flex flex-column">
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
              <NavDropdown.Item onClick={() => navigate("/me")}>Il Mio Profilo</NavDropdown.Item>

              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
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
