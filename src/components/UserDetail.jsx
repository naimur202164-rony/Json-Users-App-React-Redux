import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import { setSelectedUsers } from "../redux/action/userAction";
export default function UserDetail() {
  const { usersId } = useParams();
  const usersSelected=useSelector((state)=>state.selectedUsers);
  const dispatch=useDispatch()
  console.log(usersSelected);
  const fetchUser = async () => {
    const respone = await axios
      .get(`https://jsonplaceholder.typicode.com/users/${usersId}`)
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
      {/* {usersId} */}
      <Container>
        <Row>
          <Col>
            <Card>
              <Card.Header>{usersSelected.name}</Card.Header>
              <Card.Body>
                <Card.Title>{usersSelected.username}</Card.Title>
                <Card.Title>{usersSelected.id}</Card.Title>
                <Card.Text>
                 {usersSelected.email}
                </Card.Text>
                <Button variant="primary">Go To post</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
