import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useCartContext } from "../../hooks/useCart";

const Product = ({ products }) => {
  const { dispatch, state } = useCartContext();

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };
  return (
    <Container>
      <Row xs={1} md={2} lg={3} className="g-4">
        {products.map((product, index) => (
          <Col key={index}>
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={product.img} />
              <Card.Body>
                <Card.Title>{product.designer}</Card.Title>
                <Card.Text>{product.price}</Card.Text>
                <Button variant="primary" onClick={() => addToCart(product)}>
                  Add to cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Product;
