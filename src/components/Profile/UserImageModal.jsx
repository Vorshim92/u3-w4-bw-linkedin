import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { ChangeImageUser } from "../../redux/actions/fetchUser";
import { useDispatch } from "react-redux";
const UserImage = ({ showImg, toggleModalImage }) => {
  const dispatch = useDispatch();
  const [img, setImg] = useState({
    image: null,
  });

  const handleChange = (e) => {
    setImg({
      image: e.target.files[0],
    });
  };
  const handleUpload = async () => {
    dispatch(ChangeImageUser(img));
  };

  return (
    <>
      <Modal show={showImg} onHide={toggleModalImage}>
        <Modal.Header closeButton>
          <Modal.Title>Modifica Immagine Profilo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label htmlFor="image">Immagine:</label>
          <br />
          <input type="file" id="image" name="image" onChange={handleChange} />
          <br />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggleModalImage}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpload}>
            Carica immagine
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UserImage;
