import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
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
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Nome:</label>
              <br />
              <input type="text" id="role" name="name" value={formData.name} onChange={handleChange} required />
              <br />

              <label htmlFor="surname">Cognome:</label>
              <br />
              <input type="text" id="company" name="surname" value={formData.surname} onChange={handleChange} required />
              <br />

              <label htmlFor="title">Titolo:</label>
              <br />
              <input type="text" id="company" name="title" value={formData.title} onChange={handleChange} required />
              <br />

              <label htmlFor="area">Location:</label>
              <br />
              <input type="text" id="area" name="area" value={formData.area} onChange={handleChange} />
              <br />

              <label htmlFor="bio">Bio:</label>
              <br />
              <textarea id="description" name="bio" value={formData.bio} onChange={handleChange}></textarea>
              <br />

              <Button variant="primary" type="submit" className="mt-3">
                Invia
              </Button>
            </form>
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
