import React, { useState, useEffect } from 'react';
import './App.css';
import NavigationBar from "./components/NavigationBar";
import DropdownFilter from "./components/DropdownFilter";
import DropdownSort from "./components/DropdownSort";
import EmployeeData from "./components/EmployeeData";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import EmployeeListContext from "./utils/EmployeeListContext";
import API from "./utils/API";

function App() {
  // Added a employeeState with employee list and onClick function and passed the employeeState to the employee context so that the employee context can be dynamically changed by the child components.
  const [employeeState, setEmployeeState] = useState({
    employees: [],
    onClick: (employees) => {
      // Using the spread operator so that we don't lose our onClick method whenever the state is updated.
      setEmployeeState({...employeeState, employees });
    }
  });

  // Loading the employees from the database when the page loads for the first time.
  useEffect(() => {
    API.getEmployees().then((res) => {
      setEmployeeState({...employeeState, employees: res.data });
    });
  }, []);

  return (
    <div>
      <NavigationBar />
      <EmployeeListContext.Provider value={employeeState}>
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
      </EmployeeListContext.Provider>
    </div>
  );
}

export default App;
