import React, { useEffect } from "react";
import Table from 'react-bootstrap/Table';
import { useEmployeeContext } from "../utils/GlobalState";
import API from "../utils/API";

function EmployeeData(props) {
    const [state, dispatch] = useEmployeeContext();
    // Loading the employees from the database when the page loads for the first time.
    useEffect(() => {
        API.getEmployees().then((res) => {
        dispatch({type:"init", data: res.data });
        });
    }, []);
    return ( 
        <Table striped bordered hover responsive>
            <thead>
                <tr>
                <th>#</th>
                <th>Name</th>
                <th>Employee ID</th>
                <th>Department</th>
                <th>Designation</th>
                <th>Email ID</th>
                <th>Phone No.</th>
                </tr>
            </thead>
            <tbody className="empData">
            {state.currentEmployees.map((employee, index) => (
                <tr>
                    <td>{index + 1}</td>
                    <td>{employee.name}</td>
                    <td>{employee.employeeID}</td>
                    <td>{employee.department}</td>
                    <td>{employee.designation}</td>
                    <td>{employee.email}</td>
                    <td>{employee.phone}</td>
                </tr>
                ))}
            </tbody>
        </Table>
    )
}

export default EmployeeData;