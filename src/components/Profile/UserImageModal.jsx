import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { ChangeImageUser, fetchUser } from "../../redux/actions/fetchUser";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
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
    await dispatch(ChangeImageUser(img));
    setImg({ image: null });
    toggleModalImage();
    dispatch(fetchUser());
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

          <Button variant="primary" onClick={() => handleUpload()}>
            Carica immagine
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UserImage;
