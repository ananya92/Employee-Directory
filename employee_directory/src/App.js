import React from 'react';
import './App.css';
import NavigationBar from "./components/NavigationBar";
import DropdownFilter from "./components/DropdownFilter";
import DropdownSort from "./components/DropdownSort";
import EmployeeData from "./components/EmployeeData";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { EmployeeContextProvider } from "./utils/GlobalState";

function App() {
  return (
    <div>
      <NavigationBar />
      <EmployeeContextProvider>
        <Container style={{paddingTop: '1rem'}}> 
          <Row>
            <Col xs={8}>
              <DropdownFilter />
            </Col>
            <Col xs={4}>
              <DropdownSort /> 
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <EmployeeData />
            </Col>
          </Row>
        </Container>
      </EmployeeContextProvider>
    </div>
  );
}

export default App;
