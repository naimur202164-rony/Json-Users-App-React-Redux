import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "./Header";
import axios from "axios";
import { setComments } from "../redux/action/userAction";
import { Row, Col, Card, Button, Container } from "react-bootstrap";
function Comments() {
  const commentss = useSelector((state) => state.allCommnets.comments);
  const dispatch = useDispatch();
  // console.log(comments)
  const fetchUser = async () => {
    const respone = await axios
      .get(`http://localhost:5000/comments`)
      .catch((err) => {
        console.log(err);
      });
    dispatch(setComments(respone.data));
  };
  // console.log(commentss);
  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <div>
      <Header />
      <Container>
        <Row>
          {commentss.map((commet) => (
            <Col className="my-4">
              <Card style={{ width: "18rem", height: "auto" }}>
                <Card.Body>
                  <Card.Title>
                    <h6>Name: {commet.name}</h6>{" "}
                  </Card.Title>
                  <Card.Text>
                    <p>{commet.body1}</p>
                    <p>{commet.body.slice(5, 80)}</p>
                  </Card.Text>
                  <Button variant="info">Details</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Comments;
