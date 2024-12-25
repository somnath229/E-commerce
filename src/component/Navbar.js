import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../style/Footer.css";

export default function Navbar({
  onShowLoginForm,
  onShowSignUpForm,
  showLoginForm,
  showSignUpForm,
}) {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
  let isLoggedIn = true;
  // const navigate = useNavigate();
  // navigate("/login");

  return (
    <div className="NavMain" style={{padding:"2rem"}}>
      <Nav variant="pills" activeKey="1" onSelect={handleSelect}>
        <div className="NavMain">
          <Nav.Item>
            <Nav.Link
              eventKey="1"
              href="#/home"
              style={{
                background: "#6D4FC2",
                fontWeight: "800",
                fontSize: "1rem",
              }}>
              E-commerce
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link
              eventKey="2"
              title="Item"
              style={{
                color: "grey",
                fontWeight: "500",
                fontSize: "1rem",
                // paddingLeft: "3rem",
              }}>
              {" "}
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="3"
              disabled
              style={{
                color: "grey",
                fontWeight: "500",
                fontSize: "1rem",
              }}>
              Collections
            </Nav.Link>
          </Nav.Item>
          <NavDropdown
            title="Check More"
            id="nav-dropdown"
            style={{
              fontWeight: "500",
              fontSize: "1rem",
            }}>
            <NavDropdown.Item eventKey="4.1">Summer</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">Moonsoon</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">Winter</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="4.4">About Us</NavDropdown.Item>
          </NavDropdown>
        </div>
      </Nav>
      <div>
        <Form inline>
          <Row>
            <Col xs="auto">
              <Button
                style={{ background: "#6D4FC2", margin: "0 .2rem" }}
                onClick={onShowSignUpForm}>
                Sign UP
              </Button>

              <Button
                style={{ background: "#6D4FC2" }}
                onClick={onShowLoginForm}>
                Sign IN
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
}
