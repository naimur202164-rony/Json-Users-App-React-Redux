import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { Container,Row,Col,Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { setSelectedComments } from '../redux/action/userAction';
import Header from './Header';


function UserCommnets() {
  const userCommnetss=useSelector((state)=>state.selectedComments.commentSelected);
  const dispatch=useDispatch()
  const fethData=async()=>{
    const response = await axios
    .get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
    .catch((err) => {
      console.log("Err: ", err);
    });
      dispatch(setSelectedComments(response.data));
  }
  
  useEffect(()=>{
    fethData()
  },[])

const {postId}=useParams()

  return (
    <div>
      
       <Header/>
      {/* {usersId} */}
    
      <Container>
      <h3>Comments</h3>
        <Row>
          {
            userCommnetss.map((items)=>(
              <Col className="my-4">
              <Card style={{ width: "18rem", height: "auto" }}>
                <Card.Body>
                  <Card.Title>
                    <h6>Name:{items.name}</h6>{" "}
                  </Card.Title>
                  <Card.Text>
                    <p>{items.id}</p>
                    <p>{items.body}</p>
                  </Card.Text>
                 
                </Card.Body>
              </Card>
            </Col>
            ))
          }
        </Row>
      </Container>
    </div>
  )
}

export default UserCommnets
