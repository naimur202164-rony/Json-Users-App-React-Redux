import axios from "axios";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import { setSelectedUsers } from "../redux/action/userAction";
import Header from "./Header";
export default function UserDetail() {
  const { usersId } = useParams();
  const usersSelected=useSelector((state)=>state.selectedUsers.userSlected);
  const dispatch=useDispatch()
  // console.log(usersSelected);
  const fetchUser = async () => {
    const respone = await axios
      .get(`https://jsonplaceholder.typicode.com/posts?userId=${usersId}`)
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
          {
            usersSelected.map((items)=>(
              <Col className="my-4">
              <Card style={{ width: "18rem", height: "auto" }}>
                <Card.Body>
                  <Card.Title>
                    <h6>Name:{items.title}</h6>{" "}
                  </Card.Title>
                  <Card.Text>
                    <p>{items.id}</p>
                    <p>{items.body}</p>
                  </Card.Text>
                  <Link to={`/posts/${items.id}`}>go commnets</Link>
                </Card.Body>
              </Card>
            </Col>
            ))
          }
        </Row>
      </Container>
    </div>
  );
}
