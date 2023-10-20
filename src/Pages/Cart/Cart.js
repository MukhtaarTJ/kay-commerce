import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useCartContext } from "../../hooks/useCart";

const Cart = () => {
  const { state, dispatch } = useCartContext();
  const removeFromCart = (product) => {
    // dispatch({ type: "REMOVE_FROM_CART", payload: product });
    dispatch({ type: "REMOVE_FROM_CART", payload: { id: product.id } });
  };

  return (
    <Container>
      <Row xs={1} md={2} lg={3} className="g-4">
        {state.cart.map((product) => (
          <Col key={product.id}>
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={product.img} />
              <Card.Body>
                <Card.Title>{product.designer}</Card.Title>
                <Card.Text>{product.price}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => removeFromCart(product)}>
                  Remove
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Cart;
