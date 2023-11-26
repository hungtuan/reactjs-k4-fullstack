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
            <Form.Group controlId="maxTurn">
              <Form.Label>Max Turn: {config.MAX_TURN}</Form.Label>
              <Form.Range
                value={config.MAX_TURN}
                onChange={(e) => handleSliderChange("MAX_TURN", e.target.value)}
                min={1}
                max={20} 
              />
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ConfigPage;
