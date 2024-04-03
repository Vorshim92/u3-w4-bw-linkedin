import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { ModUserExp } from "../../redux/actions/fetchUser";
const ExpUserModal = ({ showExp, toggleExpModal }) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(ModUserExp(formData));
    console.log(formData);
  };
  return (
    <>
      <Modal show={showExp} onHide={toggleExpModal}>
        <Modal.Header closeButton>
          <Modal.Title>Mofidica Immagine Profilo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <h2>Modulo Informazioni</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="role">Ruolo:</label>
              <br />
              <input type="text" id="role" name="role" value={formData.role} onChange={handleChange} required />
              <br />

              <label htmlFor="company">Compagnia:</label>
              <br />
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
              />
              <br />

              <label htmlFor="startDate">Data di Inizio:</label>
              <br />
              <input
                type="date"
                id="startDate"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                required
              />
              <br />

              <label htmlFor="endDate">Data di Fine:</label>
              <br />
              <input type="date" id="endDate" name="endDate" value={formData.endDate} onChange={handleChange} />
              <br />

              <label htmlFor="description">Descrizione:</label>
              <br />
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
              ></textarea>
              <br />

              <label htmlFor="area">Area:</label>
              <br />
              <input type="text" id="area" name="area" value={formData.area} onChange={handleChange} />
              <br />
              <Button variant="primary" type="submit">
                Invia
              </Button>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggleExpModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ExpUserModal;
