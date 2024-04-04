import { Button, Card, Col, Row, ListGroup, CardBody, ListGroupItem, Modal } from "react-bootstrap";
import { HiPlus } from "react-icons/hi";

const Post = ({ post }) => {
  console.log(post);
  return (
    <>
      <Card id="main-card" className="mt-3">
        <Card.Body className="text-start pb-0">
          <Row className="align-items-center">
            <Col xs={2}>
              <img
                src={post.user.image}
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
                    <p id="pOfHome">{post.username}</p>
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
              <CardBody className="d-flex align-items-center">
                <Card.Text className="m-0">{post.text}</Card.Text>
                {/* post.user._id === user._id // SHORT CIRCUIT PER IL BUTTON MODIFICA DA FARE */}
                <button id="btnModal2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                  </svg>
                </button>
              </CardBody>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};
export default Post;