import React, { Component } from "react";
import PropTypes from "prop-types";
import { Alert, ListGroup } from "react-bootstrap";
class Users extends Component {
  render() {
    return (
      <div>
        <Alert variant="info">Người dùng online</Alert>
        <ListGroup variant="flush">
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Morbi leo risus</ListGroup.Item>
          <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
        </ListGroup>
      </div>
    );
  }
}

Users.propTypes = {};

export default Users;
