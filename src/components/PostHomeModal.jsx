import { Modal } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchPost, addPost, modPost, deletePost } from "../redux/actions/fetchUser";
import { Button } from "react-bootstrap";
const PostHomeModal = ({ showModal, handleModal, post }) => {
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
    if (post) {
      await dispatch(modPost(textArea, post._id));
    } else {
      await dispatch(addPost(textArea));
    }
    handleModal();
    dispatch(fetchPost());
    settextArea({
      ...textArea,
      text: "",
    });
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
        <textarea value={textArea.text} onChange={handleChange} className="form-control" rows="5" placeholder="Inserisci il testo del post"></textarea>
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
