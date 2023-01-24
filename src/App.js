import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./App.css";

const App = () => {
  let [result, setResult] = useState("");

  return (
    <Container className="p-3">
      <div>
        <h2 placeholder="enteer">{result}</h2>
        <Row className="mt-4 gap-2" id="row">
          <Col id="btn" onClick={(e) => setResult(result + "1")}>
            1
          </Col>
          <Col id="btn" onClick={(e) => setResult(result + "2")}>
            2
          </Col>
          <Col id="btn" onClick={(e) => setResult(result + "3")}>
            3
          </Col>
        </Row>
        <Row className="mt-4 gap-2 row">
          <Col id="btn" onClick={(e) => setResult(result + "4")}>
            4
          </Col>
          <Col id="btn" onClick={(e) => setResult(result + "5")}>
            5
          </Col>
          <Col id="btn" onClick={(e) => setResult(result + "6")}>
            6
          </Col>
        </Row>

        <Row className="mt-4  " id="row">
          <Col id="btn" onClick={(e) => setResult(result + "7")}>
            7
          </Col>
          <Col id="btn" onClick={(e) => setResult(result + "8")}>
            8
          </Col>
          <Col id="btn" onClick={(e) => setResult(result + "9")}>
            9
          </Col>
        </Row>
        <Row className="mt-4  ">
          <Col id="btn" onClick={(e) => setResult(result + "0")}>
            0
          </Col>
          <Col id="operations" onClick={(e) => setResult(result + "+")}>
            +
          </Col>
          <Col id="operations" onClick={(e) => setResult(result + "-")}>
            -
          </Col>
          <Col id="operations" onClick={(e) => setResult(result + "*")}>
            *
          </Col>
        </Row>
        <Row className="mt-4 ">
          <Col id="operations" onClick={(e) => setResult(result + "/")}>
            /
          </Col>
          <Col id="operations" onClick={(e) => setResult(result + ".")}>
            .
          </Col>
          <Col id="operations" onClick={(e) => setResult(eval(result))}>
            =
          </Col>
          <Col id="operations" onClick={(e) => setResult((result = ""))}>
            AC
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default App;
