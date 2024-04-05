import Card from "react-bootstrap/Card";
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { deleteComment, fetchComments } from "../redux/actions/fetchUser";
import { useEffect } from "react";
import { useState } from "react";

const Comment = ({ comment }) => {
  const profiles = useSelector((state) => state.users.usersData);
  const dispatch = useDispatch();
  const [commentAuthor, setAuthor] = useState([]);
  const handleDelete = async (e) => {
    await dispatch(deleteComment(comment._id));
    dispatch(fetchComments()).then(() => {});
  };

  useEffect(() => {
    const user = profiles.filter((profile) => comment.author === profile.username);
    if (user !== undefined) {
      setAuthor(user[0]);
    }
  }, [comment]);

  return (
    <>
      {commentAuthor && (
        <div className="d-flex m-4">
          <img className="rounded-circle m-3 mt-0" style={{ width: "30px", height: "30px" }} src={commentAuthor.image} alt="avatar" />
          <Card className="w-75 bg-body-tertiary border-0 rounded-3">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <p className="m-0">
                    {commentAuthor.name} {commentAuthor.surname}
                  </p>
                  <p className="text-body-tertiary mb-3" style={{ fontSize: "12px" }}>
                    {commentAuthor.title}
                  </p>
                </div>
                <div>
                  <p className="text-body-tertiary font-monospace" style={{ fontSize: "15px" }}>
                    {comment.updatedAt.slice(0, 10)} - {comment.updatedAt.slice(11, 16)}
                  </p>
                </div>
              </div>
              <p>
                {comment.comment}{" "}
                <FaTrash
                  onClick={handleDelete}
                  style={{
                    border: "none",
                    cursor: "pointer",

                    borderRadius: "50%",

                    marginLeft: "15%",
                  }}
                />
              </p>
            </Card.Body>
          </Card>
        </div>
      )}
    </>
  );
};

export default Comment;
