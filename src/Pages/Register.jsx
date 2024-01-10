import { useRef, useState } from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../Store";
export default function Register() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.auth.status);
  const [formData, setFormData] = useState({
    username: "",
    firstname: "",
    lastname: "",
    phoneno: null,
    email: "",
    password: "",
    cpassword: "",
  });
  const idRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      username,
      firstname,
      lastname,
      phoneno,
      email,
      password,
      cpassword,
    } = formData;
    if (
      !username.trim() ||
      !firstname.trim() ||
      !lastname.trim() ||
      !phoneno.trim() ||
      !email.trim() ||
      !password.trim() ||
      !cpassword.trim()
    )
      return alert("invalid credentials . please enter values");

    if (phoneno.trim().toString().length !== 10)
      return alert("invalid phone no.please enter valid no");
    if (password.trim().length < 8)
      return alert("password minimum length must be 8");
    if (password.trim() !== cpassword.trim())
      return alert("password need to match");

    dispatch(registerUser(formData));
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
                    <Form onSubmit={handleSubmit} ref={idRef}>
                      <Form.Group className="mb-3">
                        <Form.Label className="text-center">
                          User Name
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="username"
                          placeholder="Enter User Name"
                          min={5}
                          max={8}
                          required
                          value={formData.username}
                          onChange={(e) =>
                            setFormData((pre) => ({
                              ...pre,
                              username: e.target.value,
                            }))
                          }
                        />
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label className="text-center">
                          First Name
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="firstname"
                          placeholder="Enter First Name"
                          required
                          value={formData.firstname}
                          onChange={(e) =>
                            setFormData((pre) => ({
                              ...pre,
                              firstname: e.target.value,
                            }))
                          }
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label className="text-center">
                          Last Name
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="lastname"
                          placeholder="Enter Last Name"
                          required
                          value={formData.lastname}
                          onChange={(e) =>
                            setFormData((pre) => ({
                              ...pre,
                              lastname: e.target.value,
                            }))
                          }
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label className="text-center">
                          Phone No
                        </Form.Label>
                        <Form.Control
                          type="number"
                          name="phoneno"
                          placeholder="Enter Phone Number"
                          required
                          min={10}
                          value={formData.phoneno}
                          onChange={(e) =>
                            setFormData((pre) => ({
                              ...pre,
                              phoneno: e.target.value,
                            }))
                          }
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          placeholder="Enter email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData((pre) => ({
                              ...pre,
                              email: e.target.value,
                            }))
                          }
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          name="password"
                          placeholder="Password"
                          required
                          min={8}
                          value={formData.password}
                          onChange={(e) =>
                            setFormData((pre) => ({
                              ...pre,
                              password: e.target.value,
                            }))
                          }
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>c Password</Form.Label>
                        <Form.Control
                          type="password"
                          name="cpassword"
                          placeholder="Password"
                          required
                          min={8}
                          value={formData.cpassword}
                          onChange={(e) =>
                            setFormData((pre) => ({
                              ...pre,
                              cpassword: e.target.value,
                            }))
                          }
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                        <p className="small">
                          <a className="text-primary" href="#!">
                            already have an account?
                          </a>
                        </p>
                      </Form.Group>
                      <div className="d-grid">
                        <Button
                          variant="primary"
                          disabled={status === "pending"}
                          type="submit"
                        >
                          Register
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Don't have an account?{" "}
                        <a href="{''}" className="text-primary fw-bold">
                          Login
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
