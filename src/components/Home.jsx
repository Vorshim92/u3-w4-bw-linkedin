import { Button, Card, Col, Row, ListGroup, CardBody, ListGroupItem, Modal } from "react-bootstrap";
import { useState } from "react";
import { FaBookmark } from "react-icons/fa";
import { BsSquareHalf } from "react-icons/bs";
import { HiPlus } from "react-icons/hi";
import { BsInfoSquareFill } from "react-icons/bs";
import { FaRegImage } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";
import { RiUserFollowFill } from "react-icons/ri";
import { RiArrowDownSLine } from "react-icons/ri";
import { RiArrowDropDownFill } from "react-icons/ri";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };
  return (
    <>
      {/*LEFSIDE */}
      <Col xs={2}>
        <Card id="main-card" className="mt-3 ">
          <Card.Img variant="top" src="userbackground.svg" alt="User Background" className="position-relative" />
          <div
            className="position-absolute"
            style={{
              right: "20px",
              top: "20px",
            }}
          ></div>
          <Card.Body style={{ position: "relative" }} className="text-center">
            <img
              src=/*mettere immagine */ "./360_F_575073408_glupjidkesdoYGsQJch2yKZS50oSNTMi.jpg"
              alt=""
              style={{
                width: "70px",
                height: "70px",
                position: "absolute",
                top: "0",

                transform: "translate( -50%, -50%)",
                borderRadius: "50%",
                border: "5px solid white",
                objectFit: "cover",
              }}
            />

            <Card.Title className="mt-5">Ti diamo il benvenuto nome utente</Card.Title>
            <Card.Link>Aggiungi una foto</Card.Link>
          </Card.Body>
          <CardBody className="p-0 ">
            <ListGroup className="rounded-0">
              <ListGroup.Item
                style={{ borderTop: "solid 1px", borderColor: "lightgray", borderLeft: "0", borderRight: "0" }}
              >
                <div className="my-1">
                  <p id="pOfHome" className="paragraphGrey">
                    Collegamenti
                  </p>
                  <p id="pOfHome" className="paragraphBold">
                    Espandi la tua rete
                  </p>
                </div>
              </ListGroup.Item>
              <ListGroup.Item style={{ borderLeft: "0", borderRight: "0" }}>
                <div className="my-1">
                  <p id="pOfHome" className="paragraphGrey">
                    Accedi a strumenti e informazioni in esclusiva
                  </p>
                  <p id="pOfHome" className="paragraphBold ">
                    <BsSquareHalf className="me-2" /> Prova premium per 0 EUR
                  </p>
                </div>
              </ListGroup.Item>
              <ListGroup.Item style={{ borderLeft: "0", borderRight: "0", borderBottom: "0", borderRadius: "25px" }}>
                <p id="pOfHome" className="paragraphBold my-1 d-flex align-items-center ">
                  <FaBookmark className="me-2" /> I miei elementi{" "}
                </p>
              </ListGroup.Item>
            </ListGroup>
          </CardBody>
        </Card>

        <Card className="mt-2 ">
          <CardBody className="p-0">
            <ListGroup>
              <ListGroupItem style={{ borderLeft: "0", borderRight: "0" }}>
                <div>
                  <a href="#1" id="pOfHome" className="fw-medium aHome">
                    Gruppi
                  </a>
                  <div className="d-flex justify-content-between align-items-center">
                    <a href="#1" id="pOfHome" className="my-3 fw-medium aHome">
                      Eventi
                    </a>

                    <div>
                      <HiPlus className="fs-5" />
                    </div>
                  </div>
                  <a href="#1" id="pOfHome" className="fw-medium aHome">
                    Hashtag seguiti
                  </a>
                </div>
              </ListGroupItem>
            </ListGroup>
            <ListGroup.Item className="text-center my-3">
              <h6 className="paragraphGrey m-0">Scopri di piu</h6>
            </ListGroup.Item>
          </CardBody>
        </Card>
      </Col>
      {/*LEFSIDE */}

      {/*CENTRAL CONTENT*/}
      <Col xs={6}>
        <Card id="main-card" className="mt-3">
          <div
            className="position-absolute"
            style={{
              right: "20px",
              top: "20px",
            }}
          ></div>
          <Card.Body className="text-center pb-0">
            <Row className="align-items-center">
              <Col xs={2}>
                <img
                  src=/*mettere immagine */ "./360_F_575073408_glupjidkesdoYGsQJch2yKZS50oSNTMi.jpg"
                  alt=""
                  style={{
                    width: "60px",
                    height: "60px",

                    borderRadius: "50%",
                    border: "5px solid white",
                    objectFit: "cover",
                  }}
                />
              </Col>
              <Col xs={10}>
                <Button id="btnPost" variant="primary" className="text-start w-100 " onClick={handleModalOpen}>
                  Avvia un post
                </Button>
              </Col>
              <Col xs={12} className="my-3">
                <Row className="d-flex justify-content-around ">
                  <Col xs={4} className="d-flex justify-content-center align-items-center ">
                    <FaRegImage className="mx-2" />
                    <p id="pOfHome" className="m-0 fw-medium text-secondary">
                      Contenuti multimediali
                    </p>
                  </Col>
                  <Col xs={4} className="d-flex justify-content-center align-items-center">
                    <FaRegCalendarAlt className="mx-2" />
                    <p id="pOfHome" className="m-0 fw-medium text-secondary">
                      Evento
                    </p>
                  </Col>
                  <Col xs={4} className="d-flex justify-content-center align-items-center">
                    <RiUserFollowFill className="mx-2" />
                    <p id="pOfHome" className="m-0 fw-medium text-secondary">
                      Scrivi un articolo
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <Modal show={showModal} onHide={handleModalClose}>
          <Modal.Header closeButton>
            <Modal.Title>Avvia un post</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <textarea className="form-control" rows="5" placeholder="Inserisci il testo del post"></textarea>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleModalClose}>
              Chiudi
            </Button>
            <Button variant="primary" onClick={handleModalClose}>
              Pubblica
            </Button>
          </Modal.Footer>
        </Modal>

        {/* POST CONTENT*/}
        <Card id="main-card" className="mt-3">
          <div
            className="position-absolute"
            style={{
              right: "20px",
              top: "20px",
            }}
          ></div>
          <Card.Body className="text-start pb-0">
            <Row className="align-items-center">
              <Col xs={2}>
                <img
                  src=/*mettere immagine */ "./360_F_575073408_glupjidkesdoYGsQJch2yKZS50oSNTMi.jpg"
                  alt=""
                  style={{
                    width: "60px",
                    height: "60px",

                    borderRadius: "50%",
                    border: "5px solid white",
                    objectFit: "cover",
                  }}
                />
              </Col>
              <Col xs={10}>
                <Row className="align-items-center">
                  <Col xs={9}>
                    <Col xs={12}>
                      <p id="pOfHome">nome utente</p>
                    </Col>
                    <Col xs={12}>
                      <p id="pOfHome">bio io io io io io io</p>
                    </Col>
                    <Col xs={12}>
                      <p id="pOfHome">times</p>
                    </Col>
                  </Col>
                  <Col xs={3}>
                    <Button className="seguiHomeBtn rounded-4 bg-light text-primary d-flex align-items-end border border-primary py-1 d-flex align-items-center">
                      <HiPlus className="fs-5 me-1" /> Segui
                    </Button>
                  </Col>
                </Row>
              </Col>
              <Col xs={12} className="my-3">
                <CardBody>
                  <Card.Text>
                    preparare un testo campione. È sopravvissuto non solo a più di cinque secoli, ma anche al passaggio
                    alla videoimpaginazione, pervenendoci sostanzialmente inalterato. Fu reso popolare, negli anni ’60,
                    con la diffusione dei fogli di caratteri trasferibili “Letraset”, che contenevano passaggi del Lorem
                    Ipsum, e più recentemente da software di impaginazione come Aldus PageMaker, che includeva versioni
                    del Lorem Ipsum.
                  </Card.Text>
                  <Card.Img src="./360_F_575073408_glupjidkesdoYGsQJch2yKZS50oSNTMi.jpg"></Card.Img>
                </CardBody>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        {/* POST CONTENT*/}
      </Col>
      {/*CENTRAL CONTENT*/}

      {/*RIGHTSIDE */}
      <Col xs={3}>
        <Card className="mt-3">
          <CardBody className="p-0">
            <ListGroup>
              <ListGroupItem>
                <ul>
                  <div className="d-flex justify-content-between align-items-center">
                    <h6>Linkedin Notizie </h6>
                    <BsInfoSquareFill />
                  </div>
                  <li>
                    <p id="pOfHome" className="paragraphBold">
                      {" "}
                      Quali confini tra vita e lavoro
                    </p>
                    <p id="pOfHome" className="paragraphGrey">
                      Notizie principali
                    </p>
                  </li>
                  <li>
                    <p id="pOfHome" className="paragraphBold">
                      Più sfide per la cybersicurezza
                    </p>
                    <p id="pOfHome" className="paragraphGrey">
                      5 giorni fa
                    </p>
                  </li>
                  <li>
                    <p id="pOfHome" className="paragraphBold">
                      {" "}
                      L'età dell'oro della discografia
                    </p>
                    <p id="pOfHome" className="paragraphGrey">
                      5 giorni fa
                    </p>
                  </li>
                  <li>
                    <p id="pOfHome" className="paragraphBold">
                      {" "}
                      Chi è il nuovo ceo di NTT Data Italia
                    </p>
                    <p id="pOfHome" className="paragraphGrey">
                      3 ore fa
                    </p>
                  </li>
                  <li>
                    <p id="pOfHome" className="paragraphBold">
                      {" "}
                      Lamborghini ritocca il logo
                    </p>
                    <p id="pOfHome" className="paragraphGrey">
                      1 giorno fa
                    </p>
                  </li>
                  <h6 className="m-3 ms-0">
                    Vedi altro <RiArrowDownSLine className="m-0" />
                  </h6>
                </ul>
              </ListGroupItem>
            </ListGroup>
          </CardBody>
        </Card>
        <div className="mt-3 position-sticky top-0 text-center">
          <Card>
            {" "}
            <Card.Img variant="top" src="./360_F_575073408_glupjidkesdoYGsQJch2yKZS50oSNTMi.jpg" />
          </Card>
          <div className="mt-3  text-center">
            <div className="d-flex flex-column ">
              <div className="me-1">
                <a className="mx-2 homeFooter text-secondary" href="#1">
                  {" "}
                  Informazioni
                </a>
                <a className="mx-2 homeFooter text-secondary" href="#1">
                  Accessibilità
                </a>
              </div>
              <div className="me-1">
                <a className="mx-2 homeFooter text-secondary" href="#1">
                  {" "}
                  Centro assistenza{" "}
                </a>
                <a className="mx-2 homeFooter text-secondary " href="#1">
                  Privacy e condizioni
                  <span className="text-black fs-5">
                    <RiArrowDropDownFill className="align-bottom" />
                  </span>
                </a>
              </div>
              <div className="me-1">
                <a className="mx-2 homeFooter text-secondary" href="#1">
                  Opzioni per gli annunci pubblicitari{" "}
                </a>
              </div>
              <div className="me-1">
                <a className="mx-2 homeFooter text-secondary" href="#1">
                  {" "}
                  Pubblicità{" "}
                </a>
                <a className="mx-2 homeFooter text-secondary " href="#1">
                  Servizi alle aziende
                  <span className="text-black fs-5">
                    <RiArrowDropDownFill className="align-bottom" />
                  </span>
                </a>
                <a className="mx-2 homeFooter text-secondary" href="#1">
                  Scarica l’app LinkedIn
                </a>
                <a className="mx-2 homeFooter text-secondary" href="#1">
                  Altro
                </a>
              </div>
            </div>
            <p id="pOfHome">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="loader__linkedin-logo"
                width="48"
                height="48"
                viewBox="0 0 190 48"
                style={{ marginRight: "4px" }}
              >
                <g>
                  <g>
                    <path
                      d="M58,27.22V41H51V28.88c0-3.7-2.07-5.24-4-5.24a5,5,0,0,0-5.14,4.85,4.34,4.34,0,0,0,0,.51V41H35V18h6.6v3.25h.09c.69-1.41,3.64-3.75,7.66-3.75S58,20.22,58,27.22ZM24,41h7V18H24ZM27.5,6.45a4.05,4.05,0,1,0,4.1,4.05,4,4,0,0,0-4-4ZM190,3.5v41a3.5,3.5,0,0,1-3.5,3.5h-41a3.5,3.5,0,0,1-3.5-3.5V3.5A3.5,3.5,0,0,1,145.5,0h41A3.5,3.5,0,0,1,190,3.5ZM156,18h-7V41h7Zm.6-7.5a4.1,4.1,0,1,0-4.15,4.05h.05a4,4,0,0,0,4.1-3.9ZM183,27.22c0-7-4.63-9.72-8.65-9.72s-7,2.34-7.66,3.75h-.09V18H160V41h7V29c0-3.69,2.51-5.33,4.95-5.33,2,0,4.05,1.54,4.05,5.24V41h7ZM8,7H0V41H21V34H8ZM108,29.77v2H91a1.33,1.33,0,0,0,.11.43c.58,1.93,2.67,3.56,5.75,3.56A6.3,6.3,0,0,0,102,33.52l5.1,3.18a12.72,12.72,0,0,1-10.45,4.8C89.94,41.5,84,37.42,84,29.59S90,17.5,96.44,17.5,108,21.81,108,29.77ZM101,27c0-2.4-1.56-4.38-4.75-4.38-3,0-5.09,2-5.25,4.38ZM85.26,18H76.68l-7.54,9.37H69V7H62V41h7V30h.14l7.72,11h8.77L76.2,28.43ZM128,7h7V41h-6.6V38h-.09c-.88,1.52-3.24,3.49-7.4,3.49-5,0-10.91-3.63-10.91-12,0-7.53,5.1-11.95,10.82-11.95a9.55,9.55,0,0,1,7.09,3H128Zm.3,22.49a5.74,5.74,0,0,0-5.59-5.89h-.15A5.54,5.54,0,0,0,116.89,29c0,.15,0,.29,0,.44a5.61,5.61,0,0,0,5.26,5.94h.4A5.83,5.83,0,0,0,128.3,29.49Z"
                      fill="#0A66C2"
                    ></path>
                  </g>
                </g>
              </svg>
              LinkedIn Corporation © 2024
            </p>
          </div>
        </div>
      </Col>
      {/*RIGHTSIDE */}
    </>
  );
};

export default Home;
