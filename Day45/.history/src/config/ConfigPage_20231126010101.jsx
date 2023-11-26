import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

const ConfigPage = () => {
  const [config, setConfig] = useState({
    MIN_NUMBER: 1,
    MAX_TURN: 7,
  });

  const handleSliderChange = (key, value) => {
    setConfig({ ...config, [key]: value });
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>Configuration</h1>
          <Form>
            <Form.Group controlId="minNumber">
              <Form.Label>Min Number: {config.MIN_NUMBER}</Form.Label>
              <Form.Range
                value={config.MIN_NUMBER}
                onChange={(e) =>
                  handleSliderChange("MIN_NUMBER", e.target.value)
                }
                min={1}
                max={10} // You can adjust the range as needed
              />
            </Form.Group>

            <Form.Group controlId="maxTurn">
              <Form.Label>Max Turn: {config.MAX_TURN}</Form.Label>
              <Form.Range
                value={config.MAX_TURN}
                onChange={(e) => handleSliderChange("MAX_TURN", e.target.value)}
                min={1}
                max={20} // You can adjust the range as needed
              />
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ConfigPage;
