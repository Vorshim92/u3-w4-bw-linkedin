import React from "react";
import { useEffect, useState } from "react";
import { Container, Button, Card, Col, Dropdown, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../Redux/actions/fetchUser";

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
            alt="image-profile"
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
          <Row>
            <Col xs={12} className="mt-5">
              <Row>
                <Col>Stefano Scalfari</Col>
                <Col>Verifica ora</Col>
                <Col>EPICODE</Col>
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
                <Col xs={8} id="profile-available">
                  <Card.Link href="#">
                    <p>Disponibile a lavorare </p>
                    <p>Ruoli di FullStack Developer</p>
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
    </>
  );
};
export default User;
