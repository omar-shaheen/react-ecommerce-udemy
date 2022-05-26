import React, { Component, Fragment } from "react";
import {
  Container,
  Form,
  FormControl,
  Navbar,
  Button,
  Col,
  Row,
} from "react-bootstrap";
import "../assets/css/custom.css";
import Logo from "../assets/imgs/ctp.png";

export class TopNavbar extends Component {
  render() {
    return (
      <Fragment>
        <Navbar fixed="" expand="lg" variant="light" className="navbar">
          <Container fluid={false} className="d-block">
            <Row>
              <Col lg={3} md={3}>
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
              </Col>

              <Col lg={4} md={4}>
                <Form className="d-flex">
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-1"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">
                    <i className="fa fa-search"></i>
                  </Button>
                </Form>
              </Col>

              <Col lg={5} md={5} className="d-flex align-items-center justify-content-between">
                <a href="" className="cart-btn">
                  <i className="fa fa-shopping-cart"></i> item 0
                </a>

                <a href="">
                  <i className="fa fa-2x fa-heart"></i>
                  <sup>
                    <span className="badge text-white bg-danger">0</span>
                  </sup>
                </a>
                <a href="">
                  <i className="fa fa-2x fa-bell"></i>
                  <sup>
                    <span className="badge text-white bg-danger">8</span>
                  </sup>
                </a>

                <a href="" className="user-icon">
                  <i className="fa fa-2x fa-share"></i>
                </a>
                <a href="" className="user-icon">
                  <i className="fa fa-2x fa-address-card"></i>
                </a>
              </Col>
            </Row>
          </Container>
        </Navbar>
      </Fragment>
    );
  }
}

export default TopNavbar;
