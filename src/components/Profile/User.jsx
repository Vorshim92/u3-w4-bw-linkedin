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
