import React, { useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { Button, Container, Form } from "react-bootstrap";
import axios from "axios";
const Login = ({ onSubmitID }) => {
  const idRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    postData()
    onSubmitID(idRef.current.value);
  };

  const createNewId = async() => {
    const newId = uuidv4()
   await postData('sign-up',newId)
    onSubmitID(newId);
  };

  const postData = async (URL, Data) => {
    try { 
    await  axios
        .post(`http://localhost:5000/${URL}`, Data)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <Container
      className="d-flex align-items-center"
      style={{ height: "100vh" }}
    >
      <Form onSubmit={handleSubmit} className="w-100">
        <Form.Group>
          <Form.Label>Enter your Id</Form.Label>
          <Form.Control type="text" ref={idRef} required />
        </Form.Group>
        <Button type="submit" className="me-2">
          Login
        </Button>
        <Button onClick={createNewId} variant="secondary" className="">
          Create New Id
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
