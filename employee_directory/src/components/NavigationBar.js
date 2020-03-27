import React from "react";
import Navbar from "react-bootstrap/Navbar";
function NavigationBar() {
    return (
        <Navbar className="justify-content-center" sticky="top"  bg="success" variant="dark">
            <Navbar.Brand href="#home">Employee Directory</Navbar.Brand>
        </Navbar>
    )
}

export default NavigationBar;