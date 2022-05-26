import React, { Component, Fragment } from "react";
import "../../assets/css/custom.css";
import { Container, Row, Col, Card } from "react-bootstrap";

export class Collection extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center" fluid={false}>
          <div className="section-title text-center mb-55">
            <h2> Collection</h2>
            <p>Some Of Our Exclusive Collection, You May Like</p>
          </div>
          <Row>
            <Col className="mb-4" lg={3} md={3} sm={6}>
              <div>
                <Card className="image-box card w-100">
                  <img
                    className="center w-75"
                    src="https://shoppingecommerce.netlify.app/dist/imgs/products/products-02.png"
                  />
                  <Card.Body>
                    <p className="product-name-on-card">
                      Perfect Homes Webster Engineered Wood TV
                    </p>
                    <p className="product-price-on-card">price : 100$</p>
                  </Card.Body>
                </Card>
              </div>
            </Col>

            <Col className="mb-4" lg={3} md={3} sm={6}>
              <div>
                <Card className="image-box card w-100">
                  <img
                    className="center w-75"
                    src="https://shoppingecommerce.netlify.app/dist/imgs/products/products-02.png"
                  />
                  <Card.Body>
                    <p className="product-name-on-card">
                      Perfect Homes Webster Engineered Wood TV
                    </p>
                    <p className="product-price-on-card">price : 100$</p>
                  </Card.Body>
                </Card>
              </div>
            </Col>

            <Col className="mb-4" lg={3} md={3} sm={6}>
              <div>
                <Card className="image-box card w-100">
                  <img
                    className="center w-75"
                    src="https://shoppingecommerce.netlify.app/dist/imgs/products/products-02.png"
                  />
                  <Card.Body>
                    <p className="product-name-on-card">
                      Perfect Homes Webster Engineered Wood TV
                    </p>
                    <p className="product-price-on-card">price : 100$</p>
                  </Card.Body>
                </Card>
              </div>
            </Col>

            <Col className="mb-4" lg={3} md={3} sm={6}>
              <div>
                <Card className="image-box card w-100">
                  <img
                    className="center w-75"
                    src="https://shoppingecommerce.netlify.app/dist/imgs/products/products-02.png"
                  />
                  <Card.Body>
                    <p className="product-name-on-card">
                      Perfect Homes Webster Engineered Wood TV
                    </p>
                    <p className="product-price-on-card">price : 100$</p>
                  </Card.Body>
                </Card>
              </div>
            </Col>

            <Col className="mb-4" lg={3} md={3} sm={6}>
              <div>
                <Card className="image-box card w-100">
                  <img
                    className="center w-75"
                    src="https://shoppingecommerce.netlify.app/dist/imgs/products/products-02.png"
                  />
                  <Card.Body>
                    <p className="product-name-on-card">
                      Perfect Homes Webster Engineered Wood TV
                    </p>
                    <p className="product-price-on-card">price : 100$</p>
                  </Card.Body>
                </Card>
              </div>
            </Col>

            <Col className="mb-4" lg={3} md={3} sm={6}>
              <div>
                <Card className="image-box card w-100">
                  <img
                    className="center w-75"
                    src="https://shoppingecommerce.netlify.app/dist/imgs/products/products-02.png"
                  />
                  <Card.Body>
                    <p className="product-name-on-card">
                      Perfect Homes Webster Engineered Wood TV
                    </p>
                    <p className="product-price-on-card">price : 100$</p>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
export default Collection;
