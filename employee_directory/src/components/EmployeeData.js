import React from "react";
import Table from 'react-bootstrap/Table'
function EmployeeData() {
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
            </tbody>
            </Table>
    )
}

export default EmployeeData;