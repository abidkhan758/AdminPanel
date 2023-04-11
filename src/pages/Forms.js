import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HorizontalForm from "./HorizontalForm";
import RegularForm from "./RegularForm";

const Forms = () => {
  return (
    <Row>
      <Row>
        <Col lg={6} md={12}>
          <HorizontalForm />
        </Col>
        <Col lg={6} md={12}>
          <RegularForm />
        </Col>
      </Row>
    </Row>
  );
};

export default Forms;
