import React from "react";
import { useEffect, useState } from "react";
import { Container, Button, Card, Col, Dropdown, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../redux/actions/fetchUser";

const User = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.userData);

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  if (!userData) {
    // Se userData è ancora undefined
    return <div>Loading...</div>;
  }

  return (
    <>
      <Card id="main-card" className="mt-3">
        <Card.Img variant="top" src="userbackground.svg" alt="User Background" />

        <Card.Body style={{ position: "relative" }}>
          <img
            src={userData.image}
            alt=""
            style={{
              width: "150px",
              height: "150px",
              position: "absolute",
              top: "0%",
              left: "3%",
              transform: "translateY( -70%)",
              borderRadius: "50%",
              border: "5px solid white",
            }}
          />
          <Row className="p-3">
            <Col xs={12} className="mt-5">
              <Row>
                <Col xs={12} lg={3}>
                  Stefano Scalfari
                </Col>
                <Col xs={12} lg={3}>
                  <div className="verify-now">
                    <img src="svgexport-20.svg" alt="" style={{ width: "16px", height: "16px", marginRight: "5px" }} />
                    <span style={{ display: "inline-block" }}>Verifica ora</span>
                  </div>
                </Col>
                <Col className="d-none d-lg-block"></Col>
                <Col xs={12} lg={3}>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoctrKT2Zx2V8heZqGs3-_uaYPn7evbEHw82kbMDld-Q&s" alt="" style={{ width: "25px", height: "25px" }} />
                  EPICODE
                </Col>
                <Col xs={12}>Junior Front-End Developer</Col>
                <Col xs={12}>Roma - Informazioni di contatto</Col>
                <Col xs={12}>22 collegamenti</Col>
              </Row>
              <Row className="gap-3 my-3">
                <Button id="btn1" className="col-2">
                  Disponibile per
                </Button>
                <Button id="btn2" className="col-3">
                  Aggiungi sezione del profilo
                </Button>
                <Button id="btn3" className="col-1">
                  Altro
                </Button>
              </Row>
              <Row>
                <Col xs={12} lg={8} id="profile-available">
                  <Card.Link href="#" style={{ textDecoration: "none" }}>
                    <p className="text-black fw-bold">Disponibile a lavorare</p>
                    <p className="text-black">Ruoli di FullStack Web Developer</p>
                    <p>Mostra dettagli</p>
                  </Card.Link>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <Card className="mt-2 p-3">
        <Card.Body>
          <Card.Title>Consigliato per te</Card.Title>
          <Card.Text>Solo per te</Card.Text>
          <Col className="border solid rounded p-4">
            <Row>
              <Col xs={2}>
                <Card.Img src="logo192.png" alt="" />
              </Col>
              <Col>
                <Card.Title>TROVA PIÙ CLIENTI PER I TUOI SERVIZI</Card.Title>
                <Card.Text>Mostra i servizi in modo prominente sul tuo profilo e in post</Card.Text>
              </Col>
            </Row>
            <Button id="btn4" className="w-50">
              PROVA PREMIUM PER 0 EUR
            </Button>
          </Col>
        </Card.Body>
      </Card>

      {/* ---> inizio card esperienze<--- */}

      <Card className="rounded-3 my-3 mt-2">
        <Card.Body className="p-3">
          <Card.Title
            className="d-flex justify-content-between
          "
          >
            <p>Esperienze</p>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
              </svg>
            </div>
          </Card.Title>

          <div className="d-flex">
            <img
              className=" mx-2"
              src="https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="pizza"
              style={{ width: "45px", height: "45px" }}
            />

            <div className="d-flex flex-column">
              <p className="sidebarTitle m-0">Scalda pizzette</p>
              <p className="m-0">Dipendente</p>
              <p className="dataLavoro"> gen 1820 - agosto 1952 - Prussia</p>
            </div>
          </div>

          {/* div di divisione con border */}
          <div className="border-top border-1 "></div>
          {/* div di divisione con border */}

          <div className="d-flex my-4">
            <img
              className=" mx-2"
              src="https://images.pexels.com/photos/17942737/pexels-photo-17942737/free-photo-of-esercito-britannico-gurkhas.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="lanciatore"
              style={{ width: "45px", height: "45px" }}
            />

            <div className="d-flex flex-column">
              <p className="sidebarTitle m-0">Lanciatore di telefoni</p>
              <p className="m-0">Autonomo</p>
              <p className="dataLavoro"> gen 1983 - Presente - Finlandia</p>
            </div>
          </div>
        </Card.Body>
      </Card>

      {/* --->fine card esperienze<--- */}

      {/* --->Inizio card Licenze e certificazioni<--- */}
      <Card className="rounded-3 my-3 mt-2">
        <Card.Body className="p-3">
          <Card.Title
            className="d-flex justify-content-between
          "
          >
            <p>Licenze e certificazioni</p>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
              </svg>
            </div>
          </Card.Title>

          <div className="d-flex">
            <img
              className=" mx-2"
              src="https://images.pexels.com/photos/374918/pexels-photo-374918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="numbers"
              style={{ width: "45px", height: "45px" }}
            />

            <div className="d-flex flex-column">
              <p className="sidebarTitle m-0">Licenza di uccidere</p>
              <p className="m-0">Autodidatta</p>
              <p className="dataLavoro"> gen 1523 - feb 1952 - Russia</p>
            </div>
          </div>
        </Card.Body>
      </Card>

      <Card className="rounded-3 mt-2">
        <Card.Body className="p-3">
          <Card.Title>
            <p>Formazione</p>
          </Card.Title>

          <div className="d-flex">
            <img
              className="rounded-circle mx-2"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoctrKT2Zx2V8heZqGs3-_uaYPn7evbEHw82kbMDld-Q&s"
              alt="avatar"
              style={{ width: "45px", height: "45px" }}
            />

            <div className="d-flex flex-column">
              <p className="sidebarTitle m-0">EPICODE</p>
              <p>Progettazione pagine web, contenuti digitali/multimediali e risorse informativeProgettazione pagine web, contenuti digitali/multimediali e risorse informative</p>
              <span className="sidebarSpan">gen 2024 - lug 2024</span>
            </div>
          </div>
        </Card.Body>

        {/* div di bordo */}
        <div className="border-top border-1 "></div>
        {/* fine div di bordo */}
      </Card>
    </>
  );
};
export default User;
