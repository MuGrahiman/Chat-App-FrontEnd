import React, { useEffect, useRef, useState } from "react";

import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userPostOTP, userResendOtp } from "../Store";

export default function OTP({ onSubmitID }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status, authData } = useSelector((state) => state.auth);
  const [otp, setOtp] = useState("");

  useEffect(() => {
    if (
      !authData ||
      (authData !== null &&
        typeof authData === "object" &&
        Object.keys(authData).length === 0)
    )
      return navigate("/register");
  }, []);

  useEffect(() => {
    if (authData?.success) navigate("/login");
  }, [authData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!otp.trim()) alert("Please Enter Valid Otp ");
    dispatch(userPostOTP({ id: authData.otpId, data: otp }));
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
                  <p className=" mb-5">Please enter your otp!</p>
                  <div className="mb-3">
                    <Form onSubmit={handleSubmit}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">OTP</Form.Label>
                        <Form.Control
                          type="text"
                          value={otp}
                          onChange={(e) => setOtp(e.target.value)}
                          placeholder="Enter OTP"
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                        <p className="small">
                          <a
                            className="text-primary"
                            onClick={() =>
                              dispatch(userResendOtp(authData.userId))
                            }
                            href="#!"
                          >
                            Resend OTP?
                          </a>
                        </p>
                      </Form.Group>
                      <div className="d-grid">
                        <Button variant="primary" type="submit">
                          Submit
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
