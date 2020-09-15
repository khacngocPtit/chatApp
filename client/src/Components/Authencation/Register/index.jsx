import React, { Component } from "react";
import PropTypes from "prop-types";
import { Row, Col, Card, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class Login extends Component {
  render() {
    return (
      <div>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Đăng Ký</Card.Title>
                <Card.Text>
                  <Form>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Nhập địa chỉ email: </Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Mật khẩu</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Nhập lại mật khẩu</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                      Đăng Ký
                    </Button>
                  </Form>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

Login.propTypes = {};

export default Login;
