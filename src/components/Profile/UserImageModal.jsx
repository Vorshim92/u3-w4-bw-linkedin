import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const UserImage = ({ show, toggleOffcanvas }) => {
  const [imageUrl, setImageUrl] = useState("");

  const handleUrlChange = (event) => {
    setImageUrl(event.target.value);
  };

  const handleUpload = async () => {
    if (!imageUrl) {
      alert("Inserisci l'URL dell'immagine");
      return;
    }

    const confimerd = window.confirm("Sei sicuro di voler modificare l'immagine di profilo?");
    if (!confimerd) {
      return;
    }

    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/profile/", {
        method: "PUT",
        body: JSON.stringify({ image: imageUrl }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBiZDNmN2EyODFkODAwMTlhM2VjNjgiLCJpYXQiOjE3MTIwNTExOTEsImV4cCI6MTcxMzI2MDc5MX0.gzdsFyJ3HO53BmeOvhHxOvkFmtHv5h-YAhze63vArYo`,
        },
      });

      if (!response.ok) {
        throw new Error("Errore durante il caricamento dell'immagine");
      }

      console.log("Immagine caricata con successo");
      window.location.reload();
    } catch (error) {
      console.error("Errore durante il caricamento dell'immagine:", error.message);
    }
  };

  return (
    <>
      <Modal show={show} onHide={toggleOffcanvas}>
        <Modal.Header closeButton>
          <Modal.Title>Mofidica Immagine Profilo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            placeholder="Inserisci URL dell'immagine"
            onChange={handleUrlChange}
            value={imageUrl} // Imposta il valore dell'input sull'URL dell'immagine
            style={{ width: "100%" }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggleOffcanvas}>
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
