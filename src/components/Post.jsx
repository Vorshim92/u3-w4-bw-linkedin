import { Button, Card, Col, Row, ListGroup, CardBody, ListGroupItem, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";

import { HiPlus } from "react-icons/hi";
import PostHomeModal from "./PostHomeModal";
import { useState } from "react";
import { BsHandThumbsUp } from "react-icons/bs";
import { BsChatText } from "react-icons/bs";
import { PiArrowsCounterClockwise } from "react-icons/pi";
import { IoIosSend } from "react-icons/io";
import Comment from "./Comment";
import Collapse from "react-bootstrap/Collapse";

const Post = ({ post }) => {
  const userData = useSelector((state) => state.user.userData);
  const [open, setOpen] = useState(false);
  const commentsData = useSelector((state) => state.comments.commentsData);
  const postComments = commentsData.filter((comment) => comment._id === post._id);
  const [showPostMod, setShowPostMod] = useState(false);
  const toggleModalPost = () => {
    setShowPostMod(!showPostMod);
  };

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
                    <p id="pOfHome">{post.user.title}</p>
                  </Col>
                  <Col xs={12}>
                    <p id="pOfHome">Creato il {post.updatedAt.slice(0, 10)}</p>
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
                {userData._id === post.user._id && (
                  <button id="btnModal2" onClick={toggleModalPost}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                      <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                    </svg>
                  </button>
                )}
              </CardBody>
            </Col>
            <Col xs={12} className="my-3">
              {post.image && <Card.Img src={post.image}></Card.Img>}
            </Col>
          </Row>
          <Card.Body className="p-0 border-top ">
            <Col xs={12} className="m-1 d-flex justify-content-between align-items-center">
              <Button className="homeBtnPost">
                <BsHandThumbsUp className="my-1 mx-2 fs-4" />
                Consiglia
              </Button>

              <Button className="homeBtnPost " onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open}>
                <BsChatText className="my-1 mx-2 fs-4" />
                Commenta
              </Button>

              <Button className="homeBtnPost">
                <PiArrowsCounterClockwise className="my-1 mx-2 fs-4" />
                Diffondi il post
              </Button>

              <Button className="homeBtnPost">
                <IoIosSend className="my-1 mx-2 fs-4" />
                Invia
              </Button>
            </Col>
          </Card.Body>

          <Collapse in={open}>
            <div id="example-collapse-text">
              <Comment />
            </div>
          </Collapse>
        </Card.Body>
      </Card>
      <PostHomeModal showModal={showPostMod} handleModal={toggleModalPost} post={post}></PostHomeModal>
    </>
  );
};
export default Post;
