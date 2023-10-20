import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useState } from "react";
import { useUserAuth } from "../hooks/useAuthContext";
import { auth } from "../Firebase/Config";

const MyNav = () => {
  const { user, dispatch } = useUserAuth();
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  console.log(user);

  const handleLogout = async () => {
    setError(null);
    setIsPending(true);
    try {
      await signOut(auth);
      dispatch({ type: "LOGOUT" });
      setIsPending(false);
      setError(null);
    } catch (error) {
      console.error("Logout failed: ", error);
    }
  };

  return (
    <>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand as={Link} to="/" className="nav-brand">
            Kay-Commerce
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll>
              {user ? (
                <>
                  <Nav.Link as={Link} to="/home">
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link} to="cart">
                    Cart
                  </Nav.Link>
                </>
              ) : null}
            </Nav>
            <Nav className="ml-auto">
              {user && (
                <>
                  <Button variant="outline-success" onClick={handleLogout}>
                    Logout
                  </Button>
                </>
              )}
              {!user && (
                <>
                  <Nav.Link as={Link} to="/signin">
                    Signin
                  </Nav.Link>
                  <Nav.Link as={Link} to="/signup">
                    Signup
                  </Nav.Link>
                </>
              )}
            </Nav>
            <Form className="d-flex">
              {isPending && (
                <Button variant="outline-success"> Loading....</Button>
              )}
              {error && <p>{error}</p>}
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNav;
