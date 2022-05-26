import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import HomeSlider from "./HomeSlider";
import SidebarMenu from "./SidebarMenu";

export class HomeTop extends Component {
  render() {
    return (
      <>
        <Container className="px-0 pt-2" fluid={false}>
          <Row>
            <Col lg={9} md={9} sm={12}>
              <HomeSlider />
            </Col>
            <Col lg={3} md={3} sm={12}>
              <SidebarMenu />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default HomeTop;
