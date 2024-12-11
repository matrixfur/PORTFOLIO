import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiMacos,
} from "react-icons/si";
import { SiRemix } from "react-icons/si";
import { SiEthereum } from "react-icons/si";
function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRemix />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiEthereum />
      </Col>
    </Row>
  );
}

export default Toolstack;
