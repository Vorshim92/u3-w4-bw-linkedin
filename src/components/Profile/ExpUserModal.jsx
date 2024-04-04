import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
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
        startDate: expFinder.startDate,
        endDate: expFinder.endDate,
        description: expFinder.description,
        area: expFinder.area,
      });
    }
  }, [expID, userExp]);

  const dispatchDelete = async (e) => {
    dispatch(DelUserExp(expID));
    toggleExpModal();
    dispatch(fetchUserExp()).then(() => {
      console.log("fetchUserExp completato dopo DelUserExp");
    });
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
            <form onSubmit={handleSubmit}>
              <label htmlFor="role">Ruolo:</label>
              <br />
              <input type="text" id="role" name="role" value={formData.role} onChange={handleChange} required />
              <br />

              <label htmlFor="company">Compagnia:</label>
              <br />
              <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} required />
              <br />

              <label htmlFor="startDate">Data di Inizio:</label>
              <br />
              <input type="date" id="startDate" name="startDate" value={formData.startDate} onChange={handleChange} required />
              <br />

              <label htmlFor="endDate">Data di Fine:</label>
              <br />
              <input type="date" id="endDate" name="endDate" value={formData.endDate} onChange={handleChange} />
              <br />

              <label htmlFor="description">Descrizione:</label>
              <br />
              <textarea id="description" name="description" value={formData.description} onChange={handleChange}></textarea>
              <br />

              <label htmlFor="area">Area:</label>
              <br />
              <input type="text" id="area" name="area" value={formData.area} onChange={handleChange} />
              <br />
              <label htmlFor="image">Immagine:</label>
              <br />
              <input type="file" id="image" name="image" onChange={handleChange} />
              <br />
              <Button variant="primary" type="submit" className="mt-3">
                Invia
              </Button>
            </form>
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
