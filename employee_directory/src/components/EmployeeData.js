import React, { useContext } from "react";
import Table from 'react-bootstrap/Table';
import EmployeeListContext from "../utils/EmployeeListContext";

function EmployeeData() {
    const employeeState = useContext(EmployeeListContext);
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
            {employeeState.employees.map((employee, index) => (
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