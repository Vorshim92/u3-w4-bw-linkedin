import React from "react";
import { useEffect, useState } from "react";
import { Button, Card, Col, Dropdown, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../Redux/actions/fetchUser";
import { Arrow90degRight, Bell, BellFill, Check2, Download, InfoSquareFill, PencilFill, PersonPlusFill, PlusLg, VolumeUpFill } from "react-bootstrap-icons";

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
      <Card className="mt-5">
        <Card.Img
          variant="top"
          src="https://media.licdn.com/dms/image/C4D16AQHOVtvrNfDs2A/profile-displaybackgroundimage-shrink_350_1400/0/1583686617387?e=1705536000&v=beta&t=C8TwrUsaDXQHR9N5wECRUYkWfrycPDjtLEXMQH-ite4"
          style={{ height: "200px", objectFit: "cover" }}
        />
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
          <Bell className="fs-4 d-flex ms-auto me-2 mb-2" />

          <Row>
            <Col>
              <div className="d-flex align-items-end">
                <Card.Title className="ms-0 mb-0 fs-4">
                  {userData.name} {userData.surname}{" "}
                </Card.Title>
                <p className="text-secondary ms-2 mb-0">
                  <VolumeUpFill className="fs-3" /> (He/him) • 3°
                </p>
              </div>
              <div className="ms-1 mt-1">
                <Card.Text className="mb-0">{userData.title}</Card.Text>
                <Card.Text className="text-secondary mt-2 mb-0">{userData.area}</Card.Text>
                <Card.Text className=" mb-1">
                  <a href="a">Informazioni di contatto</a>
                </Card.Text>
                <Card.Text className="text-secondary">Più di 500 collegamenti</Card.Text>
                <Button variant="primary" className="rounded-pill">
                  Messaggio
                </Button>
                <Button variant="outline-primary" className="rounded-pill ms-2">
                  <PlusLg className="mb-1 me-1" />
                  Segui
                </Button>
                <style>{`.dropdown-toggle::after {display: none; }`}</style>
                <Dropdown className=" ms-2 d-inline-block">
                  <Dropdown.Toggle variant="outline-secondary" className="rounded-pill">
                    <span className="d-none d-sm-inline-block">Altro</span>
                    <span className="d-sm-none">•••</span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="">
                      <Arrow90degRight className="me-3" />
                      Invia il profilo in un messaggio
                    </Dropdown.Item>
                    <Dropdown.Item href="">
                      <Download className="me-3" />
                      Salva come PDF
                    </Dropdown.Item>
                    <Dropdown.Item href="">
                      <PersonPlusFill className="me-3" />
                      Collegati
                    </Dropdown.Item>
                    <Dropdown.Item href="">
                      <InfoSquareFill className="me-3" />
                      Informazioni su questo profilo
                    </Dropdown.Item>
                    <Dropdown.Item href="">
                      <PencilFill className="me-3" />
                      Modifica
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </Col>
            <Col className="d-none d-lg-block" lg={4}></Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};
export default User;
