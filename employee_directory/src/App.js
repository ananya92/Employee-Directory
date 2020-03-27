import React from 'react';
import './App.css';
import NavigationBar from "./components/NavigationBar";
import DropdownFilter from "./components/DropdownFilter";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  return (
    <div>
      <NavigationBar />
      <Container style={{paddingTop: '1rem'}}> 
        <Row>
          <Col>
            <DropdownFilter />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
