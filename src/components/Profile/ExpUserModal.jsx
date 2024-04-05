import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { AddUserExp, ModUserExp, DelUserExp, fetchUserExp } from "../../redux/actions/fetchUser";
const ExpUserModal = ({ showExp, toggleExpModal, expID }) => {
  const dispatch = useDispatch();
  const userExp = useSelector((state) => state.exp.expData);

  const [formData, setFormData] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
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
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (expID) {
      await dispatch(ModUserExp(formData, expID, img));
    } else {
      await dispatch(AddUserExp(formData, img));
    }
    setImg({ image: null });
    toggleExpModal();
    dispatch(fetchUserExp()).then(() => {});
  };

  useEffect(() => {
    if (expID) {
      const expFinder = userExp.find((experience) => experience._id === expID);
      setFormData({
        role: expFinder.role,
        company: expFinder.company,
        startDate: expFinder.startDate.slice(0, 10),
        endDate: expFinder.endDate.slice(0, 10),
        description: expFinder.description,
        area: expFinder.area,
      });
    }
  }, [expID, userExp]);

  const dispatchDelete = async (e) => {
    await dispatch(DelUserExp(expID));
    toggleExpModal();
    dispatch(fetchUserExp()).then(() => {});
  };

  return (
    <>
      <Modal show={showExp} onHide={toggleExpModal}>
        <Modal.Header closeButton>
          <Modal.Title>{expID ? "Modifica l'esperienza" : "Aggiungi esperienza"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <h2>Modulo Informazioni</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="role">
                <Form.Label>Ruolo:</Form.Label>
                <Form.Control type="text" name="role" value={formData.role} onChange={handleChange} required />
              </Form.Group>

              <Form.Group controlId="company">
                <Form.Label>Compagnia:</Form.Label>
                <Form.Control type="text" name="company" value={formData.company} onChange={handleChange} required />
              </Form.Group>

              <Form.Group controlId="startDate">
                <Form.Label>Data di Inizio:</Form.Label>
                <Form.Control
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="endDate">
                <Form.Label>Data di Fine:</Form.Label>
                <Form.Control type="date" name="endDate" value={formData.endDate} onChange={handleChange} />
              </Form.Group>

              <Form.Group controlId="description">
                <Form.Label>Descrizione:</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="area">
                <Form.Label>Area:</Form.Label>
                <Form.Control type="text" name="area" value={formData.area} onChange={handleChange} />
              </Form.Group>

              <Form.Group controlId="image">
                <Form.Label>Immagine:</Form.Label>
                <Form.Control type="file" name="image" onChange={handleChange} />
              </Form.Group>

              <Button variant="primary" type="submit" className="mt-3">
                Invia
              </Button>
            </Form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          {expID && (
            <Button variant="danger" type="click" onClick={dispatchDelete}>
              CANCELLA
            </Button>
          )}
          <Button variant="secondary" onClick={toggleExpModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ExpUserModal;
