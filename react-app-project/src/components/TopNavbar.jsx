import React, { Component, Fragment } from "react";
import { Container, Navbar } from "react-bootstrap";
import "../assets/css/custom.css";
import Logo from "../assets/imgs/ctp.png";

export class TopNavbar extends Component {
  render() {
    return (
      <Fragment>
        <Navbar expand="lg" variant="light" bg="light">
          <Container fluid={true}>
            <Navbar.Brand href="#home">
              <img
                alt=""
                src={Logo}
                width="40"
                height="40"
                className="d-inline-block"
              />
              Creative Team
            </Navbar.Brand>
          </Container>
        </Navbar>
      </Fragment>
    );
  }
}

export default TopNavbar;
