import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { modUser, fetchUser } from "../../redux/actions/fetchUser";
const UserInfoModal = ({ showUsr, toggleUsrModal }) => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.userData);

  const [formData, setFormData] = useState({
    name: userData.name,
    surname: userData.surname,
    title: userData.title,
    area: userData.area,
    bio: userData.bio,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(modUser(formData));
    toggleUsrModal();
    dispatch(fetchUser());
  };

  return (
    <>
      <Modal show={showUsr} onHide={toggleUsrModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modifica le informazioni Utente</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <h2>Modulo Informazioni</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="name">
                <Form.Label>Nome:</Form.Label>
                <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
              </Form.Group>

              <Form.Group controlId="surname">
                <Form.Label>Cognome:</Form.Label>
                <Form.Control type="text" name="surname" value={formData.surname} onChange={handleChange} required />
              </Form.Group>

              <Form.Group controlId="title">
                <Form.Label>Titolo:</Form.Label>
                <Form.Control type="text" name="title" value={formData.title} onChange={handleChange} required />
              </Form.Group>

              <Form.Group controlId="name">
                <Form.Label>Location:</Form.Label>
                <Form.Control type="text" name="area" value={formData.area} onChange={handleChange} />
              </Form.Group>

              <Form.Group controlId="bio">
                <Form.Label>Bio:</Form.Label>
                <Form.Control as="textarea" rows={3} name="bio" value={formData.bio} onChange={handleChange} />
              </Form.Group>

              <Button variant="primary" type="submit" className="mt-3">
                Invia
              </Button>
            </Form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggleUsrModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UserInfoModal;
