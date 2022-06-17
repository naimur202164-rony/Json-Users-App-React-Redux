import axios from "axios";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import { setSelectedUsers } from "../redux/action/userAction";
import Header from "./Header";
export default function UserDetail() {
  const { usersId } = useParams();
  const usersSelected=useSelector((state)=>state.selectedUsers);
  const dispatch=useDispatch()
  console.log(usersSelected);
  const fetchUser = async () => {
    const respone = await axios
      .get(`https://jsonplaceholder.typicode.com/posts/${usersId}`)
      .catch((err) => {
        console.log(err);
      });
      dispatch(setSelectedUsers(respone.data))
    const { name, id, email, username } = respone.data;
  };
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      <Header/>
      {/* {usersId} */}
      <Container>
        <Row>
          <Col>
            <Card>
              <Card.Header>{usersSelected.title}</Card.Header>
              <Card.Body>
                <Card.Title>{usersSelected.body}</Card.Title>
                <Card.Title>{usersSelected.id}</Card.Title>
                <Card.Text>
                 {usersSelected.email}
                </Card.Text>
                <Button variant="info ">
                <Link to={`/comments/${usersSelected.id}`}>comments</Link>
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
