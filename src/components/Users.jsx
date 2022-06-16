import React, { useEffect } from "react";
import Header from "./Header";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { setUsers } from "../redux/action/userAction";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Users() {
  const userss = useSelector((state) => state.allUsers.users);
  const dispatch = useDispatch();

  const fetchUsers = async () => {
    const response = await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setUsers(response.data));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // console.log(userss);
  return (
    <>
      <Header />
      <Container>
        <Row>
          {userss.map((users) => (
            <Col className="my-4">
              <Card style={{ width: "18rem" }}>

                <Card.Body>
                     <Card.Title><h6>Name: {users.name}</h6> </Card.Title>
                  <Card.Text>
                   <h6>Phone {users.phone}</h6>
                   <h6>Email {users.email}</h6>
                  </Card.Text>
                  <Button variant="info">
                    <Link to={`/users/${users.id}`}>Details</Link>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
