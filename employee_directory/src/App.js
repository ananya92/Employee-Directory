import React from 'react';
import './App.css';
import NavigationBar from "./components/NavigationBar";
import DropdownFilter from "./components/DropdownFilter";
import DropdownSort from "./components/DropdownSort";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  return (
    <div>
      <NavigationBar />
      <Container style={{paddingTop: '1rem'}}> 
      <Row>
          <Col xs={8}>
            <DropdownFilter />
          </Col>
          <Col xs={4}>
            <DropdownSort /> 
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
