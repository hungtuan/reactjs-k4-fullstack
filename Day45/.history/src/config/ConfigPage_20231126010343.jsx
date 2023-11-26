import React, { useState } from "react";
import { Container, Row, Col, Form, ProgressBar } from "react-bootstrap";

const ConfigPage = () => {
  const [config, setConfig] = useState({
    MIN_NUMBER: 1,
    MAX_TURN: 7,
  });

  const calculateProgress = () => {
    const { MIN_NUMBER, MAX_TURN } = config;
    const percentage = ((MIN_NUMBER - 1) / (MAX_TURN - 1)) * 100;
    return Math.min(100, Math.max(0, percentage)); // Ensure the value is between 0 and 100
  };

  const handleSliderChange = (key, value) => {
    setConfig({ ...config, [key]: value });
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>Configuration</h1>
          <Form></Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ConfigPage;
