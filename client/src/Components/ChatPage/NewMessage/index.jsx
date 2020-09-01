import React, { Component } from "react";
import PropTypes from "prop-types";
import { Form, Button, InputGroup, FormControl } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab, faApple } from "@fortawesome/free-brands-svg-icons";
import {
  faCheckSquare,
  faCoffee,
  faPaperPlane,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
class NewMessage extends Component {
  render() {
    return (
      <div className="mt-3">
        <Form>
          <InputGroup>
            <FormControl
              placeholder="Nhập tin nhắn"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
              <Button variant="outline-secondary">
                <FontAwesomeIcon icon={faPaperPlane} />
              </Button>
              <Button variant="outline-secondary">
                <FontAwesomeIcon icon={faVideo} />
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Form>
      </div>
    );
  }
}

NewMessage.propTypes = {};

export default NewMessage;
