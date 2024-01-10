import React, { useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";

export default function Login({ onSubmitID }) {
  const idRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    postData()
    // onSubmitID(idRef.current.value);
  };

  const createNewId = async() => {
    const newId = uuidv4()
   await postData('sign-up',newId)
    // onSubmitID(newId);
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
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <div className="border border-3 border-primary"></div>
            <Card className="shadow">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-uppercase ">Brand</h2>
                  <p className=" mb-5">Please enter your login and password!</p>
                  <div className="mb-3">
                    <Form onSubmit={handleSubmit} ref={idRef} >
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                        <p className="small">
                          <a className="text-primary" href="#!">
                            Forgot password?
                          </a>
                        </p>
                      </Form.Group>
                      <div className="d-grid">
                        <Button variant="primary" type="submit">
                          Login
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Don't have an account?{" "}
                        <a href="{''}" className="text-primary fw-bold">
                          Sign Up
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}