import React, { useEffect } from "react";
import Header from "./Header";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { setPosts } from "../redux/action/userAction";
import {Button,Row,Col,Card, Container } from 'react-bootstrap';
function Posts() {
  const postss = useSelector((state) => state.allPosts.posts);
  const dispatch = useDispatch();
  const fetchPosts = async () => {
    const respone = await axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .catch((err) => {
        console.log(err);
      });
    dispatch(setPosts(respone.data));
  };

  useEffect(() => {
    fetchPosts();
  }, []);


  return (
    <div>
      <Header />
    
      <Container>
      <h3>POSTS</h3>
      <Row>
        {postss.map((posts) => (
          <Col className="my-4">
          <Card style={{ width: "18rem",height:"auto" }}>

            <Card.Body>
                 <Card.Title><h6>Name: {posts.title.slice(3,20)}</h6> </Card.Title>
              <Card.Text>

               <p>{posts.id }</p>
               <p>{posts.body.slice(5,80)}</p>
              </Card.Text>
              <Button variant="info">
               Details
              </Button>
            </Card.Body>
          </Card>
        </Col>
        ))}
      </Row>
      </Container>
    
    </div>
  );
}

export default Posts;
