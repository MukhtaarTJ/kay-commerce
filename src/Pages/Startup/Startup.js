import React from "react";
import styles from "./Startup.module.css";
import Carousel from "react-bootstrap/Carousel";
import Footer from "../../footer/footer";
import { Link } from "react-router-dom";

const Startup = () => {
  return (
    <>
      <div className={styles.description}>
        <h1>More Updates About Kay-Commerce</h1>
        {/* <p className={styles.text}>
          Reducing the carbon footprint of our products is at the heart of
          everything we do.
        </p> */}
        {/* <button className="btn">OUR SUSTAINABILITY STRATEGY</button> */}
        <Link to="/home" className="btn">
          visit our product page
        </Link>
      </div>
      <Carousel className="py-5">
        <Carousel.Item>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "500px",
            }}>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/2002717/pexels-photo-2002717.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="First slide"
              style={{ objectFit: "cover", maxHeight: "100%" }}
            />
          </div>
          <Carousel.Caption>
            <h3>First Slide Label</h3>
            <p>Some description for the first slide.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "500px",
            }}>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/935760/pexels-photo-935760.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Second slide"
              style={{ objectFit: "cover", maxHeight: "100%" }}
            />
          </div>
          <Carousel.Caption>
            <h3>Second Slide Label</h3>
            <p>Some description for the second slide.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "500px",
            }}>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/8386639/pexels-photo-8386639.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Third slide"
              style={{ objectFit: "cover", maxHeight: "100%" }}
            />
          </div>
          <Carousel.Caption>
            <h3>Third Slide Label</h3>
            <p>Some description for the third slide.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Footer />
    </>
  );
};

export default Startup;
