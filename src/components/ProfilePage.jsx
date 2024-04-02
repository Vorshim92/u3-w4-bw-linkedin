import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import User from "./Profile/User";
const ProfilePage = () => {
  return (
    <>
      <Col xs={9}>
        <User />
      </Col>
      {/* Componente SIDEBAR RIGHT */}
    </>
  );
};
export default ProfilePage;
