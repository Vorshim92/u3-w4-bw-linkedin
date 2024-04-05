import Card from "react-bootstrap/Card";

const Comment = (comment) => {
  return (
    <div className="d-flex m-4">
      <img className="rounded-circle m-3 mt-0" style={{ width: "30px", height: "30px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLk6TjUtaSQBSnFt5KBiX27qmVQw2k_W5MD8zNNOzGPw&s" alt="avatar" />
      <Card>
        <Card.Body>
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <p>Nome utente</p>
              <p>Sesso persona - 3° e oltre</p>
            </div>
            <p>orario commento</p>
          </div>
          <p className="text-secondary fs-5">professione utente</p>

          <p>{comment.comment}</p>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Comment;
