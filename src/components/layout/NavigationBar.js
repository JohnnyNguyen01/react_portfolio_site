import React from "react";
import { Nav } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <Nav activeKey="/home" className='justify-content-end'>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default NavigationBar;
