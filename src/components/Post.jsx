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
              <CardBody>
                <Card.Text>{post.text}</Card.Text>
              </CardBody>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};
export default Post;
