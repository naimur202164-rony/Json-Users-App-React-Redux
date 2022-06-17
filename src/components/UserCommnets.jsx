import axios from "axios";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import { setSelectedUsers } from "../redux/action/userAction";
export default function UserCommnets() {
    const { usersId } = useParams();
    const usersSelected=useSelector((state)=>state.selectedUsers);
    const dispatch=useDispatch()
    console.log(usersSelected);
    const fetchUser = async () => {
      const respone = await axios
        .get(`https://jsonplaceholder.typicode.com/comments/${usersId}`)
        .catch((err) => {
          console.log(err);
        });
        dispatch(setSelectedUsers(respone.data))
    };
    useEffect(() => {
      fetchUser();
    }, []);
  
  
  return (
    <div>
       <Container>
       
      </Container>
    </div>
  )
}
