import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import User from "./Profile/User";
import SidebarRight from "./SidebarRight";
const ProfilePage = () => {
  return (
    <>
      <Col xs={12} lg={9}>
        <User />
      </Col>
      <SidebarRight />
    </>
  );
};
export default ProfilePage;
