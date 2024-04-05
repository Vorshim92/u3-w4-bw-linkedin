import { Modal } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchPost, addPost, modPost, deletePost } from "../redux/actions/fetchUser";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
const PostHomeModal = ({ showModal, handleModal, post }) => {
  const dispatch = useDispatch();
  const [textArea, settextArea] = useState({
    text: "",
  });
  const [img, setImg] = useState({
    image: null,
  });
  const handleChange = (e) => {
    if (e.target.name === "image") {
      setImg({
        image: e.target.files[0],
      });
    } else {
      settextArea({
        ...textArea,
        text: e.target.value,
      });
    }
  };

  const handlePostSubmit = async () => {
    if (post) {
      await dispatch(modPost(textArea, post._id, img));
    } else {
      await dispatch(addPost(textArea, img));
    }
    handleModal();
    dispatch(fetchPost());
    settextArea({
      ...textArea,
      text: "",
    });
    setImg({ image: null });
  };
  useEffect(() => {
    if (post) {
      settextArea({
        ...textArea,
        text: post.text,
      });
    }
  }, [post]);

  const dispatchDelete = async () => {
    await dispatch(deletePost(post._id));
    dispatch(fetchPost());
  };

  return (
    <Modal show={showModal} onHide={handleModal}>
      <Modal.Header closeButton>
        <Modal.Title>Avvia un post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group controlId="text">
          <Form.Label>Testo del post:</Form.Label>
          <Form.Control as="textarea" rows={5} value={textArea.text} onChange={handleChange} placeholder="Inserisci il testo del post" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Immagine:</Form.Label>
          <Form.Control type="file" name="image" onChange={handleChange} />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        {post && (
          <Button variant="danger" type="click" onClick={dispatchDelete}>
            CANCELLA
          </Button>
        )}
        <Button variant="secondary" onClick={handleModal}>
          Chiudi
        </Button>
        <Button variant="primary" onClick={handlePostSubmit}>
          Pubblica
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default PostHomeModal;
