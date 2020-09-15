import React, { Component } from "react";
import PropTypes from "prop-types";
import { Alert } from "react-bootstrap";
import "./style.css";

class ListMessages extends Component {
  render() {
    return (
      <div>
        <Alert variant="secondary">
          <span>Khac Ngoc</span> không online!
        </Alert>
        <div className="wrap-message">
          <div className="from-me">
            <div className="avatar"></div>
            <div className="info-message">
              <div className="timeline">21:10 20-08-2020</div>
              <div className="des-message">Xin chao bạn</div>
            </div>
          </div>
        </div>
        <div className="wrap-message">
          <div className="from-you">
            <div className="avatar"></div>
            <div className="info-message">
              <div className="timeline">22:22 20-08-2020</div>
              <div className="des-message">Chào bạn bạn khỏe chứ ? </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ListMessages.propTypes = {};

export default ListMessages;
