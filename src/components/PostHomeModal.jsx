import { Modal } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchPost, addPost } from "../redux/actions/fetchUser";
import { Button } from "react-bootstrap";
const PostHomeModal = ({ showModal, handleModal }) => {
  const dispatch = useDispatch();
  const [textArea, settextArea] = useState({
    text: "",
  });

  const handleChange = (e) => {
    settextArea({
      ...textArea,
      text: e.target.value,
    });
  };

  const handlePostSubmit = async () => {
    await dispatch(addPost(textArea));
    handleModal();
    dispatch(fetchPost());
    settextArea({
      ...textArea,
      text: "",
    });
  };

  return (
    <Modal show={showModal} onHide={handleModal}>
      <Modal.Header closeButton>
        <Modal.Title>Avvia un post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <textarea value={textArea.text} onChange={handleChange} className="form-control" rows="5" placeholder="Inserisci il testo del post"></textarea>
      </Modal.Body>
      <Modal.Footer>
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
