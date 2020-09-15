import React, { Component } from "react";
import PropTypes from "prop-types";
import { Alert, Row, Col } from "react-bootstrap";
import NewMessage from "./NewMessage";
import ListMessages from "./ListMessages";
import Users from "./Users";

class ChatPage extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col md={{ span: 12 }}>
            <Alert variant="primary">Khac Ngoc</Alert>
          </Col>
        </Row>
        <Row>
          <Col sm={3}>
            <Users />
          </Col>
          <Col sm={9}>
            <ListMessages />
            <NewMessage />
          </Col>
        </Row>
      </div>
    );
  }
}

ChatPage.propTypes = {};

export default ChatPage;
