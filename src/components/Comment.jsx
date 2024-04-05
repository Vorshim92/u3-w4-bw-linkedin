import Card from "react-bootstrap/Card";

import { useSelector } from "react-redux";
import { useEffect } from "react";

const Comment = ({ comment }) => {
  const profiles = useSelector((state) => state.users.usersData);
  const commentAuthor = profiles.filter((profile) => comment.author === profile.username);
  console.log("COMMENT AUTHOR", commentAuthor);
  console.log("SINGLE COMMENT", comment);

  return (
    <>
      {commentAuthor && commentAuthor.length > 0 && (
        <div className="d-flex m-4">
          <img className="rounded-circle m-3 mt-0" style={{ width: "30px", height: "30px" }} src={commentAuthor[0].image} alt="avatar" />
          <Card>
            <Card.Body>
              <div className="d-flex justify-content-between">
                <div className="">
                  <p>
                    {commentAuthor[0].name} {commentAuthor[0].surname}
                  </p>
                  <p className="text-secondary">{commentAuthor[0].title}</p>
                </div>
                <div>
                  <p> {comment.updatedAt.slice(0, 10)}</p>
                </div>
              </div>
              <p>{comment.comment}</p>
            </Card.Body>
          </Card>
        </div>
      )}
    </>
  );
};

export default Comment;
