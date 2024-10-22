import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbaar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary navbaar">
      <Container>
        <Navbar.Brand href="#home">JobHuntPro</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">Find Jobs</Nav.Link>
            <Nav.Link href="#pricing"> Job Category</Nav.Link>
            <NavDropdown title="Dashboard" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Sign In</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Log In
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Account</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#" className='p-c fw-bold '>Upload your CV
            </Nav.Link>
            <Nav.Link href="# " className='mybtn2 rounded py-0 pt-1 mx-4'>Login / Register</Nav.Link>
            <Nav.Link eventKey={2} href="#memes" className='my-btn rounded '>Job Post</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbaar;