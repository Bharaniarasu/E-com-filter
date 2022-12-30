import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown
} from "react-bootstrap";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./navbar.scss";

const NavigationBar = (props) => {
  const [query, setQuery] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Triggered...........................");
    dispatch({ type: "UPDATE_QUERY", enteredQuery: query });
  }, [query]);

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="home">
          <img
            src="https://pngimg.com/uploads/amazon/amazon_PNG21.png"
            className="logo"
            alt="amazon-logo"
            style={{ height: "4rem", width: "4rem" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="home">Home</Nav.Link>
            <NavDropdown title="Products" id="navbarScrollingDropdown">
              <NavDropdown.Item href="mens_clothing">
                Men's Clothing
              </NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item href="womens_clothing">
                Women's Clothing
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="electronics">
                Electronics
              </NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item href="jwellery">Jwellery</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="about_us">About us</Nav.Link>

            <Nav.Link href="contact_us">Contact us</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(event) => setQuery(event.target.value)}
            />
          </Form>
          <Nav>
            <Nav.Link href="add">
              <span className="btn btn-primary">Add</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
