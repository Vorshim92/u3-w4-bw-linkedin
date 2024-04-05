import Card from "react-bootstrap/Card";

import { useDispatch, useSelector } from "react-redux";

const Comment = ({ comment }) => {
  const profiles = useSelector((state) => state.users.usersData);
  const commentAuthor = profiles.filter((profile) => comment.author === profile.username);
  console.log(commentAuthor);
  console.log(comment);
  return (
    <div className="d-flex m-4">
      <img className="rounded-circle m-3 mt-0" style={{ width: "30px", height: "30px" }} src={commentAuthor[0].image} alt="avatar" />
      <Card>
        <Card.Body>
          <div className="d-flex justify-content-between">
            <div className="">
              <p>{commentAuthor[0].name}</p>
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
