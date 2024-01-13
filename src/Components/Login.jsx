import React, { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../Store";
import useLocalStorage from "../Hooks/useLocalStorage";

export default function Login({ onSubmitID }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status, authData } = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user.currentUser);
  const [_, setValue] = useLocalStorage("USER");
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  useEffect(() => {
    if (user !== null && Object.keys(user).length > 0) {
      navigate("/home");
      setValue(user);
    }
  }, [user]);

  useEffect(() => {
    if (
      user !== null &&
      typeof user === "object" &&
      Object.keys(user).length > 0
    ) {
      setValue(user);
      navigate("/home");
    }
  }, [user]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = userData;
    if (!email || !password)
      alert("invalid credentials. please enter valid data");
    dispatch(userLogin({ email, password }));
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
                    <Form onSubmit={handleSubmit}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control
                          type="email"
                          value={userData.email}
                          onChange={(e) =>
                            setUserData((prev) => ({
                              ...prev,
                              email: e.target.value,
                            }))
                          }
                          placeholder="Enter email"
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          value={userData.password}
                          onChange={(e) =>
                            setUserData((prev) => ({
                              ...prev,
                              password: e.target.value,
                            }))
                          }
                          placeholder="Password"
                        />
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
