import React, { Component, Fragment } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../assets/css/custom.css";
import Cat1 from "../../assets/imgs/lights.png";
export class Categories extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center" fluid={false}>
          <div className="section-title text-center mb-55">
            <h2> CATEGORIES</h2>
            <p>Some Of Our Exclusive Collection, You May Like</p>
          </div>
          <Row>
            <Col lg={2} md={2} sm={6}>
              <Card className="h-100 w-100 text-center">
                <Card.Body>
                  <img className="center" src={Cat1} />
                  <h4 className="category-name">Living Room </h4>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={2} md={2} sm={6}>
              <Card className="h-100 w-100 text-center">
                <Card.Body>
                  <img className="center" src={Cat1} />
                  <h4 className="category-name">Living Room </h4>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={2} md={2} sm={6}>
              <Card className="h-100 w-100 text-center">
                <Card.Body>
                  <img className="center" src={Cat1} />
                  <h4 className="category-name">Living Room </h4>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={2} md={2} sm={6}>
              <Card className="h-100 w-100 text-center">
                <Card.Body>
                  <img className="center" src={Cat1} />
                  <h4 className="category-name">Living Room </h4>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={2} md={2} sm={6}>
              <Card className="h-100 w-100 text-center">
                <Card.Body>
                  <img className="center" src={Cat1} />
                  <h4 className="category-name">Living Room </h4>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={2} md={2} sm={6}>
              <Card className="h-100 w-100 text-center">
                <Card.Body>
                  <img className="center" src={Cat1} />
                  <h4 className="category-name">Living Room </h4>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
export default Categories;
