import React, { Component, Fragment } from "react";
import "../../assets/css/custom.css";
import { Container, Row, Card } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export class NewArrival extends Component {
  constructor() {
    super();

    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 1500,
      arrows: false,
    };
    return (
      <Fragment>
        <Container className="text-center" fluid={false}>
          <div className="section-title text-center mb-55">
            <h2>
              New Arrival &nbsp;
              <a className="btn btn-sm ml-2 site-btn" onClick={this.previous}>
                <i className="fa fa-angle-left"></i>
              </a>
              &nbsp;
              <a className="btn btn-sm ml-2 site-btn" onClick={this.next}>
                <i className="fa fa-angle-right"></i>
              </a>
            </h2>
            <p>Some Of Our Exclusive Collection, You May Like</p>
          </div>
          <Row>
            <Slider
              ref={(c) => (this.slider = c)}
              {...settings}
              className="products-items"
            >
              <div>
                <Card className="image-box card">
                  <img
                    className="center"
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

              <div>
                <Card className="image-box card">
                  <img
                    className="center"
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

              <div>
                <Card className="image-box card">
                  <img
                    className="center"
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

              <div>
                <Card className="image-box card">
                  <img
                    className="center"
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

              <div>
                <Card className="image-box card">
                  <img
                    className="center"
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
            </Slider>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
export default NewArrival;
